import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';




function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div >
      <div className="flex items-center space-x-6">
        <div className="cursor-pointer select-none">
          {isActive ? <FontAwesomeIcon icon={faTicket} onClick={() => {
            setIsActive(!isActive)
          }} /> :
            <FontAwesomeIcon icon={faClock} onClick={() => {
              setIsActive(!isActive)
            }} />
          }  Ticket
        </div>


      </div>
    </div>
  );
}

export default App;
