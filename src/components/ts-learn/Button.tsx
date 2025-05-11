import React from "react";

interface buttonShape {
  label: string;
  onClick: () => void;
  isDisabled: boolean;
}

const Button = ({ label, onClick, isDisabled }: buttonShape) => {
  return (
    <div>
      <button onClick={onClick} disabled={isDisabled}>
        {label}
      </button>
    </div>
  );
};

export default Button;
