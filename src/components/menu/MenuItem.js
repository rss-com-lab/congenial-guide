import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MenuItem extends PureComponent {
    static propTypes = {
        uri: PropTypes.string.isRequired,
        icon: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.node,
        ]),
        search: PropTypes.string,
        onClick: PropTypes.func,
        children: PropTypes.any.isRequired,
        className: PropTypes.string,

    };

    render() {
        const { icon, className } = this.props;
        const linkSettings = {
            onClick: this.props.onClick,
            to: {
                pathname: this.props.uri,
                search: this.props.search,
            },
        };
        return (
            <div className={className}>
                { icon && <span>{icon}</span> }
                <Link {...linkSettings}>{this.props.children}</Link>
            </div>
        );
    }
}

export default MenuItem;
