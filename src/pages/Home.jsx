import React from 'react'
import './home.css'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import quoteneww from '../images/quoteneww.png'
import Video from '../Videos/MaxFitness4.mp4'
import {FaRobot} from 'react-icons/fa';
import Sidebar from '../components/navbar/Sidebar';
import {MdOutlinePayment} from 'react-icons/md';
import { useState, useEffect, useRef} from 'react';
import { MdOutlineScheduleSend } from "react-icons/md";
import Chart from 'chart.js/auto';
import API from "../utils/api";

export default function Home() {
  const[navVisible, setNavVisible]=useState(true);
  const[level, setLevel]=useState();
  const firstName = sessionStorage.getItem('firstName');
  const lastName = sessionStorage.getItem('lastName');
  const[noOfSchedules, setNoOfSchedules]=useState();
  const chartRef=useRef(null);
  const chartInstance=useRef(null);

  useEffect(() => {
    const fetchScheduleData = async () => {
        try {
            const userId = sessionStorage.getItem('userId');

            if (!userId) {
                console.error('User ID not found in sessionStorage.');
                return;
            }
            const res = await API.get(`/schedule/${userId}`);       
            if (res.status === 200) {
                setNoOfSchedules(res.data.length);
                console.log('schedileNumber:',noOfSchedules)
            }
        } catch (error) {
            console.log('Error fetching schedule data:', error);
        }
    };

    fetchScheduleData();

  }, []);

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
                if(res.data.level==='Beginner')
                {
                    setLevel(1);  
                }
                if(res.data.level==='Intermediate')
                {
                    setLevel(2);
                }
                if(res.data.level==='Advanced')
                {
                    setLevel(3);
                }
            }
        } catch (error) {
            console.log('Error fetching schedule data:', error);
        }
    };

    fetchMetricsData();
  }, []);
  console.log('level',level);

  //set doughnuts
  useEffect(()=>{
    if(chartInstance.current){
        chartInstance.current.destroy()
    }
    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current=new Chart(myChartRef, {
        type:"doughnut",
        data:{
            datasets :[
              {
                label:"Beginner Level",
                data:[1,2],
                borderColor: ['rgb(255, 255, 0)'],
                backgroundColor:['rgb(231, 231, 0)','rgb(81, 81, 81)'],
                borderWidth:2
              }
           ]
        }
    })
    return()=>{
        if(chartInstance.current){
            chartInstance.current.destroy()
        }
    }
  },[]);

  return (
    <div className="home-container">
        <Sidebar visible={navVisible} setVisible={setNavVisible}/>

            <video src={Video} autoPlay loop muted  className='video-background'/>
     
        <Container fluid className='container-home home-background'>
            <div className='welcome-div d-flex'>
                <Col md={9}>
                    <div>
                        <h4><font face="calibri" color="white"><b>Welcome</b></font></h4>
                        <Nav.Link as={Link} to="/profile" style={{width:200}}>
                            <span className='profile-link'><font>{`${firstName}${' '}${lastName}`}</font></span>
                        </Nav.Link>
                    </div>
                </Col>
                <Col md={3}>
                    <div className=''>
                        <Nav.Link as={Link} to="/about" className='about-button'>
                            |ABOUT US
                        </Nav.Link> 
                    </div>
                </Col>
            </div>
            <div className='d-flex'>
                <div className='quote-div quote-image'>
                    {/* <img src={quoteneww} alt="" className='quote-image'/> */}
                </div>
                <div className='doughnut-chart'>
                    <canvas ref={chartRef} style={{width:"150px", height:"200px"}}/>
                    <p className='level-font'>Now you are @ the beginner level</p>
                </div>
            </div>
            <div className='button-div col-12'>
                <Row className='d-flex'>
                    <Col className='button-col'>
                        <Nav.Link as={Link} to="/mySchedules" className=''>
                            <button className='button button1 quick-actions' name="schedulebutton">You have<br/><font size="4"><b style={{color:'blue'}}>{noOfSchedules}</b></font><br/><font size="4"><b>Schedules</b></font><br/>to do</button>
                        </Nav.Link> 
                    </Col>
                    <Col className='button-col'>
                        <Nav.Link as={Link} to="/gymbot" className=''> 
                            <button className='button button2 quick-actions2'name="botbutton">Get<br/>the help of<br/><font size="4"><b>AI BOT</b></font><br/><FaRobot size={30}/></button>
                        </Nav.Link> 
                    </Col>
                    <Col className='button-col'>
                        <Nav.Link as={Link} to="/AIschedules" className=''> 
                            <button className='button button4 quick-actions3'name="botbutton">Make Schedules<br/><font size="4"><b>Using AI</b></font><br/><MdOutlineScheduleSend size={30}/></button>
                        </Nav.Link> 
                    </Col>
                    <Col>
                        <Nav.Link as={Link} to="/payments" className=''>
                            <button className='button3 quick-actions4'><font size="2" name="paymentbutton">Now you can</font><br/><font size="2">make</font><br/><b>ONLINE</b><br/><b>PAYMENTS</b><br/><MdOutlinePayment size={30}/></button>
                        </Nav.Link> 
                    </Col>       
                </Row>
            </div>
        </Container>
    </div>
  )
}

