$(document).ready(function () {
  //https://www.jqueryscript.net/text/Text-Highlight-Plugin-jQuery-Marker.html

  //$(".selector").dialog("close");
  var marker = $('.content-text').marker({
    // options here


    // min/max length
    minimum: 3,
    maximum: 3000,
    overlap: false,

    // enable color picker
    colorPicker: true,

    // custom style
    style: {
      'background': 'rgba(249, 255, 0, 0.2)'
    },

    // can be removed?
    activeRemove: true,

    // is caseSensitive?
    caseSensitive: true,

    // callback functions
    add: afterAdd,
    remove: undefined,
    colorChange: getColor,
    mouseenter: undefined,
    mouseleave: undefined,
    debug: undefined


  });
  console.log('marker: ')
console.log(marker);

  function getColor(e, color) {
    //console.log(e);
    console.log(color);
  }
  function alertUser() {
    alert('highlight added');
  };

  function afterAdd() {
    console.log('afterAdd this:');
    
    console.log(this);    
  }
  // var $content = $('.content-text');
  // var popup = $('<div id=\"highlight-div\"><button id=\"toggleHighlight\">toggle highlight</button></div>');

  // popup.css({
  //   position: 'absolute',
  //   top: 0,
  //   left: 0
  // });
  // $content.append(popup);

  // var el = document.createElement('div');
  // el.innerHTML = '<div id=\"highlight-div\"><button id=\"toggleHighlight\">toggle highlight</button></div>';

});

// add property to marker confirmHighlight and change to true on clicking highlight button on popup
// call this.highlight from callback?

// configure so can show/hide popup in knockout?
// Methods:
  // getSelection return location x y popup should show - return first element in selection?
  // highlight: toggle highlight selected

// Easier doing it from plugin?
