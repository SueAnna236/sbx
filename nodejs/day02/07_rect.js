var width=5;
var heigth=8;
function getArea(){
	return width*heigth;
	//console.log(width*height);
}
function getLength(){
	return 2*(width+heigth);
}
module.exports.w=width;
module.exports.h=heigth;
module.exports.getArea=getArea;
module.exports.getLength=getLength;
console.log(exports);








