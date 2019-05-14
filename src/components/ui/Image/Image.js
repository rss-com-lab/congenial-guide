import React from 'react';
import PropTypes from 'prop-types';

const Image = props => (
    <img
        src={props.path}
        alt={props.title}
        title={props.title}
        width={props.width}
        height={props.height}
        className={props.className}
    />);

Image.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

Image.defaultProps = {
    width: 'auto',
    height: 'auto',
};

export default Image;
