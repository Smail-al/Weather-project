
function WeatherCard({city}){
  
  return (
      <div>
            <img className="city-img" src={city.imagebckg} alt={city.name}/>
            <h1 className="">{city.name}</h1>
            <h2>{city.countryName}</h2>
            <p>{city.tempC} °C</p>
            <img className="weather-card" src={city.Imageweather} alt={city.Condition} />
            <p>{city.Condition}</p>
        </div>
    );
    
}

export default WeatherCard;