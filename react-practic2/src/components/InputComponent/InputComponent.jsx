import React, { useState } from 'react';
import {Button} from 'antd';

const InputComponent = (props) => {

    const [name, setName] = useState('');
    const [username, setSurName] = useState('');
    const [email, setEmail] = useState('');
    const sendToFilter = () => {

        props.setFilterUsers({
            name,
            username,
            email
        });
    }

    return (
        <div className='input-wrapper'>
            <input placeholder='name' value={name} onChange={(e) => setName(e.currentTarget.value)}  />
            <input placeholder='surname' value={username} onChange={(e) => setSurName(e.currentTarget.value)}  />
            <input placeholder='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />

            
            <Button onClick={() => sendToFilter()}   type="primary">Primary Button</Button>

        </div>
    );
};

export default InputComponent;