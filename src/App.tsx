import {useState} from "react";
import "./App.css";
import DrawModule from "./components/Draw.tsx";
import Menu from "./components/Menu.tsx";

function App() {

  // Global variables
  const [color, setColor] = useState<string>("#000000");
  const [icon, setIcon] = useState<number>(0);
  const [size, setSize] = useState<number>(1);
  // ENDBLOCK

  // Recieving and handling data from child component
  function currentColor(newColor:string) {
    setColor(newColor);
    console.log(color);
  }

  function currentIcon(newIcon:number) {
    setIcon(newIcon);
    console.log(icon);
  }

  function currentSize(newSize:number) {
    setSize(newSize);
    console.log(size);
  }

  //ENDBLOCK

  return (
    <>
      <Menu handleColor={currentColor} handleIcon={currentIcon} handleValue={currentSize} />
      <DrawModule colorS={color} iconS={icon} sizeS={size} />
    </>
  );
}

export default App;
