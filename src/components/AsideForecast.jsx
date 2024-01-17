import React from "react";

function AsideForecast({ list }) {
    const getTime = (t) => {
        const date = new Date(t);
        const time = date.getHours();

        return `${time >= 10 ? time : "0" + time}:00`;
    };

    return (
        <div className='aside-forecast'>
            <h4 className='aside-forecast__title'>Today's Forecast</h4>

            <div className='aside-forecast__list'>
                {list.map((item, id) => (
                    <div key={id} className='aside-forecast__card card-aside'>
                        <h4 className='card-aside__title'>
                            {getTime(item.time)}
                        </h4>
                        <div className='card-aside__image'>
                            <img src={item.condition.icon} alt='' />
                        </div>

                        <p className='card-aside__temp'>
                            {Math.round(item.temp_c)}&deg;
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AsideForecast;
