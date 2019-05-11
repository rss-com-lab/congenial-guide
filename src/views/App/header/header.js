import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Header extends Component {
    static propTypes = {
        header: PropTypes.object.isRequired,
    };

    render() {
        return (
            <header className='header'>
                <div className='header-title'>
                    <h1>{this.props.header && this.props.header.title}</h1>
                </div>
            </header>
        );
    }
}

const mapStateToProps = ({ header }) => ({ header });
const mapDispatchToProps = { };
const connectHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default connectHeader;
