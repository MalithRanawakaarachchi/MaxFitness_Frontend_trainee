import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Sidebar from './components/navbar/Sidebar';
import Home from './pages/Home';
import Gymbot from './pages/Gymbot';
import MySchedules from './pages/MySchedules';
import { useState} from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Exercises from './pages/Exercises';
import Equipment from './pages/Equipment';
import TraineeMetrics from './pages/TraineeMetrics';
import About from './pages/About';
import Profile from './pages/Profile';
import AIschedules from './pages/AIschedules';
import Payments from './pages/Payments';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <BrowserRouter>
        <div className='App'>
            <>
              <Routes>
                <Route path="/login" element={
                     <Login/>
                } />
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/gymbot" element={<Gymbot/>}/>
                <Route path="/AIschedules" element={<AIschedules/>}/>
                <Route path="/mySchedules" element={<MySchedules/>}/>
                <Route path="/exercises" element={<Exercises/>}/>
                <Route path="/equipment" element={<Equipment/>}/>
                <Route path="/traineemetrics" element={<TraineeMetrics/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/payments" element={<Payments/>}/>
              </Routes>
            </>
        </div>     
      </BrowserRouter>
  );
}

export default App;






















{/* {isLoggedIn ? (
            <>
              <Sidebar visible={navVisible} setVisible={setNavVisible}/>   
              <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={
                  <div className="page page-with-navbar">
                    <Home/>
                  </div>
                }/>
                <Route path="/gymbot" element={
                  <div className="page page-with-navbar">
                    <Gymbot/>
                  </div>
                }/>
                <Route path="/mySchedules" element={
                  <div>
                    <MySchedules/>
                  </div>
                }/>
              </Routes>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={
                  <div>
                     <Login setIsLoggedIn={setIsLoggedIn}/>
                  </div>
                } />
            </Routes>
          )}     */}
