import React from 'react';

const MyComponent = ({count, increase, decrease, reset}) => {
    return (
        <div>
            <div>{count}</div>
            <button onClick={increase}>INC</button>
            <button onClick={decrease}>DEC</button>
            <button onClick={reset}>RES</button>
            
        </div>
    );
};

export default MyComponent;
