import React from 'react'
import { Container, Col, Row, Table, Button, Nav} from 'react-bootstrap';
import Sidebar from '../components/navbar/Sidebar';
import { useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import back_arrow from '../images/back_arrow.png';
import Arms from '../components/Exercises/Arms';
import Legs from '../components/Exercises/Legs';
import Chest from '../components/Exercises/Chest';
import Sholders from '../components/Exercises/Sholders';
import Abs from '../components/Exercises/Abs';
import Back from '../components/Exercises/Back';
import arms from '../images/arms.png';
import abs from '../images/abs.png';
import sholders from '../images/sholders.png';
import chest from '../images/chest.png';
import back from '../images/back.png';
import legs from '../images/legs.png';
import "./exercises.css"

const Exercises = ()=> {

  const [isArmsDetailsVisible, setIsArmsDetailsVisible] = useState(false);
  const[navVisible, setNavVisible]=useState(true);
  const [armsVisible, setArmsVisible] = useState(false);
  const [legVisible, setLegVisible] = useState(false);
  const [chestVisible, setChestVisible] = useState(false);
  const [sholdersVisible, setSholdersVisible] = useState(false);
  const [absVisible, setAbsVisible] = useState(false);
  const [backVisible, setBackVisible] = useState(false);
  
  sessionStorage.setItem('armsVisible', armsVisible);
  sessionStorage.setItem('legVisible', legVisible);
  sessionStorage.setItem('chestVisible', chestVisible);
  sessionStorage.setItem('sholdersVisible', sholdersVisible);
  sessionStorage.setItem('absVisible', absVisible);
  sessionStorage.setItem('backVisible', backVisible);

  const handleClick = () => {
    setArmsVisible(false)
    setLegVisible(false)
    setChestVisible(false)
    setSholdersVisible(false)
    setAbsVisible(false)
    setBackVisible(false)
  };

  return (
    <div className="home-container">
        <Sidebar visible={navVisible} setVisible={setNavVisible}/>
        <Container className='container-home schedule-background justify-content-center'>
            <Row>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                <Col xl={10} lg={10} md={12} sm={12} xs={12}>
                    <div className='d-flex'>
                        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                            <h3 className='title-ai'>EXERCISES</h3>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                        {(armsVisible || legVisible || chestVisible || sholdersVisible || absVisible || backVisible) ?(
                            <div onClick={handleClick} style={{cursor: 'pointer', marginLeft: 140, marginTop: 70}}>
                                <img src={back_arrow} alt="" style={{height: "30px"}} />
                            </div>
                        ) : null}
                        </Col>
                    </div>
                    <div style={{paddingTop:90, paddingBottom:80, textAlign: 'center'}}><h4><font style={{color:'white'}}>Select your target muscle</font></h4></div>

                    <div className="d-flex">
                        <div style={{width:30}}></div>
                        <div onClick={()=> setArmsVisible(!armsVisible)} className='arms-actions' style={{cursor:'pointer'}}>
                            <img src={arms} alt="" className='arms-actions' style={{height:"130px"}}/>
                        </div>
                        <div style={{width:40}}></div>
                    
                        <div onClick={()=> setLegVisible(!legVisible)} className='legs-actions ' style={{cursor:'pointer'}}>
                            <img src={legs} alt="" style={{height:"130px"}}/>
                        </div>
                   
                        <div style={{width:40}}></div>
                    
                        <div onClick={()=> setChestVisible(!chestVisible)} className='chest-actions' style={{cursor:'pointer'}}>
                            <img src={chest} alt="" style={{height:"130px"}}/>
                        </div>
               
                        <div style={{width:40}}></div>
                    
                        <div onClick={()=> setSholdersVisible(!sholdersVisible)} className='shoulders-actions' style={{cursor:'pointer'}}>
                            <img src={sholders} alt="" style={{height:"130px"}}/>
                        </div>
              
                        <div style={{width:40}}></div>
                    
                        <div onClick={()=> setAbsVisible(!absVisible)} className='abs-actions' style={{cursor:'pointer'}}>
                            <img src={abs} alt="" style={{height:"130px"}}/>
                        </div>
                   
                        <div style={{width:40}}></div>
                    
                        <div onClick={()=> setBackVisible(!backVisible)} className='back-actions' style={{cursor:'pointer'}}>
                            <img src={back} alt="" style={{height:"130px"}}/>
                        </div>
                    </div>
                    <div style={{paddingTop:120, paddingBottom:50, textAlign: 'center'}}>
                        <h4> <font style={{color:'white'}}> You can learn many exercises with </font></h4> 
                        <h4> <font style={{color:'white'}}>animations by target muscles </font> </h4>
                    </div>
                </Col>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
            </Row>
            <Arms/>
            <Legs/>
            <Chest/>
            <Sholders/>
            <Abs/>
            <Back/>
        </Container>
    </div>
  )
}

export default Exercises;
