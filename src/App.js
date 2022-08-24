
import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  
  const addedPopulation = (country) => {
    console.log("button is clicked", country.name.common);
    const newCart = [...cart, country]
    setCart(newCart);
  }
  const totalPopulation = cart.reduce( (sum, country) => sum + country.population, 0)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err));
  },[])
  return (
    <div className='App'>
       <div className="cart">
        <h2>Total Country : {countries.length}</h2>
        <p>Count country : <strong>{cart.length}</strong> </p>
        <p>Total population : <strong>{totalPopulation}</strong> </p>
       </div>
       {
        countries.map((country, index) => <Country key={index} country={country} addedPopulation = {addedPopulation}></Country>)
       }
      
    </div>
  );
}

export default App;
