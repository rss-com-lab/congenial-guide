import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

class Home extends PureComponent {
    static propTypes = {
        employers: PropTypes.object.isRequired,
        employersSick: PropTypes.object.isRequired,
    };

    componentDidMount() { }

    render() {
        const sicksForEmployers = (this.props.employersSick.employers.length
            / this.props.employers.employers.length) * 100;
        const sumOfSickDays = this.props.employersSick.employers.reduce((acum, sick) => {
            const diffTime = Math.abs(sick.endDate.getTime() - sick.startDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return acum += diffDays;
        }, 0);
        const sicksCountForEmployers = (sumOfSickDays
            / this.props.employers.employers.length) * 100;
        return (
            <div>
                <div>Sicks for 100 employers: { Math.round(sicksForEmployers) }</div>
                <div>Count of sicks days for 100 employers:
                    { Math.round(sicksCountForEmployers) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ employers, employersSick }) => ({ employers, employersSick });
const mapDispatchToProps = { };
const connectHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export default connectHome;
