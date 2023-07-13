import React, { useState } from 'react';
import '../App.css';
import Button from './Button';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);

    if (newData.next !== null) {
      setDisplay(newData.next);
    } else if (newData.total !== null) {
      setDisplay(newData.total);
    } else {
      setDisplay('0');
    }
  };
  return (
    <div className="main">
      <div className="calculator">
        <div className="screen">{display}</div>
        <div className="input-container">
          <Button
            type="button"
            text="AC"
            className="inputs"
            onClick={() => handleButtonClick('AC')}
          />
          <Button
            type="button"
            text="+/-"
            className="inputs"
            onClick={() => handleButtonClick('+/-')}
          />
          <Button
            type="button"
            text="%"
            className="inputs"
            onClick={() => handleButtonClick('%')}
          />
          <Button
            type="button"
            text="/"
            className="inputs-right"
            onClick={() => handleButtonClick('/')}
          />
          <Button
            type="button"
            text="7"
            className="inputs"
            onClick={() => handleButtonClick('7')}
          />
          <Button
            type="button"
            text="8"
            className="inputs"
            onClick={() => handleButtonClick('8')}
          />
          <Button
            type="button"
            text="9"
            className="inputs"
            onClick={() => handleButtonClick('9')}
          />
          <Button
            type="button"
            text="x"
            className="inputs-right"
            onClick={() => handleButtonClick('x')}
          />
          <Button
            type="button"
            text="4"
            className="inputs"
            onClick={() => handleButtonClick('4')}
          />
          <Button
            type="button"
            text="5"
            className="inputs"
            onClick={() => handleButtonClick('5')}
          />
          <Button
            type="button"
            text="6"
            className="inputs"
            onClick={() => handleButtonClick('6')}
          />
          <Button
            type="button"
            text="-"
            className="inputs-right"
            onClick={() => handleButtonClick('-')}
          />
          <Button
            type="button"
            text="1"
            className="inputs"
            onClick={() => handleButtonClick('1')}
          />
          <Button
            type="button"
            text="2"
            className="inputs"
            onClick={() => handleButtonClick('2')}
          />
          <Button
            type="button"
            text="3"
            className="inputs"
            onClick={() => handleButtonClick('3')}
          />
          <Button
            type="button"
            text="+"
            className="inputs-right"
            onClick={() => handleButtonClick('+')}
          />
          <Button
            type="button"
            text="0"
            className="zero-input"
            onClick={() => handleButtonClick('0')}
          />
          <Button
            type="button"
            text="."
            className="dot-inputs"
            onClick={() => handleButtonClick('.')}
          />
          <Button
            type="button"
            text="="
            className="equal-inputs"
            onClick={() => handleButtonClick('=')}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
