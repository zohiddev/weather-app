const domain = "http://api.weatherapi.com/v1";

const urls = {
    current: (cityName) =>
        `/current.json?key=aa035c9b932e458d8fb75806241101&q=${cityName}&aqi=no`,
    forecastDay: (
        cityName
    ) => `http://api.weatherapi.com/v1/forecast.json?key=aa035c9b932e458d8fb75806241101&q=${cityName}&days=7&aqi=no&alerts=no
    `,
};

export { domain, urls };
