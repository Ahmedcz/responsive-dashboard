import React from 'react';

interface FormFieldProps {
    label: string;
    type: string;
    placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({label, type, placeholder}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} placeholder={placeholder}  className="form-control" />
        </div>
    );
};

export default FormField;

