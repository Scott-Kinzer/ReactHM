import React from 'react';
import { Button } from 'antd';


export const User = ({userName, idHandler, idUser, setChosenItem, userChosen}) => {

    const setIdOfUser = () => {
        idHandler(idUser);
    }

    if (userChosen) {
        return (
            <Button danger   className="btn-wrap red" type="primary"onClick={() => {
                setIdOfUser();
                setChosenItem(idUser);
            }}>
    
                {userName}
            </Button>
        );
    }

    return (
        <Button   className="btn-wrap " type="primary"onClick={() => {
            setIdOfUser();
            setChosenItem(idUser);
        }}>

            {userName}
        </Button>
    );
};


