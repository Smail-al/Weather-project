import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import "./App.css"
function App () {
  const [cityIndex, setCityIndex] = useState(0);
  const cityList = [
    {
      imagebckg: "https://www.thetrainline.com/cms/media/1360/france-eiffel-tower-paris.jpg?mode=crop&width=1080&height=1080&quality=70",
      name: 'Paris',
      countryName: "France",
      tempC: 15,
      imageweather : '',
      condition: 'Ciel nuageux',

    },
    {
      imagebckg: "https://wallpapercave.com/wp/wp5522981.jpg",
      name: 'London',
      countryName: "England",
      tempC: 12,
      imageweather : '',
      condition: 'Pluvieux',
    },
    {
      imagebckg: "https://i.pinimg.com/736x/73/27/b1/7327b14150f01c822e43fee62c46453f.jpg",
      name: 'NewYork',
      countryName: "USA",
      tempC: 20,
      imageweather : '',
      condition: 'Ensoleillé',
    },
  ]
  return (
    <div>
      <WeatherCard city ={cityList[cityIndex]}/>
      <button onClick={() => setCityIndex(prevIndex => prevIndex -1)} disabled={cityIndex === 0}>
        Previous
        </button>
        <button onClick={() => setCityIndex(prevIndex => prevIndex +1)} disabled={cityIndex === cityList.length -1}>
          Next
          </button>

    </div>
  )
}
export default App