import React from 'react';
import { useForm } from "react-hook-form";

import form from './form.module.css';

const Form = ({formName, changerHandler}) => {

    const { register, handleSubmit } = useForm();

    const formSubmit = ({id, model, price, year}) => {

        changerHandler({
            id, model, price, year
        });
    }

    const [firstWord, ] = formName.split(" ");

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <input defaultValue="" {...register("id")} placeholder='id' type="text" />
            <input defaultValue="" {...register("model")} placeholder='model' type="text" />
            <input defaultValue="" {...register("price")} placeholder='price' type="text" />
            <input defaultValue="" {...register("year")} placeholder='year' type="text" />

            <input type="submit" value={firstWord} />
        </form>
    );
};

export default Form;