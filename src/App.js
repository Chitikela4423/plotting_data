import logo from './logo.svg';
import REACT,{useState} from 'react';
import Count from './plotting.js';
import * as XLSX from 'xlsx'

function App() {
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);
  // submit
  const [excelData, setExcelData]=useState(null);
  // it will contain array of objects

  // handle File
  const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      // console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        }
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else{
      setExcelData(null);
    }
  }
  //   const coordinates = [
  //   { lat: 37.7749, lng: -122.4194 },
  //   { lat: 37.7902, lng: -122.4028 },
  //   { lat: 37.7691, lng: -122.4862 },
  //   { lat: 37.7694, lng: -122.4868},
  //   { lat:37.7698,  lng: -122.4874}
  // ];
  
  return (
    <div className="container">
      {/* upload file section */}
      <div className='form'>
        <form className='form-group' autoComplete="off"
        // ()=> handleSubmit()
        onSubmit={handleSubmit}>
          <label><h5>Upload Excel file</h5></label>
          <br></br>
          <input type='file' className='form-control'
          // ()=> handleFile()
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>Submit</button>
        </form>
      </div>

      <br></br>
      <hr></hr>
      {console.log(excelData)}
      {excelData == null&&setExcelData([])}    
      {console.log(excelData)}
      
      
      <Count ExcelData= {excelData} />

      {/* view file section */}
      {/* <h5>View Excel file</h5>
      <div className='viewer'>
        {excelData===null&&<>No file selected</>}
        {excelData!==null&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
              <tr>
                  <th scope='col'>LocationName</th>
                  <th scope='col'>Latitude</th>
                  <th scope='col'>Longitude</th>
                  <th scope='col'>Volume</th>
                  <th scope='col'>LocationType</th>
                  <th scope='col'>Calc_vol</th>
                  <th scope='col'>Cluster</th>   
                  <th scope='col'>Latitude_COG</th> 
                  <th scope='col'>Longitude_COG</th> 
                  <th scope='col'>Volume_COG</th> 
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData}/>
              </tbody>
            </table>            
          </div>
        )}       
      </div> */}

    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

// {
//   excelData.map((iterator)=>{
//     const {Latitude} = iterator;
//     const {Longitude}= iterator;
//     const {Latitude_COG}= iterator;
//     const {Longitude_COG}= iterator;
//     const {Volume}= iterator;
//     var cordi= {Latitude, Longitude}
//     var cordi_1= {Latitude, Longitude,Latitude_COG,Longitude_COG};
//     var cordi_2= {Latitude_COG,Longitude_COG};
//     var cordi_3= {Volume,cordi,cordi_1,cordi_2};
//     rand= [...rand,cordi];
//     temp= [...temp,cordi_3];
//   })
//   }