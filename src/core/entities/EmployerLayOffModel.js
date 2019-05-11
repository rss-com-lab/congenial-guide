import xlsx from 'xlsx-populate';

export default class EmployerLayOffModel {
    constructor(
        id,
        fio,
        tabelNumber,
        sex,
        birthdayDate,
        disabilityGroup,
        startDate,
        endDate,
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
        this.endDate = endDate;
        this.title = title;
        this.titleCode = titleCode;
        this.workPlace = workPlace;
    }

    convert() {
        this.endDate = xlsx.numberToDate(this.endDate);
        this.startDate = xlsx.numberToDate(this.startDate);
        this.birthdayDate = xlsx.numberToDate(this.birthdayDate);
    }

    static fromFile(...args) {
        const employerModel = new EmployerLayOffModel(...args);
        employerModel.convert();
        return employerModel;
    }
}
