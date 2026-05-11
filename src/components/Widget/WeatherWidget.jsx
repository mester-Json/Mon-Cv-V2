import React , {useState , useEffect} from 'react';
import {Sun, CloudSun, Cloudy, CloudRain} from 'lucide-react'

const WeatherWidget = () => {

    const [weather , setWeather] = useState ( {temp: '--' , icon: <Cloudy strokeWidth={1} /> , city: 'Chargement...'} );

    const fetchWeather = async (lat , lon) => {
        try {
            const weatherRes = await fetch ( `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true` );
            const weatherData = await weatherRes.json ();

            const geoRes = await fetch ( `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}` );
            const geoData = await geoRes.json ();

            const city = geoData.address.city || geoData.address.town || geoData.address.village || "Ma position";

            const temp = Math.round ( weatherData.current_weather.temperature );
            const code = weatherData.current_weather.weathercode;

            let icon = <Sun strokeWidth={1} />;
            if (code > 0) icon = <CloudSun strokeWidth={1} />;
            if (code > 45) icon = <Cloudy strokeWidth={1} />;
            if (code > 60) icon = <CloudRain strokeWidth={1} />;

            setWeather ( {
                temp: `${temp}°C` ,
                icon: icon ,
                city: city
            } );
        } catch (error) {
            setWeather ( {temp: 'N/A' , icon: <CloudSun strokeWidth={1} /> , city: 'Erreur'} );
        }
    };

    useEffect ( () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition (
                (pos) => fetchWeather ( pos.coords.latitude , pos.coords.longitude ) ,
                () => fetchWeather ( 50.39 , 2.89 )
            );
        }
    } , [] );

    return (
        <div className="taskbar-right">
            <div className="weather-widget">
                <p style={{fontSize: '1.2rem'}}>{weather.icon}</p>
                <div style={{display: 'flex' , flexDirection: 'column' , fontSize: '0.7rem' , marginLeft: '5px'}}>
                    <p style={{fontWeight: 'bold'}}>{weather.temp}</p>
                    <p style={{opacity: 0.8}}>{weather.city}</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;