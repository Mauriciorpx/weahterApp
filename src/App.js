
import './App.css';
import Weather from './components/Weather';

function App() {
/* 
  const [weather, setWeather] = useState({});

  const success = pos =>{
    console.log(pos.coords.latitude)
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    // Para hacerlo dinamico, usamos backpics en la url
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=27d30849939ba27e504b4f010d82ef9b`)

    .then(res => setWeather(res.data))
  }

  useEffect(() =>{
      navigator.geolocation.getCurrentPosition(success)
  }, []) */

 // axios.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=27d30849939ba27e504b4f010d82ef9b')



  return (
    <div className="App">
      {/* PAra hacerlo dinamico, se usan backpics */}
      {/* <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" /> */}
      
      <Weather/>
    </div>
  );
}

export default App;
