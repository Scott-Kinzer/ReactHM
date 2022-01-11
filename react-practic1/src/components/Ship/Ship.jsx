import React from 'react';

const Ship = ({shipImg, year, missionName, flightNumber, setIdShip, setPopUp}) => {
    return (

            <div onClick={() => {
                setIdShip(flightNumber);
                setPopUp(true);

            }} className='ship-wrapper'>

                <div>{year}</div>
                <div>{missionName}</div>

                <img src={shipImg} alt=""/>
            </div>

    );
};

export default Ship;
