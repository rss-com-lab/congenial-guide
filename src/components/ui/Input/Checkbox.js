import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, onChange, checked }) => (
    <input type='checkbox' name={name} checked={checked} onChange={onChange} />
);

Checkbox.defaultProps = {
    checked: false,
};

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
