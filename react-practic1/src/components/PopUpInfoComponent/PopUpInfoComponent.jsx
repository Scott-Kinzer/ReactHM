import React, {useState, useEffect} from 'react';
import {ApiRequest} from "../../api/api";

const PopUpInfoComponent = (props) => {

    const [shipInfo, setShipInfo] = useState({})


    useEffect(() => {
        (async () => {

            let shipData = await new ApiRequest().shipInfoFetch(props.idShip);
            setShipInfo(shipData);

        })();
    }, [props.idShip]);

    return (
        <div className='pop-up'>
            <div className='ship-wrapper-popUp'>
                <div>ROCKET ID: {shipInfo.rocket_id}</div>
                <div>ROCKET NAME: {shipInfo.rocket_name}</div>
                <div>LAUNCH DATE: {shipInfo.launch_date_utc}</div>
                <div>SITE ID: {shipInfo.site_id}</div>
            </div>
            <button className='close-btn' onClick={() => props.setPopUp(false)}>CLOSE POP-UP</button>
        </div>
    );
};

export default PopUpInfoComponent;
