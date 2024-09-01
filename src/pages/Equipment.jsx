import React from 'react'
import { Container, Col, Row, Table, Button, Nav} from 'react-bootstrap';
import Sidebar from '../components/navbar/Sidebar';
import { useState, useEffect} from 'react';
import poweraquatrack from '../images/Equipment/poweraquatrack.png';
import benchpress from '../images/Equipment/benchpress.png';
import cablesanpulleys from '../images/Equipment/cablesanpulleys.png';
import dumbells from '../images/Equipment/dumbells.png';
import barbells from '../images/Equipment/barbells.png';
import pullapbar from '../images/Equipment/pullapbar.png';
import legextension from '../images/Equipment/legextension.png';
import dippingbars from '../images/Equipment/dippingbars.png';
import "./equipment.css"

const Equipment = ()=> {

  const[navVisible, setNavVisible]=useState(true);

  const [exercise, setExercise] = useState([
    {
      image: <img src={poweraquatrack} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Squat Rack',
      description: 'Where serious squatting takes place.In fitness and strength training, the squat exercise trains your full body. All serious strength training regiments should incorporate the squat station gym equipment.',
      equipmentTag: 'Target Muscles',
      equipment: 'thighs, hips, and butt,quads, hamstrings'
    },
    {
      image: <img src={benchpress} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Bench Press',
      description: 'Used for upper body strength training exercises, where you are pushing weight upwards as you’re laying on your back. Do you want the perfect chest? This is one of the tools you use to train for that chest.',
      equipmentTag: 'Target Muscles',
      equipment: 'Used for upper body strength training exercises, where you are pushing weight upwards as you’re laying on your back. Do you want the perfect chest? This is one of the tools you use to train for that chest.'
    },
    {
      image: <img src={cablesanpulleys} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Cabled And Pulleys',
      description: 'Very diverse workout machine in the amount and types of exercises that can be performed by attaching grips to the end of the cables.',
      equipmentTag: 'Target Muscles',
      equipment: 'The inherent design and versatility of this machine allow for it to essentially touch upon every muscle in the body.'
    },
    {
      image: <img src={dumbells} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Dumbbels',
      description: 'Pretty much the go-to gym equipment most people first think of when they think of bodybuilding. Varying in weight, but the same concept, a handlebar with weights on opposite ends. A must-have free weight for any fitness regiment. There are even adjustable dumbbells with differing weights all in one piece.',
      equipmentTag: 'Target Muscles',
      equipment: 'You can target a good amount of muscles with dumbbells. Some of the muscles you can work with dumbbells are: chest, shoulders, triceps, traps, biceps, lats, glutes, quads, hammies, and calves.'
    },
    {
      image: <img src={barbells} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Barbells',
      description: 'A complementary piece to the squat rack. A barbell is essential to strength training, it holds the free weights, or sometimes the weights are attached to the ends..',
      equipmentTag: 'Target Muscles',
      equipment: 'Pretty much all muscles are affected when training with barbells, especially if doing deadlifts'
    },
    {
      image: <img src={pullapbar} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Pullup bar',
      description: 'The best tool for upper body exercise and strengthening. You can pull yourself up with any grip, though palms facing froward is the most popular one seen in demonstrations. Different grips and hand positions can affect different muscles. You pull yourself up until your chin is over the bar.',
      equipmentTag: 'Target Muscles',
      equipment: 'Trunk, arms, shoulders, abs, pelvic floor muscles, hands, and forearms. Different types of pull-ups affect different muscles. Some of the more common types of pullup exercises are: behind the neck, underhand grip, pullup to the waist, wide/butterfly grip.'
    },
    {
      image: <img src={legextension} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Leg Extension Machine',
      description: 'Lifting the weights up with your quads, holding steady for a second or two once you fully extend at the top. Leg extension machines are the perfect gym equipment to use when you are rehabilitating from an injury or just trying to strength train your quads.',
      equipmentTag: 'Target Muscles',
      equipment: 'Quadriceps, gluteal deltoid'
    },
    {
      image: <img src={dippingbars} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Dipping Bars',
      description: 'Holding onto the handles, one with each hand, lower your body and lift yourself up. It’s important to adhere to good form to avoid any potential shoulder injuries when dabbling with this gym equipment type.',
      equipmentTag: 'Target Muscles',
      equipment: 'Shoulders, triceps, lower pecs. Dips can be performed with weight, or without, by keeping your body vertical.'
    }
  ]);

  return (
    <div className="home-container">
        <Sidebar visible={navVisible} setVisible={setNavVisible}/>
        <Container className='container-home schedule-background justify-content-center'>
            <Row>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
                <Col xl={10} lg={10} md={12} sm={12} xs={12}>
                    <div className='d-flex'>
                        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                            <h3 className='title-ai'>EQUIPMENT</h3>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                    </div>
                            
                    <div style={{paddingTop:40}}>
                        <div className="table-container-equipments" style={{paddingLeft:'50'}}>
                            <Table striped bordered hover>
                            <tbody >
                            {exercise.map((item) => (
                                <tr key={item.id}>
                                <td style={{border: 'none', backgroundColor: "#282828"}} >{item.image}</td>
                                <td style={{border: 'none', backgroundColor: "#282828"}} >
                                    <font style={{color:'white'}}>
                                    <tr>{item.name}</tr>
                                    <tr style={{height:10}}></tr>
                                    <tr style={{height:70, marginRight:40}}>{item.description}</tr>
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
                </Col>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Equipment;
