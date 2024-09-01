import React, { useState } from 'react';
import { Container, Table, Nav, Button, Form, Row, Col } from 'react-bootstrap';
import "./arms.css"
import arnoldpresses from '../../images/arnoldpresses.gif';
import diamondpushup from '../../images/diamondpushup.gif';
import weighteddips from '../../images/weighteddips.gif';
import singlearmdumbbellrow from '../../images/singlearmdumbbellrow.gif';
import closegripchinup from '../../images/closegripchinup.gif';

const Arms = ()=> {
  const armsVisible = sessionStorage.getItem('armsVisible');

  const [exercise, setEquipment] = useState([
    {
      image: <img src={arnoldpresses} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Arnold-presses',
      description: 'The Arnold Press, created to develop powerful, sculpted shoulders, is regarded as one of the top strength training exercises. The Arnold press, developed by renowned bodybuilder Arnold Schwarzenegger, stimulates all three heads of the deltoid muscles and offers a full range of motion, helping to create more strength and size.',
      equipmentTag: 'Equipment',
      equipment: 'Dumbels'
    },
    {
      image: <img src={diamondpushup} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Diamond push-ups',
      description: 'When performed correctly, diamond push-ups engage the triceps brachii, pectoralis major, anterior deltoid, and quadriceps. In addition, the core stabilizer muscles are also involved during a diamond push-up.',
      equipmentTag: 'Equipment',
      equipment: ''
    },
    {
      image: <img src={weighteddips} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Weighted dips',
      description: 'Weighted dips are exercises for advanced weightlifters as it requires significant muscular strength and recruitment to lift the body and the added weight from a weighted vest or dip belt with weights.',
      equipmentTag: 'Equipment',
      equipment: 'Weighted dips'
    },
    {
      image: <img src={singlearmdumbbellrow} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Single-arm Dumbbell rows',
      description: 'Dumbbell rows are a workout that entails bending forward at the hips while holding something heavy in one hand and letting it hang toward the ground. Next, the weight is lifted, bringing it closer to the chest before lowering it back to the beginning position.',
      equipmentTag: 'Equipment',
      equipment: 'Dumbels'
    },
    {
      image: <img src={closegripchinup} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Supinated close-grip pull-ups',
      description: 'Supinated close-grip pull-ups are an excellent upper-body workout that develops the inner lats and improves the back, arms, and core muscles. The close-grip pull-up exercise is ideal for improving your upper body muscles since they engage the biceps, lats, traps, and pecs.',
      equipmentTag: 'Equipment',
      equipment: 'pull-up bars'
    }
  ]);

    return(
      <Container className={`${armsVisible=='true' ? 'pro-container-arms schedule-background-arms justify-content-center' : 'hide-visibility-arms'}`}>
        <div style={{textAlign:'left', marginLeft:65}}>
          <h4><font style={{color:'white'}}>Arms</font></h4> 
          <div className="table-container-ex" style={{paddingLeft:'50'}}>
            <Table striped bordered hover>
            <tbody >
              {exercise.map((item) => (
                <tr key={item.id}>
                  <td style={{border: 'none', backgroundColor: "#282828"}} >{item.image}</td>
                  <td style={{border: 'none', backgroundColor: "#282828"}} >
                    <font style={{color:'white'}}>
                      <tr>{item.name}</tr>
                      <tr style={{height:20}}></tr>
                      <tr style={{height:110, marginRight:40}}>{item.description}</tr>
                      <tr style={{height:30}}></tr>
                      <tr>{item.equipmentTag}</tr>
                      <tr>{item.equipment}</tr>
                    </font>
                  </td>
                  <td style={{width:35, border: 'none', backgroundColor: "#282828"}}></td>
                </tr>
              ))}
            </tbody>
            </Table>
          </div>
        </div>
      </Container>
    )
}

export default Arms;