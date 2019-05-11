import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import Sidebar from './Sidebar';
import MenuList from '../../components/menu';
import SidebarItemWrapper from './SidebarItemWrapper';

class LeftSidebar extends PureComponent {
    static propTypes = { };

    componentDidMount() { }

    getMenuList = () => [
        {
            idx: 1,
            uri: '/',
            icon: '',
            content: 'Home',
            visibility: true,
            // onClick: (e) => {
            //     e.preventDefault();
            // },
        },
        {
            idx: 0,
            uri: '/import',
            icon: '',
            content: 'Data imports',
            visibility: true,
        },
    ];

    render() {
        const open = true;

        const menuList = this.getMenuList();
        const menuComponent = <MenuList className='header-nav' items={menuList} />;

        return (
            <Sidebar open={open} className='sidebar-content left-sidebar'>
                <SidebarItemWrapper className='sidebar-header'>
                    Main menu
                </SidebarItemWrapper>
                <SidebarItemWrapper className='sidebar-main'>
                    {menuComponent}
                </SidebarItemWrapper>
                <SidebarItemWrapper className='sidebar-footer'>
                    Footer
                </SidebarItemWrapper>
            </Sidebar>
        );
    }
}

const mapStateToProps = null;
const mapDispatchToProps = { };
const connectLeftSidebar = connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);
export default connectLeftSidebar;
