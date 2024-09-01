import { useEffect, useState } from 'react';
import { MdSend } from 'react-icons/md';
import UserChat from '../components/AISchedules/userChat';
import BotChat from '../components/AISchedules/botChat';
import { Link } from 'react-router-dom';
import './aiSchedule.css'
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import Sidebar from '../components/navbar/Sidebar';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../utils/api";

export default function ChatPage() {
    const [visible, setVisible] = useState(false);
    const [aniVisible, setAniVisible] = useState(false);
    const [tabVisible, setTabVisible] = useState(false);
    const [displayedMessage, setDisplayedMessage] = useState('');
    const [disabledRows, setDisabledRows] = useState([]);
    const [selectedSchedule, setSelectedSchedule] = useState({
        level: '',
        muscle: '',
    });
    const [scheduleResponse, setScheduleResponse] = useState([]);
    const [loadingAnimation, setLoadingAnimation] = useState('Please Wait');
    const [metrics, setMetrics] = useState([]);

    //notifications
    const notifySuccess=()=>{
        toast.success('Successful!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    const notifyError=()=>{
        toast.error('Error in schedule!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    
    const getScheduleResponse = async (level, muscle) => {
        setLoadingAnimation('Please Wait');
        const dotsInterval = setInterval(() => {
        setLoadingAnimation((prev) => (prev === 'Please Wait...' ? 'Please Wait' : prev + '.'));
        }, 300);

        await new Promise((resolve) => setTimeout(resolve, 4000));

        try {
            const body = {
                level: level,
                target_area: muscle
            }
            const res = await axios.post(`http://127.0.0.1:5000/generate-workout`,body);
            const shuffledSets = res.data.sort(() => Math.random() - 0.5);
            const selectedSets = shuffledSets.slice(0, 3);
            setScheduleResponse(selectedSets);
            setVisible(true)
            setDisabledRows('')

            const originalMessage = "I have carefully studied your query and found some fitness schedules that are best for you. These schedules are made as I think are most appropriate with your presented data and can be discussed with your trainer if necessary.";
            let index = 0;
            const interval = setInterval(() => {
            setDisplayedMessage(originalMessage.substring(0, index));
            index++;
            if (index > originalMessage.length) {
                clearInterval(interval);
                setTabVisible(true)
            }
            }, 10);
            return () => clearInterval(interval);

        } catch (error) {
            console.log(error)
        }finally {
            clearInterval(dotsInterval);
        }
    };
    console.log('display:',displayedMessage)
    const handleChange = (e) => {
        setSelectedSchedule({ ...selectedSchedule, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const level = selectedSchedule.level;
        const muscle = selectedSchedule.muscle;
        setLoadingAnimation('Please wait...');

        try {
            const response = await getScheduleResponse(level, muscle);
            setLoadingAnimation('');
            console.log('API Response:', response);
        } catch (error) {
            console.error('Error fetching schedule:', error);
            setLoadingAnimation('');
        }
      };

      const handleButtonClick = () => {
        setAniVisible(true);
        setVisible(false)
        setTabVisible(false)
      };

      useEffect(() => {
        const fetchMetricsData = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
    
                if (!userId) {
                    console.error('User ID not found in sessionStorage.');
                    return;
                }
                const res = await API.get(`/metrics/${userId}`);       
                if (res.status === 200) {
                    setMetrics(res.data);  
                }
            } catch (error) {
                console.log('Error fetching schedule data:', error);
            }
        };
    
        fetchMetricsData();
      }, []);

      //// add to the schedules table
      const [err, setErr] = useState("");

      const handleSaveButtonClick = (scheduleData, index) => {
        const userId = sessionStorage.getItem('userId');
        const exercise = scheduleData.name;
      
        const dataToSend = {
          ...scheduleData,
          user_id: userId,
          exercise: exercise,
        };
      
        NewSchedule(dataToSend);
        setDisabledRows(prevRows => [...prevRows, index]);

        
      };

      const NewSchedule = async (dataToSend) => {
        try {
        const body = {
            schedule: dataToSend,
            };
            console.log('show:', body)
            const res = await API.post('/schedule', body);
            if (res.status === 200) {
                notifySuccess();
                setErr('');
            }
            if (res.status !== 200) {
                notifyError();
            }
        } catch (error) {
            setErr('Process failed !!!');
            console.log(error);
        }
    };
    
    useEffect(() => {
        NewSchedule();
    }, []);

    const[navVisible, setNavVisible]=useState(true);
    return (
        <div className="home-container">
            <Sidebar visible={navVisible} setVisible={setNavVisible}/>
            <Container fluid className='container-home AIschedule-background'>
                <Row>
                    <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                    <Col xl={10} lg={10} md={12} sm={12} xs={12}>
                    <div className='title-ai'>
                        <h3>AI SCHEDULES</h3>
                    </div>
                    
                    <div className='frame2 scrollable-content2 '>  
                        <div className=''>
                            <p style={{color:'rgb(195, 195, 195)', textAlign:'center'}}> Please select your Goal (Muscle building / Weight loss), target muscle (chest, arms, legs, sholders, abs, back) and your fitness level such as 
                            'Beginner', Intermediate, Advanced correctly for genarate most accurate schedule for you !</p> 
                        </div>  
                        <div className='emptydiv'></div>

                        <Form onSubmit={handleSubmit}>
                        <div className='d-flex' style={{justifyContent:'center'}}>
                            <Form.Group controlId="goalSelect" className='selection-bars'>
                                <Form.Control
                                as="select"
                                className='form-control list-box'
                                name='Goal'
                                value={selectedSchedule}
                                onChange={handleChange}
                                >
                                <option value="">- Select Goal</option>
                                <option value="WeightLoss">Weight Loss</option>
                                <option value="MuscleGain">Muscle Gain</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="muscleSelect" className='selection-bars'>
                                <Form.Control
                                as="select"
                                className='form-control list-box'
                                value={selectedSchedule.muscle}
                                onChange={handleChange}
                                name="muscle"
                                >
                                <option value="">- Select Target Muscle</option>
                                <option value="Arms">Arms</option>
                                <option value="Legs">Legs</option>
                                <option value="Chest">Chest</option>
                                <option value="Shoulders">Shoulders</option>
                                <option value="Abs">Abs</option>
                                <option value="Back">Back</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="levelSelect" className='selection-bars'>
                                <Form.Control
                                as="select"
                                className='form-control list-box'
                                value={selectedSchedule.level}
                                onChange={handleChange}
                                name="level"
                                >
                                <option value="">- Select Fitness Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advance">Advance</option>
                                </Form.Control>
                            </Form.Group>
                            {metrics.map((met) => (
                            <input
                                type='text'
                                className='form-control list-box selection-bars'
                                name='bmi'
                                value={`Your BMI : ${met.bmi}`}
                                onChange={handleChange}
                            />
                            ))}                        
                        </div>
                        <Button
                            type="submit"
                            className='btn-secondary btn-sm cursor-pointer2 drop-shadow-md'
                            style={{ fontSize: 20 }}
                            onClick={handleButtonClick}
                        >
                            Get Schedule
                        </Button>
                        </Form>
                        <div style={{height:30}}>
                            <div className={`${aniVisible ? '' : 'hide-visibility'}`}>
                                {loadingAnimation && (
                                    <div className="loading-animation">
                                        <p align='left' style={{color:'white', paddingLeft:455}}>{loadingAnimation}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={`${visible ? '' : 'hide-visibility'}`}>
                            <div className='chat-area'>
                                <div className='chat-box2' style={{marginBottom:-20}}>
                                    <textarea
                                        className="ani-text"
                                        id="message"
                                        rows="4"
                                        value={displayedMessage}
                                        disabled
                                    ></textarea>  
                                </div> 
                                <div className={`${tabVisible ? '' : 'hide-visibility'}`}>
                                <table className='schedule-table'>
                                <tbody>
                                    {scheduleResponse && scheduleResponse.length > 0 ? (
                                        <>
                                            {scheduleResponse.map((resp, index) => (
                                                <tr key={index} className={disabledRows.includes(index) ? 'disabled-row' : ''}>
                                                    <td className='upper-text ' align='left' style={{paddingLeft:270}}>
                                                        • Exercise: {resp.name} <br/>
                                                        • Equipment: {resp.equipment} <br/>
                                                        • Target Muscle: {resp.target} <br/>
                                                        • SETS: {resp.sets} <br/>
                                                        • REPS: {resp.reps} <br/>
                                                        • REST: {resp.rest} <br/>
                                                        Are you incorporating this fitness plan into your schedules? 
                                                        <Link
                                                            to="#"
                                                            onClick={() => handleSaveButtonClick(resp, index)}
                                                            className='link-style'
                                                        >
                                                            <font className='link-yes'>Yes</font>
                                                        </Link> <br/>
                                                        <p style={{marginTop:15}}>----------------------------------------------------------------------</p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    ) : (
                                        <tr>
                                        <th colSpan="2">No data available</th>
                                        </tr>
                                    )}
                                </tbody>
                                </table>  
                            </div>
                        </div>
                    </div>
                    </div>
                    </Col>
                    <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                </Row>
                <ToastContainer/>
            </Container>
            
        </div>
    )
}