import './App.css';
import Trips from './components/Trips.js'
import data from './data.js'
import { useState } from 'react'; 
function App() {
  let [trips_name,updateTrips] = useState(data);
  function remover(city) {
    const newData = trips_name.filter((trip) => trip.city_name !== city);
    updateTrips(newData);
  }
  function refresh() {
    updateTrips(data);
  }

  if(trips_name.length === 0) {
    return (
      <div>
        <h1>No trips left!</h1>
        <button onClick={refresh}>Refresh?</button>
      </div>
    );
  }

  else {
    return (
    <div className = "container">
      <h2>Plan Your Trip</h2>
      <Trips trips = {trips_name} updater = {remover}></Trips>
    </div>
  );
  }
}

export default App;
