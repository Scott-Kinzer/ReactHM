import React from 'react';
import { Button } from 'antd';


export const User = ({userName, idHandler, idUser}) => {

    const setIdOfUser = () => {
        idHandler(idUser);
    }

    return (
        <Button className="btn-wrap" type="primary"onClick={setIdOfUser}>

            {userName}
        </Button>
    );
};


