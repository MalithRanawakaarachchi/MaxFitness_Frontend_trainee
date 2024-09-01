import React from 'react'
import { Container, Col, Row, Table, Button, Nav} from 'react-bootstrap';
import Sidebar from '../components/navbar/Sidebar';
import { useState, useEffect} from 'react';

import "./profile.css"

const TraineeMetrics = ()=> {

  const[navVisible, setNavVisible]=useState(true);

  const firstName = sessionStorage.getItem('firstName');
  const lastName = sessionStorage.getItem('lastName');
  const email = sessionStorage.getItem('email');
  const address = sessionStorage.getItem('address');
  const nic = sessionStorage.getItem('nic');
  const contact = sessionStorage.getItem('contact');
  const dob = sessionStorage.getItem('dob');
  const gender = sessionStorage.getItem('gender');
  const isMale = gender == 'male';

  return (
    <div className="home-container">
        <Sidebar visible={navVisible} setVisible={setNavVisible}/>
        <Container className='container-home schedule-background justify-content-center'>
            <Row>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                <Col xl={9} lg={10} md={12} sm={12} xs={12}>
                    <div className='d-flex'>
                        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                            <h3 className='title-ai'>My Profile</h3>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                    </div>
                            
                    <div style={{paddingTop:40, marginLeft:50}}>
                        <form>
                            <div className='d-flex'>
                                <Col xl={1}></Col>
                                <Col xl={10}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={firstName}
                                    />
                                    </div>
                                </Col>
                                <Col xl={1}></Col>
                            </div>

                            <div className='d-flex'>
                                <Col xl={1}></Col>
                                <Col xl={10}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={lastName}
                                    />
                                    </div>
                                </Col>
                                <Col xl={1}></Col>
                            </div>

                            <div className='d-flex'>
                                <Col xl={1}></Col>
                                <Col xl={10}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>Email</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={email}
                                    />
                                    </div>
                                </Col>
                                <Col xl={1}></Col>
                            </div>

                            <div className='d-flex'>
                                <Col xl={1}></Col>
                                <Col xl={10}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>Address</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={address}
                                    />
                                    </div>
                                </Col>
                                <Col xl={1}></Col>
                            </div>

                            <div className='d-flex'>
                                <Col xl={1}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>NIC</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={nic}
                                    />
                                    </div>
                                </Col>
                                <Col xl={2}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="email" className='font-style'>Contact Number</label>
                                    <input
                                        type="email"
                                        className="form-control text-input"
                                        id="email"
                                        value={contact}
                                    />
                                    </div>
                                </Col>
                                <Col xl={1}></Col>
                            </div>

                            <div className='d-flex'>
                                <Col xl={1}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                    <label htmlFor="name" className='font-style'>DOB</label>
                                    <input
                                        type="text"
                                        className="form-control text-input"
                                        id="name"
                                        value={dob}
                                    />
                                    </div>
                                </Col>
                                <Col xl={2}></Col>
                                <Col xl={4}>
                                    <div className="form-group">
                                        <label htmlFor="email" className='font-style'>Gender</label>
                                        <div className='d-flex'>
                                            
                                            <div className="form-check" style={{marginRight:50}}>
                                                <input
                                                type="radio"
                                                id="male"
                                                name="gender"
                                                value={gender}
                                                className="form-check-input"
                                                checked={isMale}
                                                />
                                                <label htmlFor="male" className="form-check-label color">
                                                Male
                                                </label>
                                            </div>
                                            
                                            <div className="form-check">
                                                <input
                                                type="radio"
                                                id="male"
                                                name="gender"
                                                value={gender}
                                                className="form-check-input"
                                                checked={!isMale}
                                                />
                                                <label htmlFor="male" className="form-check-label color">
                                                Female
                                                </label>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={1}></Col>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default TraineeMetrics;
