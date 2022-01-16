import React from 'react';
import DeleteForm from '../DeleteForm/DeleteForm';
import Form from '../Form/Form';

import s from './form.component.wrapper.module.css';

const FormComponentWrapper = ({changerHandler, formName ,inputForm}) => {

    if (!inputForm) {
        return (
            <div className={s.formWrapper}>
                <Form formName={formName}  changerHandler={changerHandler} />
                <h2 >{formName}</h2>
            </div>
        );
    }

    return (
            <div className={s.formWrapper}>
                <DeleteForm  inputForm={inputForm} changerHandler={changerHandler} />
                <h2>{inputForm}</h2>
            </div>
    )
};

export default FormComponentWrapper;