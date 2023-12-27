import './TripsCard.css';
import { useState } from 'react';
function TripsCard(props) {
    let [isExpanded, changeExpand] = useState(false);
    function handleSpan() {
        changeExpand(!isExpanded);
    }


    function removeTrip() {
        props.remover(props.city);
    }
    return(
        <div className = "parentCard">
            <img src = {props.path}></img>
            <div>₹{props.price}</div>
            <h3>{props.city}</h3>
            <p>{isExpanded ? props.desc : `${props.desc.slice(0, 200)}...`}<span onClick={handleSpan}>{isExpanded ? 'Read Less' : 'Read More'}</span>
            </p>
            
            <button onClick = {removeTrip}>Not interested</button>
        </div>
        
    )
}

export default TripsCard;