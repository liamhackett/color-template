import React, { useState } from 'react';
import './TextField.css';

function TextField({ height = 'auto', width = 'auto', label = '', outerLabel = true, isEmail = false, isPassword = false, shadow = true, onChange = (e) => {console.log(e.target.value)}, value=''}) {
  const [inputValue, setInputValue] = useState(value);
  const [isValid, setIsValid] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const shadowValue = shadow ? 'rad-shadow' : '';
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsTyping(true);
    if (isEmail) {
      setIsValid(/^\S+@\S+\.\S+$/.test(newValue));
    } else if (isPassword) {
      setIsValid(newValue.length >= 6);
    }
    onChange(e);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  // Determine the border color class
  const borderColorClass = isTyping && !isValid
    ? 'warning'
    : !isTyping && !isValid
    ? 'failure'
    : (isValid && !isTyping) || !inputValue.trim() 
    ? 'brand'
    : 'success';

  return (
    <div className="text-field">
      {outerLabel && label && <label>{label}</label>}
      <input
        type={isPassword ? 'password' : 'text'} // Set the type based on isPassword
        className={`custom-input ${borderColorClass} ${shadowValue}`}
        style={{ borderRadius: '8px', height, width }}
        placeholder={label}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {!isValid && !isTyping && (
        <p className="failure-text">
          {isPassword ? 'Password is too short.' : 'Please enter a valid email.'}
        </p>
      )}
    </div>
  );
}

export default TextField;
