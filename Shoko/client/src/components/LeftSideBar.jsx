import React, { useState } from 'react';
import "../components/leftsidebar.css";
import Modal from './model';

const LeftSideBar = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [addCase,setaddCase]=useState(false);

  const handleCaseClick = (index) => {
    setSelectedCase(index);
  };

  return (
    <div className='leftsidebar'>
     <button onClick={()=>setaddCase(true)}>Add cases</button>
    { addCase &&< Modal onClose={()=>{setaddCase(false)}}/>}
    <h2>Cases</h2>
      
    <div className='cases'> 
      <div className='case-box'>
        <h3>Case 1</h3>
      </div>
    </div>
  </div>
  
    
  );
}

export default LeftSideBar;
