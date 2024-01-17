import { useState } from "react";
import Axios from "../api";
import { urls } from "../constants/urls";

function useWeather() {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);

    function getWather(cityName = "London") {
        setLoading(true);
        Axios.get(urls.forecastDay(cityName))
            .then((response) => {
                setWeather(response.data.current);
                setLocation(response.data.location);
                setForecast(response.data.forecast.forecastday);
            })
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }

    return { weather, location, loading, forecast, getWather };
}

export default useWeather;
