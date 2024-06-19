// Define your column definitions based on the JSON structure
const columnDefs = [
  { headerName: "Key ID's", field: "0" },
  { headerName: "Director", field: "1" },
  { headerName: "ADM", field: "2" },
  { headerName: "Team Name", field: "3" },
  { headerName: "Total", field: "4" },
  { headerName: "Onsite", field: "5" },
  { headerName: "Offshore", field: "6" },
  { headerName: "KT Start Date", field: "7" },
  { headerName: "KT End Date", field: "8" },
  { headerName: "CW ID", field: "9" },
  { headerName: "ADID", field: "10" },
  { headerName: "RSA", field: "11" },
  { headerName: "Citrix/Laptop", field: "12" },
  { headerName: "Knowledge Acquisition", field: "13" },
  { headerName: "Assisted Perform", field: "14" },
  { headerName: "Indpendent Perform", field: "15" },
  { headerName: "Steady State", field: "16" },
  { headerName: "Billing Start Date", field: "17" },
  { headerName: "Key Updates", field: "18" },
  { headerName: "Remarks", field: "19" },
  // ... Add more column definitions for the remaining data points (dates and status)
];

// Define an empty array to hold the row data from the excel sheet
const rowData = [];

// Function to read the excel sheet and populate rowData
function readExcelData(file) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = function(event) {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert worksheet data to an array of arrays (suitable for rowData)
      const excelRows = XLSX.utils.sheet_to_row_object_array(worksheet);
      rowData.push(...excelRows); // Spread operator to add each row to rowData

      console.log("Excel data loaded successfully!");
      console.log("Excel data in rowData:", rowData);

      // Get a reference to the DOM element for the grid (assuming it exists)
      const gridDiv = document.querySelector('#myGrid');

      console.log("Grid element found:", gridDiv); // Check if grid element exists

      // Create the agGrid instance using createGrid
      const gridApi = agGrid.createGrid(gridDiv, {
        columnDefs: columnDefs,
        rowData: rowData,
      });

      resolve(gridApi); // Resolve the promise with gridApi
    };

    reader.readAsArrayBuffer(file); // Read the excel file as an ArrayBuffer
  });
}

// (Optional) Add a file input element to select the excel sheet
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.xlsx'; // Accept only excel files

fileInput.onchange = function(event) {
  const selectedFile = event.target.files[0];
  if (selectedFile.name === 'Project_1.xlsx') {
    readExcelData(selectedFile)
      .then(gridApi => {
        if (gridApi) {
          gridApi.updateGridOptions({ rowData: rowData });
          console.log("Grid data after update:", gridApi.getRowData()); // Log grid data
        } else {
          console.error("Grid creation failed.");
        }
      })
      .catch(error => {
        console.error("Error reading Excel data:", error);
      });
  } else {
    console.error("Please select the file 'Project_1.xlsx'");
  }
};

document.body.appendChild(fileInput); // Add the file input element to the body