//table
let varData = data;

//have d3 select the table body
let tbody = d3.select('tbody');

varData.forEach(addRow);

function addRow(item){
    let row = tbody.append ('tr');
    let result = Object.values(item);
    result.forEach(data=>{
        row.append('td').text(data)
    })
}

//select button
let button = d3.select("#filter-btn");

//create the event handlers
button.on("click", runEnter);

//complete the event handler function for the form
function runEnter()  {

//keep the page from refreshing time after time when the enter key is hit
d3.event.preventDefault();
tbody.html('')

//select the input element and get the row HTML 
let inputElement = d3.select("#datetime");

//get the value property of the input element
let inputValue = inputElement.property('value');

//console log and input value 2
console.log(varData);

//form input to filter the data 
let filteredData = varData.filter(sighting => sighting.datetime === inputValue );
filteredData.forEach(addRow)
console.log(filteredData);
};