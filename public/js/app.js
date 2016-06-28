$(document).ready(function(){
var container = $('.container');
var numOfRows = 10;
var numOfCols = 10;

initGrid();
addClickHandlers();



function initGrid(){
  for(var i = 0; i < numOfRows; i += 1){
    var row = $('<div></div>'); //creates a new element in your HTML
    row.addClass('row');
    for(var j = 0; j < numOfCols; j += 1){
      var cell = $('<div></div>');
      cell.addClass('cell border');
      row.append(cell);
    }
    container.append(row);
  }
};

function addClickHandlers(){
  var cells = $('.cell');
  for(var counter = 0; counter < cells.length; counter += 1){
    var cell = cells[counter];
    $(cell).on('click', changeColor);
  }
  console.log(cells);
};

function changeColor(){
  console.log("I am changing colors...");
}


});
