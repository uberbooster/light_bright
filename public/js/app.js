$(document).ready(function(){
var container = $('.container');
var numOfRows = 46;
var numOfCols = 46;

initGrid();
function initGrid(){
  for(var i = 0; i < numOfRows; i += 1){
    var row = $('<div></div>'); //creates a new element in your HTML
    for(var j = 0; j < numOfCols; j += 1){
      var cell = $('<div></div>');
      cell.addClass('cell border');
      row.append(cell);
    }
    container.append(row);
  }
};


});
