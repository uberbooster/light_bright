$(document).ready(function(){
  var container = $('.container');
  var footer = $('.footer');
  var numOfRows = 10;
  var numOfCols = 10;
  var colorClasses = ["white", "red", "green", "blue", "purple", "pink", "lavender", "indigo", "salmon", "orange", "yellow", "lime", "aqua", "gray"];
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
    container.append($('<hr />'));
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
    var currentColorBox = $('.current-color-box');
    for(var i = 0; i < colorClasses.length; i += 1){
      if($(this).hasClass(colorClasses[i])){
        selectedColor = colorClasses[i];
        console.log("Selected color is " + colorClasses[i]);
        currentColorBox.removeClass(colorClasses.join(' '));
        currentColorBox.addClass(selectedColor);
      };
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
