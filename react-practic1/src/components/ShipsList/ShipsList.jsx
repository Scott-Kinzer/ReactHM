import React, {useEffect, useState} from 'react';
import {ApiRequest} from "../../api/api";
import Ship from "../Ship/Ship";
import Loader from "../Loader/Loader";

const ShipsList = ({setIdShip, setPopUp}) => {

    const [ships, setShips] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(  () => {
        (async () => {

            let shipsData = await new ApiRequest().shipsFetch();
            setTimeout(() => {
                setShips(shipsData);
                setLoader(false);
            }, 1000);

        })();

    }, []);

    return (
        <div className='ships-wrapper'>
            {loader ? <Loader /> :
                ships
                    .filter(ship => +ship.launch_year !== 2020)
                    .map(ship => <Ship  key={ship.flight_number}
                                       shipImg={ship.links.mission_patch_small}
                                       year={ship.launch_year}
                                        flightNumber={ship.flight_number}
                                       missionName={ship.mission_name}
                                        setIdShip={setIdShip}
                                        setPopUp={setPopUp}
                    />)
            }
        </div>
    );
};

export default ShipsList;
