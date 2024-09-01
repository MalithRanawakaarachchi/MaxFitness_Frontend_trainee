import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import "./abs.css"
import abwheel from '../../images/Abs/abwheel.gif';
import glutebridge from '../../images/Abs/glutebridge.gif';
import vacuumholds from '../../images/Abs/vacuumholds.gif';
import sideplank from '../../images/Abs/sideplank.png';

const Abs = ()=> {
  const absVisible = sessionStorage.getItem('absVisible');

  const [exercise, setExercise] = useState([
    {
      image: <img src={abwheel} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Ab Wheels',
      description: 'Perhaps one of the most effective abdominal exercises, ab wheels function quite well when paired with deadlifts due to their high intensity of core muscle recruitment and highly dynamic range of motion. However, when pairing ab wheels with deadlifts, it is important to pay attention to the state of your lower back, as both exercises can be quite taxing on the muscles therein and can lead to injury if performed excessively.',
      equipmentTag: 'Equipment',
      equipment: 'Ab Wheels'
    },
    {
      image: <img src={glutebridge} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Glute Bridges',
      description: 'Glute bridges are a compound bodyweight exercise that train both the posterior chain and the core musculature in a low-impact and easily accessible manner. As a consequence of the torso’s position during the exercise, glute bridges are also quite effective at reinforcing the linea alba as well.',
      equipmentTag: 'Equipment',
      equipment: 'Dumbbels'
    },
    {
      image: <img src={vacuumholds} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Vacuum Holds',
      description: 'A forgotten exercise from early competitive bodybuilders, vacuum holds or stomach vacuums involve  targeting the transverse abdominis muscle, of which meshes quite well with the core muscle training of the deadlift due to the positioning of the former muscle within the abdomen.',
      equipmentTag: 'Equipment',
      equipment: ''
    },
    {
      image: <img src={sideplank} style={{width:250, marginRight:40}} alt="" className='equipment-img'/>,
      name: 'Side Plankss',
      description: 'Side planks are primarily an isometric exercise that train the muscles (and linea alba) by forcing them to maintain a steady position despite the presence of resistance. This, in turn, builds impressive strength and muscular endurance, and is arguably safer to perform than more dynamic exercises due to a lack of movement.',
      equipmentTag: 'Equipment',
      equipment: ''
    }
  ]);

    return(
      <Container className={`${absVisible=='true' ? 'pro-container schedule-background justify-content-center' : 'hide-visibility'}`}>
        <div style={{textAlign:'left', marginLeft:65}}>
          <h4><font style={{color:'white'}}>Abs</font></h4> 
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

export default Abs;