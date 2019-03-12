import React, { Component } from "react";
import SheetJSApp from "../dragAndDrop";
import {
  SimpleLineChart,
  StackedAreaChart,
  SimpleRadialBarChart,
  SimpleBarChart
} from "../chart";

export default class App extends Component {
  state = {
    workerWorkbook: null,
    illnessWorkbook: null
  };

  updatePeopleState = sheet => {
    this.setState({ workerWorkbook: sheet });
    // console.log(this.state);
    
  };

  updateIllState = sheet => {
    this.setState({ illnessWorkbook: sheet });
    // console.log(this.state);
    
  };

  processingWorkerbook = () => {
    const { workerWorkbook } = this.state;

    const fieldMapping = {
      name: "B",
      tabNumber: "C",
      startDate: "G"
    };

    const getWorker = (sheet, currentRow) => {
      const worker = {
        name: sheet[fieldMapping.name + currentRow].v,
        tabNumber: sheet[fieldMapping.tabNumber + currentRow].v,
        startDate: sheet[fieldMapping.startDate + currentRow].w
      };

      return worker;
    };

    const getWorkers = sheet => {
      const rows = [2, 3, 4, 5];

      return rows.map(row => {
        return getWorker(sheet, row);
      });
    };

    // const worker = {
    //   name: "Иванова Ольга Пеонидовна",
    //   tabNumber: "1519",
    //   startDate: "10/11/1993"
    // };
    const sheetet = workerWorkbook.Sheets[workerWorkbook.SheetNames[0]];
    // console.log('values', workerListWorkboox.Sheets['Sheet1']['B2']['v'])
    const workers = getWorkers(sheetet);
    console.log("workers", workers);

    return workers;
  };

  processingIllnessWorkbook = () => {
    const { illnessWorkbook } = this.state;
    const getRecord = (sheet, currentRow) => {
      const fieldMapping = {
        name: "B",
        tabNumber: "D",
        begin: "K",
        end: "L"
      };

      const record = {
        name: sheet[fieldMapping.name + currentRow].v,
        tabNumber: sheet[fieldMapping.tabNumber + currentRow].v,
        begin: sheet[fieldMapping.begin + currentRow].w,
        end: sheet[fieldMapping.end + currentRow].w
      };

      return record;
    };

    const getRecords = sheet => {
      const rows = [2, 3, 4, 5, 6, 7];

      return rows.map(row => {
        return getRecord(sheet, row);
      });
    };
    const records = getRecords(
      illnessWorkbook.Sheets[illnessWorkbook.SheetNames[0]]
    );
    console.log("records", records);
    return records;
  };

  processingData = () => {
    console.log("processing");
    const workers = this.processingWorkerbook();
    const records = this.processingIllnessWorkbook();
    const results = records
      .map(record => {
        // console.log("record", record);

        const worker = workers.find(w => w.tabNumber === record.tabNumber);

        if (!worker) return null;

        return {
          name: worker.name,
          startDate: worker.startDate,
          illBegin: record.begin,
          illEnd: record.end
        };
      })
      .filter(r => r);

    console.log("results", results);
  };

  render() {
    return (
      <div className="app">
        <SheetJSApp stateUpdateFunc={this.updatePeopleState} />
        <SheetJSApp stateUpdateFunc={this.updateIllState} />
        <ProcessingButton onClick={this.processingData} />
        <div>SimpleLineChart</div>
        <SimpleLineChart />
        <div>StackedAreaChart</div>
        <StackedAreaChart />
        <div>SimpleRadialBarChart</div>
        <SimpleRadialBarChart />
        <div>SimpleBarChart</div>
        <SimpleBarChart />
      </div>
    );
  }
}

const ProcessingButton = ({ onClick }) => {
  return <button onClick={onClick}>Get Processing Data</button>;
};
