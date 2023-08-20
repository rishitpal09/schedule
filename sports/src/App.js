// import React from 'react';
import React,{useState} from "react";
// d
import{
  FaBaseballBall,
  FaBasketballBall,
  FaFootballBall,
  FaTableTennis,
  FaTh,
  FaBars

}from "react-icons/fa";
// s
import{Route,Routes} from "react-router-dom";
import Football from './pages/Football';
import Basketball from './pages/Basketball';
import Tennis from './pages/Tennis';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Sidebar';
import "./App.css";
import Mainarea from './Mainarea';

const App=()=>{
  // const [selectedSport, setSelectedSport] = useState(menuItem[0]);

  // const handleSportClick = (sport) => {
  //   setSelectedSport(sport);
  // };
  return(
    <>
    <Sidebar>

    <Routes>
      <Route path= '/' element={<Dashboard/>}/>
      <Route path= '/football' element={<Football/>}/>
      <Route path= '/basketball' element={<Basketball/>}/>
      <Route path= '/tennis' element={<Tennis/>}/>

    </Routes>
    
    </Sidebar>
    </>
  )
}

export default App;
