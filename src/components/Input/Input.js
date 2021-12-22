import React from 'react';
import './Input.css';

const input = ({ placeholder, type }) => {
  return (
    <input className="Inputs" placeholder={placeholder} type={type}></input>
  );
};
export default input;
