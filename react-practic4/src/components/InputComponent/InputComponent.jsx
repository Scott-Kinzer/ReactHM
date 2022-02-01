import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/tasks/tasksSlice';

const InputComponent = () => {


    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const doForm = (e) => {
        setText(e.currentTarget.value);
    }

    const sendData = () => {
        if (text) {
            dispatch(addTask({text: text, done: false, id: +new Date()}));
            setText('');
        }
    }



    return (
        <div>
            <input type="text" value={text} onChange={doForm} />
            <button onClick={sendData} >SEND TASK</button>
        </div>
    );
};

export default InputComponent;