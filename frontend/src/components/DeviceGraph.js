import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from "axios"
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';
Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function DeviceGraph({ uid }) {
  const [tempreadings, settempReadings] = useState([]);
  const [humidreadings, sethumidReadings] = useState([]);
  const [showGraph, setShowGraph] = useState(true);
  const onClickHandler = () => {
    document.location.reload(true);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4000/api/devices-graph?uid=${uid}`);
        settempReadings(response.data.data.temperature);
        sethumidReadings(response.data.data.humidity);
      }
      catch (err) {
        window.alert(err.response.data.message);
        setShowGraph(false);
        document.location.reload(true);
      }

    }

    fetchData();
  }, [uid]);

  const data = {
    labels: tempreadings.map(r => r.timestamp),
    datasets: [
      {
        label: 'Temprature',
        data: tempreadings.map(r => r.temperature),
        backgroundColor: 'transparent',
        borderColor: '#f26c6d',
        borderWidth: 3,
        color: "black"
      },
      {
        label: 'Humidity',
        data: humidreadings.map(r => r.humidity),
        backgroundColor: 'transparent',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 3
      }
    ]
  };

  return <div>
    {showGraph ? (<div style={{ "margin": "100px", "color": "black", "width": "900px", "height": "900px" }}>
      <h2>Device {uid}</h2>
      <Line data={data} />
      <div style={{ "margin": "25px" }}>
        <button style={{ "height": "40px", "width": "65px" }} onClick={onClickHandler}>Back</button>
      </div>
    </div>) : <div></div>}
  </div>


}

export default DeviceGraph;
