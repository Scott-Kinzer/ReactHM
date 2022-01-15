import React from 'react';
import DeleteForm from '../DeleteForm/DeleteForm';
import Form from '../Form/Form';

const FormComponentWrapper = ({changerHandler, inputForm}) => {

   
    if (!inputForm) {
        return (
            <div>
                <Form changerHandler />
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