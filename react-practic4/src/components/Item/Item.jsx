import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../../features/tasks/tasksSlice';

const Item = ({task}) => {

    const dispatch = useDispatch();
    const setChecked = () => {
        dispatch(doneTask(task.id));
    }

    return (
        <div  key={task.id} >
            <li className={task.done ? 'line': ''} >{task.text}</li>
            <button onClick={() => dispatch(deleteTask({id: task.id}))}>DELETE</button>
            <input 
              defaultChecked={task.done}
              onChange={() => setChecked()} 
              type="checkbox" name="check" />
              <hr />
        </div>
    );
};

export default Item;