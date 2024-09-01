import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './sidebar.css';
import {FaAngleLeft,FaAngleRight,FaRobot} from 'react-icons/fa';
import {HiHome} from 'react-icons/hi';
import {GrSchedules} from 'react-icons/gr';
import {MdSportsGymnastics,MdOutlinePayment,MdOutlineSchedule} from 'react-icons/md';
import {CgGym,CgProfile} from 'react-icons/cg';
import {SiBaremetrics, SiWhitesource} from 'react-icons/si';
import {GiArtificialIntelligence} from 'react-icons/gi';
import {AiFillQuestionCircle} from 'react-icons/ai';
import {RiLogoutBoxLine} from 'react-icons/ri';
import MFicon from '../../images/MFicon.png';
import API from "../../utils/api";

const ICON_SIZE = 18;
const ICON_SIZE2 = 22;
const FONT_SIZE = 2.5;

const Sidebar = ({visible, setVisible}) => {
  
const logout = () => {
    // Clear user authentication information (e.g., tokens, session data, etc.)
    localStorage.removeItem('authToken');
    // Example of clearing localStorage token:
    // localStorage.removeItem('authToken');
      
    window.location.replace("/login");
};


  return (
    <nav className={` ${visible ? "" : "navbar"}`}>
        <button className='nav-btn' type='button' onClick={()=> setVisible(!visible)}>
            { visible ?  <FaAngleLeft size={30}/> : <FaAngleRight size={30}/>}
        </button>
        <div>
            <NavLink to="/" className="logo">
                <img src={MFicon} alt="" className='logo-img'/> 
            </NavLink>

            <div className='nav-top' >
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/home" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>Home</font></span></Col>  
                            <Col className='col-2'><HiHome size={ICON_SIZE}/></Col>
                        </Nav.Link>
                </Nav> 
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/gymbot" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>AI GYM BOT</font></span></Col>  
                            <Col className='col-2'><FaRobot size={ICON_SIZE}/></Col>  
                        </Nav.Link>
                </Nav> 
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/AIschedules" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>AI SCHEDULES</font></span></Col>  
                            <Col className='col-2'><GiArtificialIntelligence size={ICON_SIZE}/></Col>  
                        </Nav.Link>
                </Nav> 
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/mySchedules" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>My Schedules</font></span></Col>  
                            <Col className='col-2'><MdOutlineSchedule size={ICON_SIZE}/></Col>  
                        </Nav.Link>
                </Nav> 
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/exercises" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>Exercises</font></span></Col>  
                            <Col className='col-2'><MdSportsGymnastics size={ICON_SIZE}/></Col>  
                        </Nav.Link>
                </Nav> 
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/equipment" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>Equipment</font></span></Col>  
                            <Col className='col-2'><CgGym size={ICON_SIZE}/></Col>  
                        </Nav.Link>
                </Nav> 
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/payments" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>Payments</font></span></Col>  
                            <Col className='col-2'><MdOutlinePayment size={ICON_SIZE}/></Col>  
                        </Nav.Link>
                </Nav> 
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/traineemetrics" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>Trainee Metrics</font></span></Col>  
                            <Col className='col-2'><SiBaremetrics size={ICON_SIZE}/></Col>  
                        </Nav.Link>
                </Nav> 
                <Nav className="col-12 nav-link navv">
                        <Nav.Link as={Link} to="/about" className=''>
                            <Col className='col-10'><span><font size={FONT_SIZE}>About</font></span></Col>  
                            <Col className='col-2'><AiFillQuestionCircle size={ICON_SIZE}/></Col>  
                        </Nav.Link>
                </Nav> 
            </div>

            <div className='profile-div'>
                <Row>
                    <Col className='col-8'>
                        <Nav.Link as={Link} to="/login" className='' onClick={logout}>
                            <RiLogoutBoxLine size={ICON_SIZE2} className='icon-color'/>
                        </Nav.Link>
                    </Col>
                    <Col className='col-4'>
                        <Nav.Link as={Link} to="/profile" className=''>
                            <CgProfile size={ICON_SIZE2} className='icon-color'/>  
                        </Nav.Link>
                    </Col>
                </Row>
            </div>
        </div>   
    </nav>
  );
};

export default Sidebar;