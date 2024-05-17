// src/components/molecules/ButtonGroup.tsx
import React from 'react';

interface ButtonGroupProps {
  buttons: string[];
  onClick: (buttonLabel: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, onClick }) => {
  return (
    <div className="button-group">
      {buttons.map((buttonLabel, index) => (
        <button key={index} className="btn" onClick={() => onClick(buttonLabel)}>
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
