// TODO: 
// regenerate sprites when they dissapear
// randomize x/y to positions

/*
var popCounter = 0;

var $windowWidth = $(window).width();
var $windowHeight = $(window).height();

PIXI.utils.skipHello(); // remove pixi message in console log 

var app = new PIXI.Application($windowWidth, $windowHeight, {transparent:true, resolution:1});
$('#stick-anchor canvas').append(app.view);
*/

var type = "WebGL"

if(!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

PIXI.utils.sayHello(type)
