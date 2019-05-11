import React from 'react';
import PropTypes from 'prop-types';

const Label = props => <label htmlFor={props.htmlFor}> {props.children} </label>;

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};

export default Label;
