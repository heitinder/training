import React, { useState, useEffect } from "react";
const Timer = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`count value has changed to ${count}`);
  },[count]);

  useEffect(() => {
    console.log(`count2 value has changed to ${count2}`);
  },[count2]);
  
  return (
    <div>
      <h3>This current Value of Count is : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Count increase</button>
      <h3>This current Value of Count2 is : {count2}</h3>
      <button onClick={() => setCount2(count2 + 1)}>Count increase</button>
    </div>
  );
};

export default Timer;
