import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import SidebarItemWrapper from './SidebarItemWrapper';

const rightSidebar = (props) => {
    const {
        open, title, content, footer,
    } = props.sidebar.right;
    return (
        <Sidebar open={open} className='sidebar-content right-sidebar'>
            <SidebarItemWrapper className='sidebar-header'>
                {title}
            </SidebarItemWrapper>
            <SidebarItemWrapper className='sidebar-main'>
                {content}
            </SidebarItemWrapper>
            { footer && <SidebarItemWrapper className='sidebar-footer'>
                {footer}
            </SidebarItemWrapper> }
        </Sidebar>
    );
};

rightSidebar.propTypes = {
    sidebar: PropTypes.object.isRequired,
};

const mapStateToProps = ({ sidebar }) => ({ sidebar });
const mapDispatchToProps = null;
const connectRightSidebar = connect(mapStateToProps, mapDispatchToProps)(rightSidebar);
export default connectRightSidebar;
