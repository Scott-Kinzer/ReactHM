import React, {useRef} from 'react';

const FormComponent = ({addAnimal, name}) => {

    const ref = useRef();

    const addItem = () => {
        console.log(ref.current.value);
        addAnimal(ref.current.value);
        ref.current.value = "";
    }

    return (
        <div>
            <input placeholder={"ADD" + name} ref={ref} type="text"/>
            <button onClick={addItem}>ADD {name}</button>
        </div>
    );
};

export default FormComponent;
