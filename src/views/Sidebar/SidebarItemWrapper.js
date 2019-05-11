import React from 'react';
import PropTypes from 'prop-types';

const sidebarItemWrapper = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
);

sidebarItemWrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
};

sidebarItemWrapper.defaultProps = {
    className: 'sidebar-wrapper',
};

export default sidebarItemWrapper;
