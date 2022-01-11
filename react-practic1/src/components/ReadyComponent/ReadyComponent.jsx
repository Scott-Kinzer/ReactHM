import React from 'react';
import {Button} from "antd";

const ReadyComponent = ({setShowSite}) => {

    return (
        <div className='wrapper-site' >
            <h2 className='meet'>HELLO, NICE TO SEE YOU</h2>
            <Button className='start-button' onClick={() => setShowSite(false)}>
                SHOW SITE
            </Button>
        </div>
    );
};

export default ReadyComponent;
