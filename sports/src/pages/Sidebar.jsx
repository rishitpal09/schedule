import React,{useState} from "react";
import{
    FaBaseballBall,
    FaBasketballBall,
    FaFootballBall,
    FaTableTennis,
    FaTh,
    FaBars

}from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Sidebar=({children})=>{
    const [isOPen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOPen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>,
            matches:[
                {
                    teams: 'Team A vs Team B',
                    location: 'Stadium 1',
                    time: '15:00'
                },
                {   teams: 'Team A vs Team B',
                    location: 'Stadium 1',
                    time: '15:00'}
            

            ]
        },
        {
            path:"/football",
            name:"Football",
            icon:<FaFootballBall/>,
            matches:[
                {
                    teams: 'Team A vs Team B',
                    location: 'Stadium 1',
                    time: '15:00'
                },
                {   teams: 'Team A vs Team B',
                    location: 'Stadium 1',
                    time: '15:00'}
            ]
        },
        {
            path:"/tennis",
            name:"Tennis",
            icon:<FaTableTennis/>,
            matches:[
                {
                    teams: 'Team A vs Team B',
                    location: 'Stadium 1',
                    time: '15:00'
                },
                {   teams: 'Team A vs Team B',
                    location: 'Stadium 1',
                    time: '15:00'}
            ]
        },
        {
            path:"/basketball",
            name:"Basketball",
            icon:<FaBasketballBall/>,
            matches:[
                {
                    teams: 'Team A vs Team B',
                    location: 'Stadium 1',
                    time: '15:00'
                },
                {   teams: 'Team A vs Team B',
                    location: 'Stadium 1',
                    time: '15:00'}
            ]
        }

    ]
    return(
        <div className="container">
            <div style = {{width:isOPen?"200px":"50px"}}className="sidebar">
                <div className="top_section">
                    <h1 style={{display:isOPen?"block":"none"}} className="logo">SPORT</h1>
                    <div style={{marginLeft:isOPen?"50px":"0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to ={item.path} key={index} classname="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display:isOPen?"block":"none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>

            
        </div>
    );
};

export default Sidebar;