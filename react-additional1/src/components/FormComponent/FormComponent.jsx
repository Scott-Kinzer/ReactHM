import React from 'react';
import DeleteForm from '../DeleteForm/DeleteForm';
import Form from '../Form/Form';

const FormComponentWrapper = ({changerHandler, formName ,inputForm}) => {

   
    if (!inputForm) {
        return (
            <div>
                <Form formName={formName}  changerHandler={changerHandler} />
            </div>
        );
    }

    return (
            <div>
                <DeleteForm changerHandler={changerHandler} />
            </div>
    )
};

export default FormComponentWrapper;