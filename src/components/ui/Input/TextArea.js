import React from 'react';
import PropTypes from 'prop-types';

const textArea = (props) => {
    const {
        value, name, rows, cols, placeholder,
    } = props;

    const settings = {
        name,
        rows,
        cols,
        placeholder,
    };
    return (
        <textarea {...settings} >{value}</textarea>
    );
};

textArea.propTypes = {
    name: PropTypes.string.isRequired,
    rows: PropTypes.number,
    cols: PropTypes.number,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

textArea.defaulProps = {
    rows: 5,
    cols: 45,
};

export default textArea;
