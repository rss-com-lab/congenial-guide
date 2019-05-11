import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Image from '../../components/ui/Image';
import NotFoundImagePath from '../../assets/img/404.gif';

class PageNotFound extends PureComponent {
    static propTypes = {
        code: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
    };

    static defaultProps = {
        code: 404,
        message: 'The page you are looking for can\'t be found',
    }

    render() {
        const { message, code } = this.props;
        return (
            <div className='content-404'>
                <div>
                    <h4>{code}</h4>
                    <h3>{message}</h3>
                    <h6><a href='/'>Return to main page</a></h6>
                </div>
                <Image path={NotFoundImagePath} width='50%' title={message} />
            </div>
        );
    }
}

export default PageNotFound;
