import { useState, useMemo } from "react";
import "../index.css";

export default function C() {
    const [inputValue, setInputValue] = useState("");
  
    const calculateAverage = (numbers) => {
      console.log('Calculating average...'); 
    
      const filteredNumbers = numbers
        .filter((num) => num !== "")
        .flatMap((num) => {
          if (num.includes(',')) {
            const parts = num.split(',');
            return parts.map((part) => parseFloat(part) / 2);
          } else {
            return parseFloat(num);
          }
        });
    
      const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
      return sum / filteredNumbers.length;
    };
  
    const numbersArray = inputValue.split(/[, ]+/);
    const average = useMemo(() => calculateAverage(numbersArray), [numbersArray]);
  
    return (
      <div>
        <h1 className="dark-bg">useMemo Hook</h1>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p className="dark-bg">Result: {isNaN(average) ? 'Please enter valid numbers' : average}</p>
      </div>
    );
  }