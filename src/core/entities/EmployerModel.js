import xlsx from 'xlsx-populate';

export default class EmployerModel {
    constructor(
        id,
        fio,
        tabelNumber,
        sex,
        birthdayDate,
        disabilityGroup,
        startDate,
        title,
        titleCode,
        workPlace,
    ) {
        this.id = id;
        this.fio = fio;
        this.tabelNumber = tabelNumber;
        this.sex = sex;
        this.birthdayDate = birthdayDate;
        this.disabilityGroup = disabilityGroup;
        this.startDate = startDate;
        this.title = title;
        this.titleCode = titleCode;
        this.workPlace = workPlace;
    }

    convert() {
        this.startDate = xlsx.numberToDate(this.startDate);
        this.birthdayDate = xlsx.numberToDate(this.birthdayDate);
    }

    static fromFile(...args) {
        const employerModel = new EmployerModel(...args);
        employerModel.convert();
        return employerModel;
    }
}
