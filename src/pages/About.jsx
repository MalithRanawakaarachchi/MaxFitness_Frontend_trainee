import React from 'react'
import { Container, Col, Row, Table, Button, Nav} from 'react-bootstrap';
import Sidebar from '../components/navbar/Sidebar';
import { useState, useEffect} from 'react';
import A01 from '../images/Staff/A01.png';
import B01 from '../images/Staff/B01.png';
import C01 from '../images/Staff/C01.png';
import mediaList from '../images/mediaList.png';
import MFicon from '../images/MFicon.png';
// import {Map, GoogleApiWrapper} from 'google-maps-react';
import "./about.css"

const About = ()=> {

  const[navVisible, setNavVisible]=useState(true);

  return (
    <div className="home-container">
        <Sidebar visible={navVisible} setVisible={setNavVisible}/>
        <Container className='container-home schedule-background justify-content-center'>
            <div style={{height:20}}></div>
            <Row className="scrollable-content">
                <Col xl={2}></Col>
                <Col xl={8}>
                    <div>
                        <div style={{textAlign:'center', marginBottom:-30}}>
                            <img src={MFicon} style={{width:100, marginRight:40, marginBottom:-30}} alt="" className='equipment-img'/>
                            <h3 className='main-title-text'>ABOUT MAX FITNESS GYM CENTER</h3>
                        </div>
                        <p className='description-text' style={{marginTop:'20px'}}>
                            Welcome to Max Fitness Gym Center, where your journey to a healthier and fitter lifestyle begins.
                            We are conveniently located at No 187, Main Street, Ratnapura, making it easy for you to access 
                            our top-notch fitness facilities and services.
                        </p>
                        <div>
                            <iframe width="100%" height="390" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Googs%20Shed%20Rd,%20Ratnapura,%20Sri%20Lanka+(max%20fitness)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/population/">
                                    Population calculator map
                                </a></iframe>
                        </div>
                        <h3 className='title-text'>Our Commitment</h3>
                        <p className='description-text'>
                            At Max Fitness Gym Center, we are committed to helping you achieve your fitness goals. Whether you're 
                            looking to build muscle, lose weight, increase endurance, or simply improve your overall well-being, 
                            we have the tools, expertise, and supportive community to guide you every step of the way.
                        </p>

                        <h3 className='title-text'>State-of-the-Art Facilities</h3>
                        <p className='description-text'>
                            Our gym is equipped with state-of-the-art fitness equipment to provide you with the best training 
                            experience. From cardio machines to strength training equipment, we have everything you need to 
                            create an effective workout regimen.
                        </p>

                        <h3 className='title-text'>Expert Trainers</h3>
                        <p className='description-text'>
                            Our team of experienced and certified trainers is here to assist you in achieving your fitness aspirations. 
                            They'll create personalized workout plans and offer expert guidance to ensure you get the most out of your 
                            time at our gym.
                        </p>

                        <div className='d-flex'>
                            <Col xl={4} style={{paddingLeft:70, paddingTop:30}}>
                                <img src={A01} style={{width:220, marginRight:40}} alt="" className='equipment-img'/>
                            </Col>
                            <Col xl={2}></Col>
                            <Col xl={5} style={{paddingTop:50}} className='color'>
                                <h3 style={{color:'red'}}>Nandana Dissanayake</h3>
                                <h5>Owner of Max Fitness Gym</h5>
                                <h5>Certificated Fitness Coach</h5>
                                <h5>Advance First aider</h5>
                                <h5>Fitness Club Supervisor</h5>
                            </Col>
                        </div>

                        <div className='d-flex'>
                            <Col xl={4} style={{paddingLeft:70, paddingTop:30}}>
                                <img src={B01} style={{width:220, marginRight:40}} alt="" className='equipment-img'/>
                            </Col>
                            <Col xl={2}></Col>
                            <Col xl={5} style={{paddingTop:80}} className='color'>
                                <h3 style={{color:'blue'}}>Vijitha Udakumbura</h3>
                                <h5>Fitness Instructor</h5>
                                <h5>Personal trainer</h5>
                            </Col>
                        </div>

                        <div className='d-flex'>
                            <Col xl={4} style={{paddingLeft:70, paddingTop:30}}>
                                <img src={C01} style={{width:220, marginRight:40}} alt="" className='equipment-img'/>
                            </Col>
                            <Col xl={2}></Col>
                            <Col xl={5} style={{paddingTop:80}} className='color'>
                                <h3 style={{color:'orange'}}>Gihan Hettiarachchi</h3>
                                <h5>Personal trainer</h5>
                                <h5>Aerobics & Zumba Instructor</h5>
                            </Col>
                        </div>

                        <h3 className='title-text'>Community and Support</h3>
                        <p className='description-text'>
                            Max Fitness Gym Center is not just a gym; it's a community of like-minded individuals working together
                            to achieve their fitness goals. Our supportive environment ensures that you're never alone on your fitness 
                            journey.
                        </p>

                        <h3 className='title-text'>Visit Us Today</h3>
                        <p className='description-text'>
                        We invite you to visit Max Fitness Gym Center at our location in Ratnapura. Experience the Max Fitness difference 
                        and take the first step toward a healthier, happier you.

                        <div style={{height:40}}></div>

                        Join us on this fitness journey, and let's achieve greatness together!
                        </p>

                        <div className='center bottom-text'>
                            <h4>MAX FITNESS GYM CENTER</h4>
                            <h6>No 187, Main Street, Ratnapura</h6>
                            <h6>maxfitnessratnapura@gmail.com</h6>
                            <h6>0718872797</h6>
                            <img src={mediaList} style={{width:300, marginTop:30}} alt="" className='equipment-img'/>
                        </div>    
                    </div>
                </Col>   
                <Col xl={2}></Col>   
            </Row>
        </Container>
    </div>
  )
}

export default About;
