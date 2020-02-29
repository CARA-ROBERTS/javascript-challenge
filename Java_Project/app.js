var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(ufoData) {
   console.log(ufoData);
   var row = tbody.append("tr");
   Object.entries(ufoData).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
 });

 // Select the button
var button = d3.select("#button");

button.on("click", function() {

  var inputElement = d3.select("#datetime.form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);


  d3.select("tbody").text(inputValue);

  var filteredData = data.filter( potato_object => {
      return potato_object.Date === inputValue;
  });

  console.log(filteredData);

});

