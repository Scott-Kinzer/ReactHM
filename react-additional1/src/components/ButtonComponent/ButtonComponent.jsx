import React from 'react';

const ButtonComponent = ({activeMode, setActiveMode, buttonMode}) => {

    return (
        <button onClick={() => setActiveMode(buttonMode)} className={activeMode === buttonMode ? 'active': ''}>
                {buttonMode}
        </button>
    );
};

export default ButtonComponent;