import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import "./App.css"
function App () {
  const [cityIndex, setCityIndex] = useState(0);
  const cityList = [
    {
      imagebckg: "https://www.globe-gazers.com/wp-content/uploads/2023/11/jean-baptiste-d-CVs3PifGWsM-unsplash-1.jpg",
      name: 'Paris',
      countryName: "France",
      tempC: "10°c",
      imageweather : 'https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Images-HD.png',
      condition: 'Snowy',

    },
    {
      imagebckg: "https://favim.com/pd/p/orig/2018/09/02/places-london-rainy-day-Favim.com-6253361.jpg",
      name: 'London',
      countryName: "England",
      tempC: "12°c",
      imageweather : 'https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Image-File.png',
      condition: 'Rainy',
    },
    {
      imagebckg: "https://isardasorensen.wordpress.com/wp-content/uploads/2012/05/tp-tuesday-storm-5-29-12.jpg",
      name: 'NewYork',
      countryName: "USA",
      tempC: "15°c",
      imageweather : 'https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Picture.png',
      condition: 'Stormy',
    },
    {
      imagebckg: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Marrakech-3.jpg",
      name: 'Marrakech',
      countryName: "Morocco",
      tempC: "32°c",
      imageweather : 'https://www.pngall.com/wp-content/uploads/2/Sunshine-PNG-Free-Download.png',
      condition: 'Sunny',
    },{
      imagebckg: "https://media.istockphoto.com/id/959955744/photo/tourists-walking-under-the-colosseum-in-rome-on-a-cloudy-day-with-the-sun-shining-behind.jpg?s=170667a&w=0&k=20&c=qCemPvZkt7tPMFQCARtSV77xGORBFXDtqTuoZLGvx_Q=",
      name: 'Rome',
      countryName: "Italy",
      tempC: "17°c",
      imageweather : 'https://www.pngall.com/wp-content/uploads/11/Weather-PNG-HD-Image.png',
      condition: 'Cloudy',
    },{
    imagebckg: "https://media.istockphoto.com/id/1368483952/video/blinking-yellow-warning-symbol-loop-animation-footage-on-black-solid-background-2d.jpg?s=640x640&k=20&c=tJx1nC_i8TSoCQHz_MwgoYNJD3OZzhDzDHFQLieBCys=",
      name: "Don't TRUST the weather forecast",
      countryName: "Keep your jacket handy",
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