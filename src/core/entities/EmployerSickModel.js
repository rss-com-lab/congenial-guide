import xlsx from 'xlsx-populate';

export default class EmployerSickModel {
    constructor(
        id,
        fio,
        sex,
        tabelNumber,
        age,
        title,
        titleCode,
        workPlace,
        vn,
        mkb,
        startDate,
        endDate,
    ) {
        this.id = id;
        this.fio = fio;
        this.sex = sex;
        this.tabelNumber = tabelNumber;
        this.age = age;
        this.title = title;
        this.titleCode = titleCode;
        this.workPlace = workPlace;
        this.vn = vn;
        this.mkb = mkb;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    convert() {
        this.endDate = xlsx.numberToDate(this.endDate);
        this.startDate = xlsx.numberToDate(this.startDate);
    }

    static fromFile(...args) {
        const employerModel = new EmployerSickModel(...args);
        employerModel.convert();
        return employerModel;
    }
}
