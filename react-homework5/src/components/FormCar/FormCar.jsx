import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from 'react-redux';
import { createCarThunk, setFormCar, updateCarThunk } from '../../features/car/carSlice';

const FormCar = () => {

    const { register, handleSubmit, reset, setValue } = useForm();
    const dispatch = useDispatch();

    const formCar = useSelector(state => state.carReducer.formState);

    const onSubmit = data => {
        dispatch(createCarThunk({id: 44, data}));
        reset();
    };

    const onChange = data => {
        dispatch(updateCarThunk({data}));
        reset();
        dispatch(setFormCar(null))
    };

    useEffect(() => {
        if (formCar) {
            setValue('id', `${formCar.id}`)
            setValue('model', `${formCar.model}`)
            setValue('price', `${formCar.price}`)
            setValue('year', `${formCar.year}`)
        }
    }, [formCar]);

    

    if (formCar) {
        return <form onSubmit={handleSubmit(onChange)}>
            <label>Id: <input disabled  type="text" {...register('id')}/></label>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input   type="text" {...register('year')}/></label>
            <button>UPDATE CAR</button>
        </form>
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
        <button>Save</button>
        </form>
    );
};

export default FormCar;