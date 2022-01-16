import React from 'react';
import { useForm } from "react-hook-form";


const Form = ({formName, changerHandler}) => {

    const { register, handleSubmit } = useForm();


    const formSubmit = ({id, model, price, year}) => {

        changerHandler({
            id, model, price, year
        });
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <div>{formName}</div>
            <input defaultValue="" {...register("id")} placeholder='id' type="text" />
            <input defaultValue="" {...register("model")} placeholder='model' type="text" />
            <input defaultValue="" {...register("price")} placeholder='price' type="text" />
            <input defaultValue="" {...register("year")} placeholder='year' type="text" />

            <input type="submit" value="SEND CAR" />
        </form>
    );
};

export default Form;