import React from "react";
import { months } from "../helpers/helpers";

function Widget({ forecast, loading }) {
    const getDate = (d) => {
        const date = new Date(d);
        const day = date.getDate();
        const month = months[date.getMonth()];

        return `${day}-${month}`;
    };

    if (loading) {
        return <div className='widget'>Loading...</div>;
    }

    return (
        <div className='widget'>
            <div className='forecast'>
                <div className='forecast-header'>
                    <h1 className='forecast-title'>7-Day forecast</h1>
                </div>
                <div className='forecast-list'>
                    {forecast.map((item, key) => (
                        <div key={key} className='forecast-card'>
                            <div className='forecast-card__left'>
                                <p className='forecast-card__date'>
                                    {getDate(item.date)}
                                </p>
                            </div>
                            <div className='forecast-card__condition'>
                                <div className='forecast-card__image'>
                                    <img
                                        src={item.day.condition.icon}
                                        alt='site img'
                                    />
                                </div>
                                <p className='forecast-card__text'>
                                    {item.day.condition.text}
                                </p>
                            </div>

                            <div className='forecast-card__right'>
                                <p className='forecast-card__text'>
                                    {Math.round(item.day.maxtemp_c)}/
                                    {Math.round(item.day.mintemp_c)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Widget;
