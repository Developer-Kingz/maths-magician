import React from 'react';
import '../App.css';
import Button from './Button';

const Calculator = () => (
  <div className="main">
    <div className="calculator">
      <div className="screen">0</div>
      <div className="input-container">
        <Button type="button" text="AC" className="inputs" />
        <Button type="button" text="+/-" className="inputs" />
        <Button type="button" text="%" className="inputs" />
        <Button type="button" text="/" className="inputs-right" />
        <Button type="button" text="7" className="inputs" />
        <Button type="button" text="8" className="inputs" />
        <Button type="button" text="9" className="inputs" />
        <Button type="button" text="x" className="inputs-right" />
        <Button type="button" text="4" className="inputs" />
        <Button type="button" text="5" className="inputs" />
        <Button type="button" text="6" className="inputs" />
        <Button type="button" text="-" className="inputs-right" />
        <Button type="button" text="1" className="inputs" />
        <Button type="button" text="2" className="inputs" />
        <Button type="button" text="3" className="inputs" />
        <Button type="button" text="+" className="inputs-right" />
        <Button type="button" text="0" className="zero-input" />
        <Button type="button" text="." className="dot-inputs" />
        <Button type="button" text="=" className="equal-inputs" />
      </div>
    </div>
  </div>
);

export default Calculator;
