import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// TODO: stateless component
class Button extends PureComponent {
    static propTypes = {
        children: PropTypes.any.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func,
        readOnly: PropTypes.bool,
        type: PropTypes.string,
    }

    static defaultProps = {
        className: 'button-empty',
        readOnly: false,
        type: 'button',
    }

    render() {
        const {
            className, onClick, readOnly, type,
        } = this.props;
        const buttonSettings = {
            className,
            onClick,
            readOnly,
            type,
        };
        return (
            <button {...buttonSettings}>{this.props.children}</button>
        );
    }
}

export default Button;
