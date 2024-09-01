import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import "./sholders.css"
import dumbbellfrontraise from '../../images/Sholders/dumbbellfrontraise.gif';
import barbellbenchpress from '../../images/Sholders/barbellbenchpress.gif';
import barbelluprightrowstanding from '../../images/Sholders/barbelluprightrowstanding.gif';
import seatedoverheadpress from '../../images/Sholders/seatedoverheadpress.gif';
import dumbbellinclinerow from '../../images/Sholders/dumbbellinclinerow.gif';

const Sholders = ()=> {
  const sholdersVisible = sessionStorage.getItem('sholdersVisible');

  const [exercise, setExercise] = useState([
    {
      image: <img src={dumbbellfrontraise} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Front Raises',
      description: 'An excellent upper body compound exercise that primarily targets the anterior deltoids is the front raises. This workout also works several supporting muscles such as the lateral deltoid, biceps, trapezius, and pectoralis major muscles.',
      equipmentTag: 'Equipment',
      equipment: 'Dumbbels'
    },
    {
      image: <img src={barbellbenchpress} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Bench Press',
      description: 'A great compound exercise for the upper body that primarily targets the triceps and pectoralis major muscles is the bench press. This exercise also engages the back, and anterior deltoids, and traps muscles. The exercise is lying horizontally on a bench while this is being done. Put the head under the barbell that is on the rack while lying down on the bench to perform this exercise.',
      equipmentTag: 'Equipment',
      equipment: 'Barbell, Bench'
    },
    {
      image: <img src={barbelluprightrowstanding} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Barbell Upright Row',
      description: 'The barbell upright row is an excellent exercise that builds strength in the shoulders and upper back region. This is a compound pull exercise, which means the weight is being pulled toward the body. It can be done in two ways that vary on the distance of the grip on the barbell.',
      equipmentTag: 'Equipment',
      equipment: 'Barbell'
    },
    {
      image: <img src={seatedoverheadpress} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Barbell Overhead Press',
      description: 'This exercise works the pecs, deltoids, triceps, and trapezius muscles. Although the barbell overhead press can be performed in a variety of postures, sitting on a bench is the most effective since it prohibits the user from utilizing their legs as propulsion.',
      equipmentTag: 'Equipment',
      equipment: 'Barbell'
    },
    {
      image: <img src={dumbbellinclinerow} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Supported Incline Dumbbell Rows',
      description: 'The supported incline dumbbell rows are an excellent exercise to strengthen the shoulders and other muscles, namely the biceps, latissimus dorsi, trapezius, and rhomboids muscles. This exercise is done with the person lying on a 45-degree inclined bench with the chest facing the backrest of the bench. ',
      equipmentTag: 'Equipment',
      equipment: 'Dumbbels'
    }
  ]);

    return(
      <Container className={`${sholdersVisible=='true' ? 'pro-container schedule-background justify-content-center' : 'hide-visibility'}`}>
        <div style={{textAlign:'left', marginLeft:65}}>
          <h4><font style={{color:'white'}}>Sholders</font></h4> 
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

export default Sholders;