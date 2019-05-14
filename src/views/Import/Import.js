import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import ImportEmployer from './content/ImportEmployer';
import ImportEmployerSick from './content/ImportSickLists';
import ImportEmployerLayOff from './content/ImportEmployerLayOff';

class Import extends Component {
    render() {
        return (
            <Fragment>
                <ImportEmployer />
                <ImportEmployerLayOff />
                <ImportEmployerSick />
            </Fragment>

        );
    }
}

const mapStateToProps = null;
const mapDispatchToProps = { };
const connectImport = connect(mapStateToProps, mapDispatchToProps)(Import);
export default connectImport;
