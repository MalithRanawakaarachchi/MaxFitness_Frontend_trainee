import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import "./back.css"
import widegriplatpulldown from '../../images/Back/widegriplatpulldown.gif';
import pullup from '../../images/Back/pullup.gif';
import barbellrackpull from '../../images/Back/barbellrackpull.gif';
import supermans from '../../images/Back/supermans.gif';
import kettlebell from '../../images/Back/kettlebell.gif';
import barbellgoodmorning from '../../images/Back/barbellgoodmorning.gif';

const Back = ()=> {
  const backVisible = sessionStorage.getItem('backVisible');

  const [exercise, setExercise] = useState([
    {
      image: <img src={widegriplatpulldown} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Lat Pulldowns',
      description: 'The lat pulldown is done through the use of a lat pulldown machine, this exercise aids in strength training of several muscles such as the latissimus dorsi, biceps, rear delts, rhomboids, and traps. This exercise is known to develop the overall strength of the back muscles.',
      equipmentTag: 'Equipment',
      equipment: 'Lat pulldown machine'
    },
    {
      image: <img src={pullup} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Pull-ups',
      description: 'Of all calisthenic exercises, pull-ups are one of the most common. It is an excellent way to measure an individual’s baseline strength to bodyweight ratio. This workout activates multiple muscles such as the deltoid, rhomboid, trapezius,  and core muscles but focuses more on the development of the lats and biceps. ',
      equipmentTag: 'Equipment',
      equipment: 'Pull-up Bars'
    },
    {
      image: <img src={barbellrackpull} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Rack Pulls',
      description: 'The rack pulls are an excellent compound exercise that works the whole body. This exercise specifically targets multiple muscle groups in one movement such as the glutes, hamstrings, erector spinae, latissimus dorsi, quadriceps, forearm, and hand muscles. With proper form, this exercise can build muscle mass and muscle hypertrophy throughout the lower body. ',
      equipmentTag: 'Equipment',
      equipment: 'Weighted dips'
    },
    {
      image: <img src={supermans} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Supermans',
      description: 'The Superman exercise is an effective and excellent exercise for individuals that look to target the lower back muscles. This exercise can be done at home and without any equipment needed.',
      equipmentTag: 'Equipment',
      equipment: ''
    },
    {
      image: <img src={kettlebell} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Russian Kettlebell Swings',
      description: 'The Russian kettlebell swing is a complex compound exercise that activates multiple muscle groups in one movement. This is an excellent exercise that works the muscles of the upper back, but it is also great for other muscles such as the glutes, and hamstrings. The movement itself can improve an individual’s flexibility and mobility over time.',
      equipmentTag: 'Equipment',
      equipment: 'Kettlebell'
    },
    {
      image: <img src={barbellgoodmorning} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Barbell Good Mornings',
      description: 'The good morning is a compound exercise that works multiple muscles in the posterior chain, like the lower back muscles, hamstrings, and glutes. It also works several other muscles such as the hip flexors, abductors,  and quads. This is a hip hinge exercise that will help improve the strength, and mobility of the muscles, and improve the range of motion of the hip flexion.',
      equipmentTag: 'Equipment',
      equipment: 'Barbell'
    }
  ]);

    return(
      <Container className={`${backVisible=='true' ? 'pro-container schedule-background justify-content-center' : 'hide-visibility'}`}>
        <div style={{textAlign:'left', marginLeft:65}}>
          <h4><font style={{color:'white'}}>Back</font></h4> 
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

export default Back;