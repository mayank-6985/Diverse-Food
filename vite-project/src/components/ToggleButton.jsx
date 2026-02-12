import { useState } from "react";

const ToggleButton = ({ 
  defaultOn = false, 
  onToggle = () => {} 
}) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const toggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <button
      onClick={toggle}
      className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300
        ${isOn ? "bg-green-500" : "bg-gray-300"}`}
    >
      <span
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300
          ${isOn ? "translate-x-7" : "translate-x-0"}`}
      />
    </button>
  );
};

export default ToggleButton;
