// from data.js
var tableData = data;
// used to select the first element that matches the specified selector string.
let tbody = d3.select("tbody");

function buildTable(data){

    tbody.html("");
    // loop through the array
    data.forEach((dataRow) => {
        // Create a Row dynamically inside the table from form data 
        let row = tbody.append("tr");
        // returns an array of values.  
        Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    })
}

function handleClick(){
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on('click', handleClick);

buildTable(tableData);