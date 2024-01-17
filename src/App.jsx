import { useEffect, useState } from "react";
import { Sidebar, Aside, Widget } from "./components";
import Axios from "./api";
import { urls } from "./constants/urls";

function App() {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);

    function getWeather(cityName = "London") {
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

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <>
            <Sidebar />
            <Aside {...{ weather, loading, location, forecast, getWeather }} />
            <Widget {...{ forecast, loading }} />
        </>
    );
}

export default App;
