import { useEffect, useState } from 'react';
import { MdSend } from 'react-icons/md';
import UserChat from '../components/gymBot/userChat';
import BotChat from '../components/gymBot/botChat';
import './gymbot.css'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Sidebar from '../components/navbar/Sidebar';

export default function ChatPage() {
    const [openModal, setOpenModal] = useState(false);
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [chatList, setChatList] = useState([]);

    const [decisionTree, setDecisionTree] = useState("")

    const [diagnosisTree, setDiagnosisTree] = useState(
        {
            decisionTree: 'diagnosis',
            currentQuestionTag: "symptom",
            position: 0,
            questions: [
                {
                    tag: 'symptom',
                    question: 'What is your symptom?',
                    answer: '',
                },
                {
                    tag: 'duration',
                    question: 'How long have you had this symptom?',
                    answer: '',
                },
                {
                    tag: 'severity',
                    question: 'How severe is your symptom on a scale of 1-10?',
                    answer: '',
                },
                {
                    tag: 'result',
                    answer: ``,
                }
            ]
        }
    )

    function diagnoseIllness(severity, symptoms, duration) {
        // Determine the diagnosis and treatment based on the symptoms and severity
        let diagnosis = '';
        let treatment = '';

        console.log(severity, symptoms, duration)

        if (symptoms.includes('fever') && severity >= 7) {
            diagnosis = 'Flu';
            treatment = 'Rest and drink fluids';
        } else if (symptoms.includes('cough') && severity >= 5) {
            diagnosis = 'Bronchitis';
            treatment = 'Drink fluids and take over-the-counter cough medicine';
        } else if (symptoms.includes('sore throat') && severity >= 3) {
            diagnosis = 'Strep Throat';
            treatment = 'Antibiotics prescribed by a doctor';
        } else {
            diagnosis = 'Unknown';
            treatment = 'Consult a doctor for further evaluation';
        }
        botMessage(`Based on your symptoms, it seems like you have ${diagnosis}. ${treatment}.`);
    }

    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        return response.json();
    }

    const getChatResponse = async (msg) => {
        //console.log(""+process.env.REACT_PUBLIC_API)
        try {
            const body = {
                message: msg
            }
            // const res = await axios.post(`${process.env.REACT_PUBLIC_API}/chatbot`,body);
            const res = await axios.post(`http://127.0.0.1:5000/chatbot`,body);
            //console.log(res)
            botMessage(res.data.response)
        } catch (error) {
            console.log(error
            )
        }
    }

    

    const handleSend = (e) => {
        e.preventDefault();
        const message = e.target.value;
        handleMessage(message)
    }


    const handleMessage = async (message) => {
        userMessage(message);
        const tree = await getDecisionTreeTree(message)
        if (tree == "diagnos") {
            const position = diagnosisTree.position
            if (position == diagnosisTree.questions.length - 1) {
                setDecisionTree('')
                setDiagnosisTree((prev) => ({ ...prev, position: 0 }))
                diagnosisTree.questions[position-1].answer = message
                console.log(diagnosisTree)
                diagnoseIllness(diagnosisTree.questions[2].answer, diagnosisTree.questions[0].answer, diagnosisTree.questions[1].answer)
            } else {
                setDiagnosisTree((prev) => ({ ...prev, questions: prev.questions.map((question, index) => index == position - 1 ? { ...question, answer: message } : question) }))
                botMessage(diagnosisTree.questions[position].question)
                setDiagnosisTree((prev) => ({ ...prev, position: prev.position + 1 }))
            }
        } else {
            getChatResponse(message)
        }
    }

    const getDecisionTreeTree = async (message) => {
        if (decisionTree != "") {
            return decisionTree
        } else {
            if (message.toLowerCase().includes("diagnos")) {
                setDecisionTree("diagnos")
                return "diagnos"
            } else {
                setDecisionTree("")
                return ""
            }
        }
    }

    const userMessage = (msg) => {
        //set user message
        setChatList((prev) => [...prev, { isUser: true, message: msg }]);
        setMessage('');
    }

    const botMessage = (msg) => {
        //set chat bot message
        setChatList((prev) => [...prev, { isUser: false, message: msg }]);
    }

    const exitApplication = () => {
        window.location.href = '/';
    }

    const toggleDopdown = () => {
        setOpenModal(!openModal);
    }

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const[navVisible, setNavVisible]=useState(true);
    return (
        <div className="home-container">
            <Sidebar visible={navVisible} setVisible={setNavVisible}/>
            <Container fluid className='container-home bot-background'>
                <Row>
                    <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                    <Col xl={10} lg={10} md={12} sm={12} xs={12}>
                    <div className='title-ai'>
                        <h3>AI GYM BOT</h3>
                    </div>
                    <div className='frame'>
                        <div className='emptydiv'></div>
                        <div className='scrollable-content3 chat-penal'>
                            <div className='chat-box block px-5'>
                                {
                                    chatList.slice().reverse().map((item, index) => {
                                        if (item.isUser) {
                                            return <UserChat key={index} message={item.message} />
                                        } else {
                                            return <BotChat key={index} message={item.message} />
                                        }
                                    })
                                }
                            </div>
                        </div>

                            <div className='typing-area flex chat-input-background  py-3 px-5'>
                                <div className='chat-input-text-box bg-white mx-auto shadow-md flex justify-between col-12'>
                                    <input
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSend(e);
                                            }
                                        }}
                                        onChange={handleChange}
                                        type='text'
                                        value={message}
                                        placeholder='type your message here!'
                                        className='chat-input-text'
                                    />
                                    <MdSend
                                        onClick={(e) => handleSend(e)}
                                        className='cursor-pointer text-gray-500 drop-shadow-md'
                                        style={{ fontSize: 20 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                </Row>
            </Container>
        </div>
    )
}