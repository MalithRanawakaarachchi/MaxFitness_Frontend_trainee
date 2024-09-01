import React from 'react'
import { Container, Col, Row, Table, Button, Nav} from 'react-bootstrap';
import Sidebar from '../components/navbar/Sidebar';
import { useState, useEffect} from 'react';
import API from "../utils/api";
import "./traineeMetrics.css"

const TraineeMetrics = ()=> {

  const[navVisible, setNavVisible]=useState(true);
  const [schedule, setSchedule] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="home-container">
        <Sidebar visible={navVisible} setVisible={setNavVisible}/>
        <Container className='container-home schedule-background justify-content-center'>
            <Row>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                <Col xl={9} lg={10} md={12} sm={12} xs={12}>
                    <div className='d-flex'>
                        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                            <h3 className='title-ai'>Traine Metrics</h3>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                    </div>
                            
                    <div style={{paddingTop:20, marginLeft:50}} className='color-font'>
                        <form>
                        {metrics.map((metrics) => (
                            <div className='d-flex'>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>Weight</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={metrics.weight}
                                    />
                                    </div>
                                </Col>
                                <Col xl={4}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="email" className='font-style'>Body fat percentage</label>
                                    <input
                                        type="email"
                                        className="form-control text-input"
                                        id="email"
                                        value={metrics.bfp}
                                    />
                                    </div>
                                </Col>
                            </div>
                            ))}
                        {metrics.map((metrics) => (
                            <div className='d-flex'>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>Height</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={metrics.height}
                                    />
                                    </div>
                                </Col>
                                <Col xl={4}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="email" className='font-style'>Lean body mass</label>
                                    <input
                                        type="email"
                                        className="form-control text-input"
                                        id="email"
                                        value={metrics.lbm}
                                    />
                                    </div>
                                </Col>
                            </div>
                        ))}
                        {metrics.map((metrics) => (
                            <div className='d-flex'>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>Body Mass Index (BMI)</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={metrics.bmi}
                                    />
                                    </div>
                                </Col>
                                <Col xl={4}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="email" className='font-style'>Fat mass</label>
                                    <input
                                        type="email"
                                        className="form-control text-input"
                                        id="email"
                                        value={metrics.fat_mass}
                                    />
                                    </div>
                                </Col>
                            </div>
                        ))}
                        {metrics.map((metrics) => (
                            <div className='d-flex'>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>Waist to hip ratio</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={metrics.whr}
                                    />
                                    </div>
                                </Col>
                                <Col xl={4}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="email" className='font-style'>Ideal body weight</label>
                                    <input
                                        type="email"
                                        className="form-control text-input"
                                        id="email"
                                        value={metrics.ideal_body_weight}
                                    />
                                    </div>
                                </Col>
                            </div>
                        ))}
                        {metrics.map((metrics) => (
                            <div className='d-flex'>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>Blood group</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={metrics.blood_group}
                                    />
                                    </div>
                                </Col>
                                <Col xl={4}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="email" className='font-style'>Waist Circumference</label>
                                    <input
                                        type="email"
                                        className="form-control text-input"
                                        id="email"
                                        value={metrics.waist_circumference}
                                    />
                                    </div>
                                </Col>
                            </div>
                        ))}
                        {metrics.map((metrics) => (
                            <div className="form-group">
                            <label htmlFor="message" className='font-style'>Special notes</label>
                            <textarea
                                className="form-control special-notes"
                                id="message"
                                rows="4"
                                value={metrics.special_notes}
                            ></textarea>
                            </div>
                        ))}
                        </form>
                    </div>
                </Col>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                <label htmlFor="" className='note-line'>*All measurements should be done under the trainer's supervision</label>
            </Row>
            
        </Container>
    </div>
  )
}

export default TraineeMetrics;
