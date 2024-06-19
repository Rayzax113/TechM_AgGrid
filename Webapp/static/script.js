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
    "ProjectName_01",
    "Benjamin",
    "Oliver",
    "Team One",
    3,
    0,
    3,
    "2/5/2024",
    "3/5/2024",
    3,
    3,
    3,
    3,
    "2/20/2024",
    "2/27/2024",
    "3/5/2024",
    "3/6/2024",
    "3/6/2024",
    "KT Completed. In Steady State.",
    ""
  ],
  [
    "ProjectName_02",
    "Benjamin",
    "Oliver",
    "Team two",
    2,
    0,
    2,
    "02/21/2024",
    "03/28/2024",
    2,
    2,
    2,
    2,
    "03/07/2024",
    "03/21/2024",
    "03/28/2024",
    "03/29/2024",
    "03/29/2024",
    "KT Completed. In Steady State.",
    null
  ],
  [
    "ProjectName_03",
    "Serenity Panickar",
    "Noah",
    "Team Three",
    3,
    0,
    3,
    "1/29/2024",
    "3/15/2024",
    3,
    3,
    3,
    3,
    "2/16/2024",
    "3/1/2024",
    "3/29/2024",
    "4/1/2024",
    "4/1/2024",
    "KT Completed. In Steady State.",
    ""
  ],
  [
    "ProjectName_04",
    "Serenity Panickar",
    "Noah",
    "Team Four",
    1,
    1,
    0,
    "1/29/2024",
    "3/15/2024",
    1,
    1,
    1,
    1,
    "2/16/2024",
    "3/1/2024",
    "3/29/2024",
    "4/1/2024",
    "4/1/2024",
    "KT Completed. In Steady State.",
    "Incumbent disengagement date changed to 6/28 to accommodate release schedule planned to be performed by incumbent, however steady state is negotiated to begin from 5/7 for TechM."
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
