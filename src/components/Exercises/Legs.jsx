import React, { useState } from 'react';
import { Container, Table, Nav, Button, Form, Row, Col } from 'react-bootstrap';
import "./legs.css"
import legpresscalfraise from '../../images/Legs/legpresscalfraise.gif';
import legextensionmachine from '../../images/Legs/legextensionmachine.gif';
import singleleglegextension from '../../images/Legs/singleleglegextension.gif';
import legextensiontoesinward from '../../images/Legs/legextensiontoesinward.gif';

const Legs = ()=> {
  const legVisible = sessionStorage.getItem('legVisible');

  const [exercise, setExercise] = useState([
    {
      image: <img src={legpresscalfraise} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Leg Press Machine Variations',
      description: 'You can incorporate leg press variations by changing the position of the feet on the platform, adjusting the distance between the feet, or using specific parts of the feet to push the platform during a leg press.',
      equipmentTag: 'Equipment',
      equipment: 'Leg Extension Machine'
    },
    {
      image: <img src={legextensionmachine} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Diamond push-ups',
      description: 'By pointing the toes inwards during a leg extension repetition, a greater emphasis may be placed on the vastus lateralis portion of the quadriceps femoris – or what is otherwise known as the outer-facing “teardrop” head. While the rest of the quadriceps will nonetheless be recruited, making this small change in foot orientation can help lifters further specify the training stimulus of their workout.',
      equipmentTag: 'Equipment',
      equipment: 'Leg Extension Machine'
    },
    {
      image: <img src={singleleglegextension} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Single-Leg Leg Extension',
      description: 'While less resistance will be possible, performing the leg extension with only a single leg at a time can allow lifters to better focus on proper muscular contraction. If performing single-leg leg extensions, additional attention should be paid to form as the risk of injury is relatively greater.',
      equipmentTag: 'Equipment',
      equipment: 'Leg Extension Machine'
    },
    {
      image: <img src={legextensiontoesinward} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Inward Pointing Leg Extensions',
      description: 'By pointing the toes inwards during a leg extension repetition, a greater emphasis may be placed on the vastus lateralis portion of the quadriceps femoris – or what is otherwise known as the outer-facing “teardrop” head. While the rest of the quadriceps will nonetheless be recruited, making this small change in foot orientation can help lifters further specify the training stimulus of their workout.',
      equipmentTag: 'Equipment',
      equipment: 'Leg Extension Machine'
    }
  ]);

    return(
      <Container className={`${legVisible=='true' ? 'pro-container schedule-background justify-content-center' : 'hide-visibility'}`}>
        <div style={{textAlign:'left', marginLeft:65}}>
          <h4><font style={{color:'white'}}>Legs</font></h4> 
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

export default Legs;