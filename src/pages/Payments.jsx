import React from 'react'
import './payments.css';
import { useState, useEffect} from 'react';
import Sidebar from '../components/navbar/Sidebar';
import PaymentGateway from '../components/PaymentGateway';
import { Container, Col, Row, Table, Button} from 'react-bootstrap';
import API from "../utils/api";
import cards from '../images/cards.png'
import MFicon from '../images/MFicon.png';


export default function Payments() {
  const[navVisible, setNavVisible]=useState(true);

  return (
    <div className="home-container">
      <Sidebar visible={navVisible} setVisible={setNavVisible}/>
      <Container className='container-home schedule-background'>
        <Row>
          <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
          <Col xl={9} lg={9} md={12} sm={12} xs={12}>
            <h3 className='title-ai'>ONLINE PAYMENTS</h3>
            <div>
              <div style={{height:25}}></div>
                    <div style={{paddingTop:40, marginLeft:50,}} className='main-div'>
                        <Row>
                        <Col xl={3} md={3}></Col>
                        <Col xl={6} md={6}>
                        <form>
                            <div style={{textAlign:'center', marginBottom:20, marginTop:-22}}>
                              <img src={MFicon} style={{width:90}} />
                            </div>
                            <div style={{textAlign:'center', marginBottom:20}}>
                              <h4 style={{marginBottom:2}}>MAX FITNESS</h4>
                              <h4>Online Payment Portal</h4>
                            </div>
                            <div className='second-di'>
                                <div className='d-flex'>
                                    <Col xl={1}></Col>
                                    <Col xl={10}>
                                        <div className="form-group">
                                        <label htmlFor="name" className='font-style font-color'>Fee Type</label>
                                        <input
                                            type="text"
                                            className="form-control text-input font-color"
                                            id="name"
                                            Value = "Monthly Fee"
                                            disabled
                                        />
                                        </div>
                                    </Col>
                                    <Col xl={1}></Col>
                                </div>

                                <div className='d-flex'>
                                    <Col xl={1}></Col>
                                    <Col xl={10}>
                                        <div className="form-group">
                                        <label htmlFor="name" className='font-style font-color'>Payment Amount</label>
                                        <Row>
                                            <Col xl={6}>
                                              <input
                                                  type="text"
                                                  className="form-control text-input text-border1"
                                                  id="name"
                                                  value="LKR"
                                                  disabled
                                              />
                                            </Col>
                                            <Col xl={6}>
                                              <input
                                                  type="text"
                                                  className="form-control text-input text-border2 text-secondary"
                                                  id="name"
                                                  style={{textAlign:'right'}}
                                              />
                                            </Col>
                                        </Row>
                                        </div>
                                    </Col>
                                    <Col xl={1}></Col>
                                </div>
                            </div>
                        </form>
                        <div style={{marginBottom:30, marginLeft:170, marginTop:10}}>
                          <PaymentGateway/>
                        </div>
                        <div style={{marginLeft:60}}>
                          <img src={cards} alt="" style={{width:300}}/>
                        </div>
                        <p style={{textAlign:'justify', paddingLeft:35, paddingRight:40, marginBottom:20}}><font className="font-size">We will NEVER save your credit card information. 
                              Also, by continuing, you are accepting our payment terms and conditions.</font></p>
                        </Col>
                        <Col xl={3} md={3}></Col>
                        </Row>
                    </div>

            </div>
          </Col>
          <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
        </Row>
        
      </Container>
      
    </div>
  )
}