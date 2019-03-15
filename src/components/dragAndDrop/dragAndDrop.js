import React, { Component } from "react";
import XLSX from "xlsx";


export default class SheetJSApp extends Component {
  
  state = {
    data: [] /* Array of Arrays e.g. [["a","b"],[1,2]] */,
    cols: [] /* Array of column objects e.g. { name: "C", K: 2 } */
  };

  validationByMagicNumbers = (file) => {
    /* Boilerplate to set up FileReader */
    return new Promise((resolve) =>{
      const reader = new FileReader();
      reader.onload = e => {
        /* Parse data */
        const bstr = e.target.result;
        const int32View = new Uint8Array(bstr);
        resolve(int32View);
    
      };
      reader.readAsArrayBuffer(file);
    })
  }

  handleFile = (file /*:File*/) => {
    /* Boilerplate to set up FileReader */
    const result = this.validationByMagicNumbers(file);
    console.log(result);
    result.then(int32View => {
      if (
        int32View.length > 4 &&
        int32View[0] === 0x50 &&
        int32View[1] === 0x4b &&
        int32View[2] === 0x3 &&
        int32View[3] === 0x4
      ) {
        const reader = new FileReader();

        const rABS = !!reader.readAsBinaryString;

        reader.onload = e => {
          /* Parse data */

          const bstr = e.target.result;
    
          const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });

          // console.log(wb);
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          // console.log(wsname);
          const ws = wb.Sheets[wsname];
          // console.log(ws);
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
          /* Update state */
          this.props.stateUpdateFunc(wb);
          this.setState({ data: data, cols: make_cols(ws["!ref"]) });
          // console.log(this.state.data);

        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
      } else {
        console.log("type of file is not xlsx");
      }
    });
  }
  exportFile = () => {
    /* convert state to workbook */
    const ws = XLSX.utils.aoa_to_sheet(this.state.data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, "sheetjs.xlsx");
  }
  render() {

    const {data, cols} = this.state;

    return (
      <DragDropFile handleFile={this.handleFile}>
        <div className="row">
          <div className="col-xs-12">
            <DataInput handleFile={this.handleFile} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              disabled={!this.state.data.length}
              className="btn btn-success"
              onClick={this.exportFile}
            >
              Export
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <OutTable data={data} cols={cols} />
          </div>
        </div>
      </DragDropFile>
    );
  }
}



/* -------------------------------------------------------------------------- */

/*
  Simple HTML5 file drag-and-drop wrapper
  usage: <DragDropFile handleFile={handleFile}>...</DragDropFile>
    handleFile(file:File):void;
*/
class DragDropFile extends Component {
 
  suppress = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    
    // const files = evt.target;
    // console.log(files);
    
    
  }
  onDrop = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    console.log('drop');
    const files = evt.dataTransfer.files;
    console.log(files);
    const twoMB = 2e6;
    if (files && files[0] && files[0].size >= twoMB){
      console.log("big size of file");
      return;
    } else if (files && files[0] &&!files[0].type && files[0].size % 4096 === 0) {
      console.log('droped file is folder');
      return;
    } else this.props.handleFile(files[0]);
    
  }
  render() {
    return (
      <div className='drop-zone'
        onDrop={this.onDrop}
        onDragEnter={this.suppress}
        onDragOver={this.suppress}>
        {this.props.children}
      </div>
    );
  }
}

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
class DataInput extends Component {
  
  handleChange = (e) => {
    const files = e.target.files;
    
    if (files && files[0]) this.props.handleFile(files[0]);
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="file">Spreadsheet</label>
          <input
            type="file"
            className="form-control"
            id="file"
            accept={SheetJSFT}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
class OutTable extends Component {
  
  render() {

    const {data, cols} = this.props; 

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {cols.map(c => (
                <th key={c.key}>{c.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i}>
                {cols.map(c => (
                  <td key={c.key}>{r[c.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

/* list of supported file types */
const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm"
]
  .map(function (x) {
    return "." + x;
  })
  .join(",");

/* generate an array of column objects */
const make_cols = refstr => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};
















// export default class DragAndDrop extends Component {
//   state = {
//     files: []
//   };

//   onDrop = (files) => {
//     // console.log(acceptedFiles);
//     // console.log(rejectedFiles);
//     // console.log(files[0].path);
    
//     // console.log(this.state.files);
//     // this.setState((state) =>{
//     //   state.files.push(files[0]);
//     // });
//     // var name = files[0].name;

    
//   };

//   render() {
//     const baseStyle = {
//       width: 200,
//       height: 200,
//       borderWidth: 2,
//       borderColor: "#666",
//       borderStyle: "dashed",
//       borderRadius: 5
//     };
//     const activeStyle = {
//       borderStyle: "solid",
//       borderColor: "#6c6",
//       backgroundColor: "#eee"
//     };
//     const rejectStyle = {
//       borderStyle: "solid",
//       borderColor: "#c66",
//       backgroundColor: "#eee"
//     };
//     return (
//       <div>
//         <h2>Drop And Crop</h2>
//         <Dropzone onDrop={this.onDrop}>
//           {({
//             getRootProps,
//             getInputProps,
//             isDragActive,
//             isDragAccept,
//             isDragReject,
//             acceptedFiles,
//             rejectedFiles
//           }) => {
//             let styles = { ...baseStyle };
//             styles = isDragActive ? { ...styles, ...activeStyle } : styles;
//             styles = isDragReject ? { ...styles, ...rejectStyle } : styles;

//             return (
//               <div {...getRootProps()} style={styles}>
//                 <input {...getInputProps()} />
//                 <div>{isDragAccept ? "Drop" : "Drag"} files here...</div>
//                 {isDragReject && <div>Unsupported file type...</div>}
//               </div>
//             );
//           }}
//         </Dropzone>
//       </div>
//     );
//   }
// }
