import xlsx from 'xlsx-populate';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';

import Label from '../../../components/ui/Label';
import { Input } from '../../../components/ui/Input';
import { ButtonSuccess } from '../../../components/ui/Button';
import { Form, FormItemWrapper } from '../../../components/form';

import EmployerSickModel from '../../../core/entities/EmployerSickModel';
import EmployerSickFileTitileList from '../../../core/variables/EmployerSickFileTitleList';
import { EmployerSickAllowFileExtension, EmployerSickAllowFileMimeTypes } from '../../../core/variables/EmployerSickFileExtensionsList';

import { setEmployersSick, removeEmployersSick } from '../../../store/actions/creators/employersSick';

class ImportSickLists extends Component {
    static propTypes = {
        employersSick: PropTypes.object.isRequired,
        setEmployersSick: PropTypes.func.isRequired,
        removeEmployersSick: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            errors: [],
            loading: false,
        };
    }

    validateFileType(type) {
        return EmployerSickAllowFileMimeTypes().includes(type);
    }

    validateFileTitles(sheetTitlesList) {
        return _.difference(EmployerSickFileTitileList, sheetTitlesList);
    }

    parseSheetData(sheetData) {
        const result = sheetData.reduce((acum, rowData, rowIndex) => {
            if (rowIndex === 0) return acum;
            const employer = EmployerSickModel.fromFile(...rowData);
            acum.push(employer);
            return acum;
        }, []);
        return result;
    }

    onChangeFile = (evt) => {
        const fileObject = evt.target.files[0];
        const fileValidationResult = this.validateFileType(fileObject.type);
        if (fileValidationResult) {
            this.setState({ selectedFile: fileObject });
        } else {
            toastr.error(`Current file has incorect file format. List of correct format: ${EmployerSickAllowFileExtension.toString()}`);
        }
    }

    onParseFile = (evt) => {
        evt.preventDefault();
        if (!this.state.selectedFile) {
            toastr.error('Please, select file before parsing');
            return;
        }
        this.setState({ loading: true });
        xlsx.fromDataAsync(this.state.selectedFile)
            .then((worbooks) => {
                const workSheet = worbooks.sheet(0);

                const sheetData = workSheet.usedRange().value();
                const sheetTitles = sheetData[0];

                const missingTitles = this.validateFileTitles(sheetTitles);
                if (missingTitles.length !== 0) {
                    toastr.error(`Sheet doesn't include following titles: ${missingTitles.toString()}`);
                    return;
                }

                const employers = this.parseSheetData(sheetData);
                this.props.setEmployersSick(employers);
                toastr.success('File successfully reading');
            })
            .catch(() => {
                const errorMessage = 'Something wrong with file';
                toastr.error(errorMessage);
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        const formSettings = {
            onSubmit: this.onParseFile,
        };
        const inputFileSettings = {
            type: 'file',
            onChange: this.onChangeFile,
            placeholder: 'Attach file of employers sick',
            name: 'file',
        };
        return (
            <Form {...formSettings} >
                { this.state.loading
                    ? (<div className='middle'>
                        <FontAwesomeIcon icon={faSpinner} size='2x' spin />
                    </div>)
                    : (<Fragment>
                        <FormItemWrapper errors={this.state.errors}>
                            <Label htmlFor='file'>
                                Employers Sick file
                            </Label>
                            <Input {...inputFileSettings} />
                        </FormItemWrapper>
                        <FormItemWrapper>
                            <ButtonSuccess>Parse</ButtonSuccess>
                        </FormItemWrapper>
                    </Fragment>)
                }
            </Form>
        );
    }
}

const mapStateToProps = ({ employersSick }) => ({ employersSick });
const mapDispatchToProps = { setEmployersSick, removeEmployersSick };
const connectImportSickLists = connect(mapStateToProps, mapDispatchToProps)(ImportSickLists);
export default connectImportSickLists;
