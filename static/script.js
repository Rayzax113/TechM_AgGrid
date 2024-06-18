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

// Define your row data from the JSON array
const rowData = [
  // Assuming your JSON data is in a variable named "jsonData"
  jsonData =  [
    "ProjectName_02",
    "Benjamin",
    "Oliver",
    "Team two",
    2,
    0,
    2,
    "Wed, 21 Feb 2024 00:00:00 GMT",
    "Thu, 28 Mar 2024 00:00:00 GMT",
    2,
    2,
    2,
    2,
    "Thu, 07 Mar 2024 00:00:00 GMT",
    "Thu, 21 Mar 2024 00:00:00 GMT",
    "Thu, 28 Mar 2024 00:00:00 GMT",
    "Fri, 29 Mar 2024 00:00:00 GMT",
    "Fri, 29 Mar 2024 00:00:00 GMT",
    "KT Completed. In Steady State.",
    null
  ]
];

// Get a reference to the DOM element for the grid
const gridDiv = document.querySelector('#myGrid');

// Create the agGrid instance
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
};

const grid = new agGrid.Grid(gridDiv, gridOptions);
