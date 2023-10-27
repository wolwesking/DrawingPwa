import React, { useRef, useEffect, useState } from "react";

interface props {
  colorS: string;
  iconS: number;
  sizeS: number;
}

const DrawModule = ({colorS, iconS, sizeS}:props) => {
  // Initial variable
  let canvas: any, context: any;
  const [drawing, setDrawing] = useState(false);

  // DOM interaction
  const canvasRef: React.MutableRefObject<null> = useRef(null);
  if (!canvasRef) return;

  useEffect(() => {
    canvas = canvasRef.current;
    context = canvas?.getContext("2d");
    canvas.width = window.innerWidth-5;
    canvas.height = window.innerHeight-5;
  }, [canvas]);

  const startDraw = (e: any) => {
    // Initialization
    canvas = canvasRef.current;
    context = canvas?.getContext("2d");
    // Logic
    if (context) {
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.lineWidth = sizeS;
      
      context.lineCap = "round";
      context.lineJoin = "round";

      if (iconS === 1)
      {
        context.strokeStyle = "#ffffff"
      } 
      else
      {
        context.strokeStyle = colorS;
      }
      
      setDrawing(true);
    }
  };

  const draw = (e: any) => {
    // Check
    if (!drawing) return;

    // Initialization
    canvas = canvasRef.current;
    context = canvas?.getContext("2d");
    if (context) {
      context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.stroke();
    }
  };

  const endDraw = () => {
    setDrawing(false);
  };
  
  if(iconS === 2)
  {
    canvas = canvasRef.current;
    context = canvas?.getContext("2d");
    canvas.width = window.innerWidth-5;
    canvas.height = window.innerHeight-5;
  }
  
  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
      />
    </>
  );
};

export default DrawModule;
