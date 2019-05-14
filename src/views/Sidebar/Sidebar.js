import React from 'react';
import PropTypes from 'prop-types';

const sidebar = (props) => {
    const {
        open, onClick, className, closeClassName, openClassName,
    } = props;
    const sidebarSettings = {
        onClick,
        className: `${className} ${open ? openClassName : closeClassName}`,
    };
    return (
        <aside {...sidebarSettings}>
            {props.children}
        </aside>
    );
};

sidebar.propTypes = {
    children: PropTypes.any.isRequired,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    openClassName: PropTypes.string,
    closeClassName: PropTypes.string,
};
sidebar.defaultProps = {
    open: true,
    className: 'sidebar-content',
    openClassName: 'sidebar-open',
    closeClassName: 'sidebar-close',
};

export default sidebar;
