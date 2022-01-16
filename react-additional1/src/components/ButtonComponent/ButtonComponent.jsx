import React from 'react';

import {Button} from 'antd';

const ButtonComponent = ({activeMode, setActiveMode, buttonMode}) => {
    return (
        <Button type="primary" onClick={() => setActiveMode(buttonMode)} 
        style={activeMode === buttonMode ? { background: "red", margin: "7px" } : {margin: "5px"}}
        >
                {buttonMode}
        </Button>
    );
};

export default ButtonComponent;