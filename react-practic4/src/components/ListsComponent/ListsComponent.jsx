import React from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Item from '../Item/Item';

const ListsComponent = () => {


     const {tasks} = useSelector(state => state.taskReducer);

     const checkCompleted = useMemo(() => tasks.filter(task => task.done).length
        ,[tasks]);
   

    return (
        <div>
            <h2>ALL: {tasks.length} </h2>
            <h2>Completed: {checkCompleted} </h2>
            
            {tasks.map(task => <Item key={task.id} task={task} />)}
        </div>
    );
};

export default ListsComponent;