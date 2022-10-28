import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  const [state, setState] = useState("amongus");

  const [isLightMode, setIsLightMode] = useState(false);
  const clickHandler = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const json = await response.json();
    setState(json.fact);
  };
  useEffect(() => {
    clickHandler();
    setIsLightMode(JSON.parse(localStorage.getItem("LightMode")));
  }, []);
  console.log(isLightMode);
  return (
    <div className="Container" style={ {
      backgroundColor: isLightMode? "#ffffff" : "#707070",
    } }>
      <div className="Header">
        <Navbar isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
      </div>
      <div className="App">
        <Button
          name="sus"
          id="amogus"
          variant="contained"
          onClick={clickHandler}
        >
          fetch me their souls
        </Button>
        <div className="state">{state}</div>
      </div>
    </div>
  );
}

export default App;
