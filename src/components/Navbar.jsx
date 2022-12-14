import React from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import { LightMode } from "@mui/icons-material";
import { DarkMode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLightMode, setIsLightMode }) => {
  const navigation = useNavigate();
  return (
    <div
      className="Navbar"
      style={{
        backgroundColor: isLightMode ? "rgb(217, 217, 217)" : "rgb(38, 38, 38)",
      }}
    >
      <Button
        className="ModeChanger"
        onClick={() => {
          localStorage.setItem("LightMode", !isLightMode);
          setIsLightMode(!isLightMode);
        }}
      >
        {isLightMode ? (
          <DarkMode sx={{ color: "black" }} />
        ) : (
          <LightMode sx={{ color: "white" }} />
        )}
      </Button>
        <Button className="Login" onClick={() => {
          navigation("/login");
        }}>
          Login
        </Button>
    </div>
  );
};

export default Navbar;
