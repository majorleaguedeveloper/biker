import React, { useState, useEffect } from 'react';

const NumberList = () => {
  const [numbers, setNumbers] = useState([5, 10, 15, 20, 25, 30, 35, 40]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random number between 1 and 100
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      // Update the array: remove the last value and add the random number to the start
      setNumbers((prevNumbers) => {
        const newNumbers = [randomNumber, ...prevNumbers.slice(0, -1)];
        return newNumbers;
      });
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Number List</h3>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
