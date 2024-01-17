import React from "react";

function Search({ getWeather }) {
    function handleSubmit(e) {
        e.preventDefault();

        console.log(e.target[0].value);
        getWeather(e.target[0].value);
    }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='search-input'
                    placeholder='Search cities'
                />
            </form>
        </div>
    );
}

export default Search;
