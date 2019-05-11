import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closePopUp } from '../../store/actions/creators/popUp';

class PopUp extends Component {
    static propTypes = {
        closePopUp: PropTypes.func.isRequired,
        popup: PropTypes.any.isRequired,
    }

    static defaultProps = {
        popup: {
            open: false,
        },
    }

    closeHandler = () => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.props.closePopUp();
            });
        });
    };

    closeButton = () => this.closeHandler();

    closeOutside = (e) => {
        e.preventDefault();
    };

    render() {
        const { popup } = this.props;
        const className = `popup ${!popup.open && 'close'}`;
        return (
            <div
                className={className}
                ref={(elem) => { this.popup = elem; }}
            >
                <div className='header'>
                    <p>{popup.title}</p>
                </div>
                <div className='content'>
                    {popup.content}
                </div>
                <div className='footer'>
                    <button onClick={this.closeButton}>Close</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ popup }) => ({ popup });
const mapDispatchToProps = { closePopUp };
const connectPopUp = connect(mapStateToProps, mapDispatchToProps)(PopUp);
export default connectPopUp;
