import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Weather = () => {

        
  const [weather, setWeather] = useState({});

  const success = pos =>{
    console.log(pos.coords.latitude)
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    // Para hacerlo dinamico, usamos backpics en la url
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=27d30849939ba27e504b4f010d82ef9b`)
    
    .then(res => setWeather(res.data))
  }

  const tempC = (weather.main?.temp - 273.15).toFixed(2);
  const tempF = ((tempC*9/5)+32).toFixed(2)

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(success)
  }, [])
    
  
  const[ isCentigrade, setIsCentigrade ] = useState (true);
    const swapTemp = () => {
        console.log("Me ejecuté")
        setIsCentigrade(!isCentigrade);
    }

    return (
        <div className='weather-containter'>
            <h2>Weather App</h2>
            <h3>{weather.name}, {weather.sys?.country}</h3>
            <div className='content'>
                <div className='image-tittle'>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="temperatureIMG"/>
                    <h4> {isCentigrade ? `${tempC} °C` : `${tempF} °F` }</h4>  
                </div>
                <div className='data'>
                    <p>"{weather.weather?.[0].description}"</p>
                    <p><i className="fas fa-wind"></i> Wind Speed: {weather.wind?.speed} m/s</p>
                    <p><i className="fas fa-humidity"></i> Relative humidity: {weather.main?.humidity}%</p>
                    <p><i className="fas fa-tired"></i> Pressure: {weather.main?.pressure}</p>
                </div>
            </div>
            
            
            <button onClick={swapTemp}>{isCentigrade ? 'Convertir °F' : 'Convertir a °C'}</button>

        </div>
    );
};

export default Weather;