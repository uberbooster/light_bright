$(document).ready(function(){
  var container = $('.container');
  var numOfRows = 10;
  var numOfCols = 10;
  var colorClasses = ['white', 'red', 'green', 'blue'];
  var selectedColor;

  initColorSelectors();
  initGrid();
  addClickHandlers();

  function initColorSelectors(){
    var row = $('<div></div>');
    row.addClass('row');
    for(var i = 0; i < colorClasses.length; i += 1){
      var colorSelectors = $('<div></div>');
      console.log(colorClasses[i]);
      colorSelectors.addClass("color-selector border " + colorClasses[i]);
      row.append(colorSelectors);
    }
    container.append(row);
console.log("start");
    var hr = document.createElement('hr');
console.log("end");
  }

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
    var colorSelectors = $('.color-selector');
    colorSelectors.on('click', selectColor);
    cells.on('click', changeColor);
  };

  function selectColor(){
    console.log("Running selectColor function");
    if($(this).hasClass('white')){
     selectedColor = "white";
    } else {
     if($(this).hasClass('red')){
       selectedColor = "red";
     } else {
       if($(this).hasClass('green')){
         selectedColor = "green";
       } else {
         if($(this).hasClass('blue')){
           selectedColor = "blue";
         }
       }
     }
    }
  };

  function changeColor(){
    //$(this).toggleClass('red');


    var colorCycle = Math.round(Math.random() * (colorClasses.length - 1));
    var color = colorClasses[colorCycle];
    $(this).removeClass(colorClasses.join(' '));
    $(this).addClass(selectedColor);

  };
});
