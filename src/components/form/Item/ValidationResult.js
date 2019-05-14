import React from 'react';
import PropTypes from 'prop-types';

const validationResult = ({ errors }) => (
    <div className='validation-result'>
        {
            errors.map((value, index) => <div key={index} className='validation-error'>{value}</div>)
        }
    </div>
);

validationResult.defaultProps = {
    errors: [],
};

validationResult.propTypes = {
    errors: PropTypes.array,
};

export default validationResult;
