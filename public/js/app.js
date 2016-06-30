$(document).ready(function(){
  var container = $('.container');
  var numOfRows = $('#grid-rows');
  var numOfCols = $('#grid-cols');
  var colorClasses = ["white", "red", "green", "blue", "purple", "orange", "yellow", "pink", "lavender", "indigo", "salmon", "lime", "gray"];
  var selectedColor;


console.log(numOfRows);


  initColorSelectors();
  addPageClickHandlers();
  addGridClickHandler();
  initGrid();


  function increment(){
    var sib = $(this).siblings()[0];
    var val = +$(sib).text();
    if(val < 50){$(sib).text(val+1);};
    initGrid();
  };

  function decrement(){
    var sib = $(this).siblings()[0];
    var val = +$(sib).text();
    if(val > 10){$(sib).text(val-1);};
    initGrid();
  };

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
    container.append("<span>Selected Color: </span><div class='border current-color-box'></div>");
    container.append($('<hr />'));
  }

  function initGrid(){
    $('.grid.row').remove();
    console.log("Running initGrid");
    for(var i = 0; i < +numOfRows.text(); i += 1){
      var row = $('<div></div>'); //creates a new element in your HTML
      row.addClass('grid row');
      for(var j = 0; j < +numOfCols.text(); j += 1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
    addGridClickHandler();
  };

  function addPageClickHandlers(){
    var colorSelectors = $('.color-selector');
    colorSelectors.on('click', selectColor);
    //var submitButton = $('#submit');
    //submitButton.on('click', initGrid);
    $('.inc').on('click', increment);
    $('.dec').on('click', decrement);
  }

  function addGridClickHandler(){
    var cells = $('.cell');
    cells.on('click', changeColor);
  };

  function selectColor(){
    console.log("Running selectColor");
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
    $(this).removeClass(colorClasses.join(' '));
    $(this).addClass(selectedColor);
  };

});
