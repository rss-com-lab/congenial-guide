import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const {
        name, value, placeholder, type, readOnly, required, onChange,
    } = props;
    const inputSetting = {
        name,
        value,
        placeholder,
        type,
        readOnly,
        required,
        onChange,
    };
    return (
        <input {...inputSetting} />
    );
};

Input.defaultProps = {
    readOnly: false,
    required: false,
    type: 'text',
};
Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Input;
