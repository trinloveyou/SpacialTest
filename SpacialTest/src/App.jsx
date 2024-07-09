import React, { useState, useEffect } from "react";
import "./App.css";
import mockUpData from "./MockupData.json";

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);

  useEffect(() => {
    setJsonData(mockUpData.mockUpData);
  }, []);

  useEffect(() => {
    if (jsonData.length > 0) {
      let uniqueXValues = [];
      let uniqueYValues = [];
      let previousX = null;

      jsonData.forEach((item) => {
        if (item.x !== previousX) {
          uniqueXValues.push(item.x);
        }
        // check if item.y is not equal of uniqueYValues
        if (!uniqueYValues.includes(item.y)) {
          uniqueYValues.push(item.y);
        }
        previousX = item.x;
      });

      setXValues(uniqueXValues);
      setYValues(uniqueYValues);
    }
  }, [jsonData]);

  console.log("xValues", xValues);
  console.log("yValues", yValues);

  return (
    <div className="App">
      <h1>JSON Data</h1>

      <div>
        <h2>Unique X Values:</h2>
        <ul>
          {xValues.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Unique Y Values:</h2>
        <ul>
          {yValues.map((y, index) => (
            <li key={index}>{y}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
