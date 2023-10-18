import React from 'react';
import './Button.css';

function Button({ text, height = '45px', width = '120px', fontSize = '14px', fontWeight = 'bold', disabled = false, shadow = true, outline=false }) {
  const buttonStyle = {
    height: height,
    width: width,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  let buttonClassName = 'button' + (shadow ? ' rad-shadow' : '') + (outline ? ' outline' : '');


  return (
    <button className={buttonClassName} style={buttonStyle} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
