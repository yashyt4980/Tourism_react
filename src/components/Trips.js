import TripsCard from './TripsCard.js';
import './Trips.css';
function Trips(props) {
    return(
    <div className = "parent">
        {
            props.trips.map((item, index) => (
                <TripsCard 
                    key = {index}
                    city = {item.city_name}
                    price = {item.price}
                    desc = {item.desc}
                    path = {item.path}
                    remover = {props.updater}
                />
            ))
        }
    </div>
    );
}

export default Trips;
