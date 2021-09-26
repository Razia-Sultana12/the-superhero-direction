import React from 'react';
import './Apps.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Apps = (props) => {
    console.log(props);
    const {name,inventor,launchedYear,annualRevenue,download,logo} = props.app;
    const element = <FontAwesomeIcon className="heart" icon={faHeart} />
    return (
        <div className="main">
        <div className="card">
        <img src={logo} className="card-img-top" alt="" />
        <div className="card-body">
            <h2 className="appName card-title">{name}</h2>
            <p>Founder: {inventor}</p>
            <p>Launched Year: {launchedYear}</p>
            <p>Download: {download}</p>
            <p>Annual Revenue: {annualRevenue}</p>
            <button className="addFvrt" onClick={() => props.handleAddToFavourite(props.app)}>{element}Add to Favourite</button>
        </div>
    </div>
    </div>
   
   
    );
};

export default Apps;