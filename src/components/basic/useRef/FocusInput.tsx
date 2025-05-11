import React, { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);

  const foucusU = () => {
    inputElement.current.focus();
    inputElement.current.value = "Kay Liu";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={foucusU}>Focus</button>
    </div>
  );
};

export default FocusInput;
