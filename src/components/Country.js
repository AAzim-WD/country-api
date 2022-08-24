import React from 'react';
import './Country.css'
const Country = (props) => {
 
    const  {name, capital, population, flags} = props.country;
    return (
        <div className="container">
           <div className="country-img">
            <img src={flags.png} alt="flagsPhoto" />
           </div>
           <div className="country-description">
            <h2>Country : {name.common}</h2>
            <h3>Capital : {capital}</h3>
            <p>Population : {population}</p>
            <button className='add-btn' onClick={() => props.addedPopulation(props.country)}>Add Country & Population</button>
           </div>
        </div>
    );
};

export default Country;