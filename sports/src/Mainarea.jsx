import React from 'react';

const Mainarea = ({ selectedSport }) => {
  return (
    <div className="main-area">
      <h2>Scheduled Matches</h2>
      <div>
        {selectedSport.matches.map((match, index) => (
          <div key={index} className="match">
            <p>Teams: {match.teams}</p>
            <p>Location: {match.location}</p>
            <p>Time: {match.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainarea;
