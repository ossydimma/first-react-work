import React from 'react';
import './App.css';

function App() {
  const myStyles = {
  width: '100%',
  height: '100vh',
  background: '#3a3d40',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  }
  return (
    <>
      <div style={myStyles}>
        <h1 className="waviy">HEY, I AM 
          
            <span className='--i:1'>d</span>
            <span className='--i:2'>w</span>
            <span className='--i:3'>a</span>
            <span className='--i:4'>t</span>
            <span className='--i:5'>e</span>
            <span className='--i:6'>r</span>
      </h1>
        <p >This Is My First React Project.</p>
      </div>  

      
    </>
  )
}

export default App
