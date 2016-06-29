$(document).ready(function(){
  var container = $('.container');
  var numOfRows = 10;
  var numOfCols = 10;
  var colorClasses = ['white', 'red', 'green', 'blue', 'purple'];
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
      colorSelectors.addClass("color-selector " + colorClasses[i]);
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
    console.log("Running selectColor function");
    for(var i = 0; i < colorClasses.length; i += 1){
      console.log(colorClasses[i]);
      if($(this).hasClass(colorClasses[i])){
        selectedColor = colorClasses[i];
      };
    }

    // if($(this).hasClass('white')){
    //  selectedColor = "white";
    // } else {
    //  if($(this).hasClass('red')){
    //    selectedColor = "red";
    //  } else {
    //    if($(this).hasClass('green')){
    //      selectedColor = "green";
    //    } else {
    //      if($(this).hasClass('blue')){
    //        selectedColor = "blue";
    //      }
    //    }
    //  }
    // }
  };

  function changeColor(){
    //$(this).toggleClass('red');


    var colorCycle = Math.round(Math.random() * (colorClasses.length - 1));
    var color = colorClasses[colorCycle];
    $(this).removeClass(colorClasses.join(' '));
    $(this).addClass(selectedColor);

  };
});
