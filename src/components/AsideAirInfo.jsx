import React from "react";

function AsideAirInfo({ real, rain, uv, wind }) {
    return (
        <div className='aside-info'>
            <h3 className='aside-info__title'>Air conditions</h3>

            <div className='aside-info__row'>
                <div className='aside-info__card'>
                    <p className='aside-info__text'>Real feal</p>
                    <p className='aside-info__temp'>{real}&deg;</p>
                </div>
                <div className='aside-info__card'>
                    <p className='aside-info__text'>Wind</p>
                    <p className='aside-info__temp'>{wind} km/h</p>
                </div>
                <div className='aside-info__card'>
                    <p className='aside-info__text'>Chance of rain</p>
                    <p className='aside-info__temp'>{rain}%</p>
                </div>
                <div className='aside-info__card'>
                    <p className='aside-info__text'>UV index</p>
                    <p className='aside-info__temp'>{uv}</p>
                </div>
            </div>
        </div>
    );
}

export default AsideAirInfo;
