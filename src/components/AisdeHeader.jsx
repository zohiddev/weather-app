import React from "react";

function AisdeHeader({ cityName, rain, temp, img }) {
    return (
        <div className='aside-header'>
            <div className='aside-header__row'>
                <div className='aside-header__content'>
                    <div>
                        <h3 className='aside-header__title'>{cityName}</h3>
                        <p className='aside-header__subtitle'>
                            Chance of rain: {rain}%
                        </p>
                    </div>
                    <div>
                        <h1 className='aside-header__temp'>{temp}&deg;</h1>
                    </div>
                </div>

                <div className='aside-header__image'>
                    <img src={img} alt='site img' />
                </div>
            </div>
        </div>
    );
}

export default AisdeHeader;
