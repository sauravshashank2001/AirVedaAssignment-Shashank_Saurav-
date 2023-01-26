import { useEffect, useState } from 'react';
import './App.css';
import DeviceGraph from './components/DeviceGraph';
import axios from 'axios';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showGraphComponent, setShowGraphComponent] = useState(false);
  const [showFormComponent, setShowFormComponent] = useState(true);
  const [listUid, setListUid] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:4000/api/devices/alluid`);
      setListUid(response.data.allList);
    }
    fetchData();
  }, [])


  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setShowGraphComponent(true);
    setShowFormComponent(false);
  };


  return (
    <div className="App">
      {showFormComponent && <div> <div style={{ "margin": "100px" }}>
        <h2>Available devices with temprature and humidity Readings</h2>
        {listUid.map((device) => { return <button style={{ "height": "30px", "width": "38px", "margin": "20px" }}>{device}</button> })}

      </div> <form onSubmit={handleSubmit}>
          <label>
            <h3>Enter Uid</h3>
            <input type="text" value={inputValue} onChange={handleChange} required="true" />
          </label>
          <button type="submit" >Submit</button>
        </form>
        <div style={{margin:"200px"}}><b><h3>Note !</h3> The readings are available for only above mentioned devices and which is static data and comletely random, stored
          in backend folder "Reading.js"<br/> If device entered is not in list then it will throw alert.
        </b></div>
        
        </div>}
      {showGraphComponent ? <DeviceGraph uid={inputValue} /> : null}
    </div>

  );
}

export default App;
