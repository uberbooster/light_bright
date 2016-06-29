$(document).ready(function(){
  var container = $('.container');
  var numOfRows = $('#grid-rows');
  var numOfCols = $('#grid-cols');
  var colorClasses = ["white", "red", "green", "blue", "purple", "orange", "yellow",];
  var selectedColor;

  initColorSelectors();

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
    container.append("<span>Selected Color: </span><div class='border current-color-box'></div>");
    container.append($('<hr />'));
  }

  function initGrid(){
    for(var i = 0; i < numOfRows.val(); i += 1){
      var row = $('<div></div>'); //creates a new element in your HTML
      row.addClass('row');
      for(var j = 0; j < numOfCols.val(); j += 1){
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
    var submitButton = $('#submit');
    colorSelectors.on('click', selectColor);
    cells.on('click', changeColor);
    submitButton.on('click', initGrid());
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
    $(this).removeClass(colorClasses.join(' '));
    $(this).addClass(selectedColor);
  };

  // $(function() {
  //
  //
  //
  //   $(".button").on("click", function() {
  //
  //     var $button = $(this);
  //     var oldValue = $button.parent().find("input").val();
  //
  //     if ($button.text() == "+") {
  //   	  var newVal = parseFloat(oldValue) + 1;
  //   	} else {
  // 	   // Don't allow decrementing below zero
  //       if (oldValue > 1) {
  //         var newVal = parseFloat(oldValue) - 1;
  // 	    } else {
  //         newVal = 1;
  //       }
  // 	  }
  //
  //     $button.parent().find("input").val(newVal);
  //
  //   });
  //
  // });

});
