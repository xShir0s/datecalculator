import logo from './logo.svg';
import './App.css';
import {useId, useState} from "react";



function App() {
let startDate = new Date("1900-11-23")
  let endDate=  Date.now()
  const [daysBetween, setDaysBetween] = useState(null);

  const Calculate = () =>
  {
    const start = startDate
    const end = endDate
      const timeDifference = Math.abs(end-start);
      const dayDiff=Math.ceil(timeDifference / (1000* 3600 * 24));

      setDaysBetween(dayDiff)
  }

  return (

      <div className="App">
        <button onClick={Calculate}>Calculate</button>


              <h3>{daysBetween} days</h3>

          </div>
          );
        }

export default App;
