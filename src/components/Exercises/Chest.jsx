import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import "./chest.css"
import dumbbellchestflymuscles from '../../images/Chest/dumbbellchestflymuscles.gif';
import dumbbellchestpress from '../../images/Chest/dumbbellchestpress.gif';
import dumbbellonearmchestpress from '../../images/Chest/dumbbellonearmchestpress.gif';
import onearmdumbbellfly from '../../images/Chest/onearmdumbbellfly.gif';

const Chest = ()=> {
  const chestVisible = sessionStorage.getItem('chestVisible');

  const [exercise, setExercise] = useState([
    {
      image: <img src={dumbbellchestflymuscles} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Dumbbell Fly',
      description: 'Lie on the back on the floor or on a mat with a dumbbell in each hand. Extend the arms straight up over the chest, with the palms facing in. Slowly lower the dumbbells out to the sides, keeping a slight bend in the elbows. When the arms are parallel to the floor, pause for a moment and then bring the dumbbells back up to the starting position.',
      equipmentTag: 'Equipment',
      equipment: 'Dumbbells'
    },
    {
      image: <img src={dumbbellchestpress} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Dumbbell Chest Press',
      description: 'Lie on the back on the floor or on a mat with a dumbbell in each hand. Extend the arms straight up over the chest, with the palms facing in. Slowly lower the dumbbells down towards the chest, keeping the elbows close to the sides. Pause for a moment and then press the dumbbells back up to the starting position.',
      equipmentTag: 'Dumbbells',
      equipment: ''
    },
    {
      image: <img src={dumbbellonearmchestpress} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'One-Arm Dumbbell Chest Press',
      description: 'Lie on the back on the floor or on a mat with a dumbbell in one hand. Bend the elbow and bring the dumbbell down towards the chest, keeping the other arm extended out to the side. Pause for a moment and then press the dumbbell back up to the starting position. Repeat on the other side.',
      equipmentTag: 'Equipment',
      equipment: 'Dumbbells'
    },
    {
      image: <img src={onearmdumbbellfly} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'One-Arm Dumbbell Fly',
      description: 'Lie on the back on the floor or on a mat with a dumbbell in one hand. Extend the arm straight up over the chest, with the palm facing in. Slowly lower the dumbbell out to the side, keeping a slight bend in the elbow. When the arm is parallel to the floor, pause for a moment and then bring the dumbbell back up to the starting position. Repeat on the other side.',
      equipmentTag: 'Equipment',
      equipment: 'Dumbbells'
    }
  ]);

    return(
      <Container className={`${chestVisible=='true' ? 'pro-container schedule-background justify-content-center' : 'hide-visibility'}`}>
        <div style={{textAlign:'left', marginLeft:65}}>
          <h4><font style={{color:'white'}}>Chest</font></h4> 
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

export default Chest;