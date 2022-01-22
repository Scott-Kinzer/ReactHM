import React from 'react';
import Button from '../Buton/Button';

const ButtonsComponent = ({buttons, setPicture}) => {
    return (
        <div>
            {buttons.map((button, i) => <Button key={i} setPicture={setPicture} button={button} />)}
        </div>
    );
};

export default ButtonsComponent;