import React from 'react'
import './myschedules.css';
import { useState, useEffect} from 'react';
import Sidebar from '../components/navbar/Sidebar';
import { Container, Col, Row, Table, Button} from 'react-bootstrap';
import API from "../utils/api";

export default function MySchedules() {
  const [searchTerm, setSearchTerm] = useState('');
  const[navVisible, setNavVisible]=useState(true);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [schedule, setSchedule] = useState([]);

      const filteredSchedule = schedule.filter((schedule) => {
      const exercise = schedule.exercise ? schedule.exercise.toLowerCase() : '';
      const target = schedule.target ? schedule.target.toLowerCase() : '';
      const equipment = schedule.equipment ? schedule.equipment.toLowerCase() : '';
  
        return (
          exercise.includes(searchTerm.toLowerCase()) ||
          target.includes(searchTerm.toLowerCase()) ||
          equipment.includes(searchTerm.toLowerCase())
        );

  });

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
                setSchedule(res.data);
            }
        } catch (error) {
            console.log('Error fetching schedule data:', error);
        }
    };

    fetchScheduleData();
}, []);

  const customHeaderStyle = {
    backgroundColor: '#f30909',
    color: 'white',
  };

  return (
    <div className="home-container">
      <Sidebar visible={navVisible} setVisible={setNavVisible}/>
      <Container className='container-home schedule-background'>
        <Row>
          <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
          <Col xl={10} lg={10} md={12} sm={12} xs={12}>
            <h3 className='title-ai'>MY SCHEDULES</h3>
            <div style={{height:30}}></div>
            <div className="table-container-schedules">
              
              <Table striped bordered hover variant="dark">
                <thead >
                  <tr>
                    <th style={customHeaderStyle}>Exercise</th>
                    <th style={customHeaderStyle}>Target</th>
                    <th style={customHeaderStyle}>Equipment</th>
                    <th style={customHeaderStyle}>SETS</th>
                    <th style={customHeaderStyle}>REPS</th>
                    <th style={customHeaderStyle}>REST</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.map((schedule) => (
                    <tr key={schedule.id} className='tr-height table-column-data'>
                      <td align='left'>{schedule.exercise}</td>
                      <td align='left'>{schedule.target}</td>
                      <td align='left'>{schedule.equipment}</td>
                      <td>{schedule.sets}</td>
                      <td>{schedule.reps}</td>
                      <td>{schedule.rest}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
        </Row>
      </Container>
    </div>
  )
}
