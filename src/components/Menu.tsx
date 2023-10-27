import React from "react";
import Styles from "./Menu.module.css";
import penIcon from "../assets/penIcon.png";
import ereaserIcon from "../assets/ereaserIcon.png";
import sweepIcon from "../assets/sweep.png";

interface MenuProps {
  handleColor: (color: string) => void;
  handleIcon: (icon: number) => void;
  handleValue: (value: number) => void;
}

export default function Menu({handleColor, handleIcon, handleValue}: MenuProps) {

  // Global variables
  const [selectedValue, setSelectedValue] = React.useState<number>(1); // Initial value for the slider
  const [selectedColor, setSelectedColor] = React.useState<string>("#000000"); // Initial color
  const [selectedIcon, setSelectedIcon] = React.useState<number>(0); // Initial icon
  const [extraMenu, setExtraMenu] = React.useState<string>(Styles.SpecsClose);
  // ENDBLOCK

  // Returning to parent function
  handleColor(selectedColor);
  handleIcon(selectedIcon);
  handleValue(selectedValue);
  // ENDBLOCK

  // Updating useState
  const handleValueChange = (e:any) => {
    setSelectedValue(e.target.value);
  };

  const handleColorChange = (e:any) => {
    setSelectedColor(e.target.value);
  };

  function PenIcon() {
    if (extraMenu === Styles.SpecsClose) {
      setExtraMenu(Styles.SpecsOpen);
    } else if (extraMenu === Styles.SpecsOpen) {
      setExtraMenu(Styles.SpecsClose);
    }
    setSelectedIcon(0);
  }

  function Ereaser() {
    setSelectedIcon(1);
    setExtraMenu(Styles.SpecsClose);
  }

  function EreaseAll() {
    setSelectedIcon(2);
    setExtraMenu(Styles.SpecsClose);
  }
  // ENDBLOCK

  return (
    <div className={Styles.Main}>
      <div className={Styles.Selection}>
        <div className={selectedIcon === 0 ? Styles.PenSelected : Styles.Pen } onClick={PenIcon}>
          <img src={penIcon} draggable="false" alt="Pen icon" />
        </div>

        <div className={selectedIcon === 1 ? Styles.EreaserSelected:Styles.Ereaser} onClick={Ereaser}>
          <img src={ereaserIcon} draggable="false" alt="ereaser icon" />
        </div>

        <div className={selectedIcon === 2 ? Styles.EreaseAllSelected : Styles.EreaseAll} onClick={EreaseAll}>
          <img src={sweepIcon} draggable="false" alt="sweep icon" />
        </div>
      </div>
      <div className={extraMenu}>
        <input
          type="color"
          id="colorPicker"
          name="colorPicker"
          className={Styles.Color}
          value={selectedColor}
          onChange={handleColorChange}
        /> 
        <div>
          <p>{selectedValue}px</p>
          <input
            type="range"
            id="slider"
            name="slider"
            min="0"
            max="100"
            className={Styles.Slider}
            value={selectedValue}
            onChange={handleValueChange}
          />
        </div>
      </div>
    </div>
  );
}
