import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import { Input } from '../ui/Input';

const securityFields = {
    token: {
        idx: uuidv4(),
        className: 'form-hidden',
        type: 'hidden',
        name: 'token',
        value: uuidv4(),
    },
    provider: {
        idx: uuidv4(),
        className: 'form-hidden',
        type: 'hidden',
        name: 'provider',
        value: 'local',
    },
};

class Form extends PureComponent {
    static propTypes = {
        children: PropTypes.any.isRequired,
        className: PropTypes.string,
        onChange: PropTypes.func,
        onSubmit: PropTypes.func.isRequired,
        security: PropTypes.bool,
    };

    static defaultProps = {
        security: true,
        className: 'form-base',
    };

    serialize = () => {
        const formData = new FormData(this.form);
        const result = {};
        formData.forEach((key, value) => {
            result[value] = key;
        });
        return result;
    }

    render() {
        const formSettings = {
            className: this.props.className,
            onChange: this.props.onChange,
            onSubmit: this.props.onSubmit,
            ref: (form) => { this.form = form; },
        };
        const securityElements = this.props.security && (
            <Fragment>
                <Input {...securityFields.token} />
                <Input {...securityFields.provider} />
            </Fragment>
        );
        return (
            <form {...formSettings}>
                {securityElements}
                {this.props.children}
            </form>
        );
    }
}

export default Form;
