import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';

class MenuList extends PureComponent {
    static propTypes = {
        items: PropTypes.array.isRequired,
        className: PropTypes.string,
    };

    static defaultProps = {
        items: [],
        className: 'sidebar-menu',
    };

    render() {
        const { className, items } = this.props;
        const clearItems = items.filter(x => x.visibility || typeof x.visibility === 'undefined');
        const readyItems = clearItems.map(item => (
            <li key={item.idx}>
                <MenuItem
                    uri={item.uri}
                    icon={item.icon}
                    onClick={item.onClick}
                    search={item.search}
                    className={item.className}
                >
                    {item.content}
                </MenuItem>
            </li>
        ));

        return (
            <nav className={className}>
                <ul>
                    { readyItems }
                </ul>
            </nav>
        );
    }
}

export default MenuList;
