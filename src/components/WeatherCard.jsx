
function WeatherCard({city}){
    
  return (
      <div>
            <img className="city-img" src={city.imagebckg} alt={city.name}/>
            <h1>{city.name}</h1>
            <h2>{city.countryName}</h2>
            <p>{city.tempC}</p>
            <img className="weather-card" src={city.imageweather} alt={city.Condition} />
            <h2>{city.condition}</h2>
        </div>
    );
    
}

export default WeatherCard;