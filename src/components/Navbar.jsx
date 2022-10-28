import React from 'react';
import "./Navbar.css";
import { Button } from '@mui/material';
import { LightMode } from '@mui/icons-material';
import { DarkMode } from '@mui/icons-material';

const Navbar = ( 
    {
        isLightMode, setIsLightMode
    }
) => {
  return (
    <div className='Navbar' style={ {
        backgroundColor: isLightMode? "rgb(217, 217, 217)" : "rgb(41, 38, 38)",
      } }>
        <Button className='ModeChanger' onClick={()=> {
            localStorage.setItem("LightMode", !isLightMode);
            setIsLightMode(!isLightMode);
        }}> 
        { isLightMode? <DarkMode/> : <LightMode/>  }
        </Button>
    </div>
  )
}

export default Navbar;