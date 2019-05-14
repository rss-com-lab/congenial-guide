import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../ui/Label';
import ValidationResult from './ValidationResult';

const fromItemWrapper = (props) => {
    const {
        label, errors, children, className,
    } = props;
    const hasError = errors.length !== 0;
    return (
        <div className={className + (hasError ? ' error' : '')}>
            { label && <Label htmlFor={label.name}> {label.content} </Label> }
            { children }
            { hasError && <ValidationResult errors={errors} /> }
        </div>
    );
};

fromItemWrapper.propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    errors: PropTypes.array,
    children: PropTypes.any.isRequired,
};

fromItemWrapper.defaultProps = {
    className: 'form-item',
    label: false,
    errors: [],
};

export default fromItemWrapper;
