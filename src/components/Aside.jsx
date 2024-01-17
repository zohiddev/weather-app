import React from "react";
import { Search, AisdeHeader, AsideForecast, AsideAirInfo } from "./index";

function Aside({ weather, location, loading, forecast, getWeather }) {
    if (loading) {
        return (
            <div className='aside'>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className='aside'>
            <Search getWeather={getWeather} />

            <AisdeHeader
                cityName={location.name}
                temp={weather.temp_c}
                rain={weather.humidity}
                img={weather.condition.icon}
            />
            <AsideForecast list={forecast[0].hour} />
            <AsideAirInfo
                rain={weather.humidity}
                wind={weather.wind_kph}
                uv={weather.uv}
                real={weather.feelslike_c}
            />
        </div>
    );
}

export default Aside;
