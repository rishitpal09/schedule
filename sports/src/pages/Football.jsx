import React from "react";
const dataArray = [
    {
        match:'1',
        teama:'quinton',
        teamb:'tera', 
        time:'5',
        location:'thane'

    },
    {
        match:'2',
        teama:'quinton',
        teamb:'tera', 
        time:'15',
        location:'thane'

    },
    {
        match:'3',
        teama:'quinton',
        teamb:'tera', 
        time:'14',
        location:'thane'

    }
];
const Football=()=>{
    return(
        <div className="football">

        <div className="my-component">
                <h1 style={{textAlign:"center", textDecoration:"underline",lineHeight:"5" }}>FOOTBALL  SCHEDULE</h1>
            <ul>
                {dataArray.map((item,index)=>(
                    <li key={index}>
                    <div className="text-box">

                        <p style={{fontWeight:'bold',fontSize:'24px',lineHeight:"3"}}>MATCH NO :{item.match} | TEAMS :  {item.teama} VS {item.teamb} | LOCATION: {item.location} | TIME:{item.time} </p>
                        
                    </div>
                    
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Football;