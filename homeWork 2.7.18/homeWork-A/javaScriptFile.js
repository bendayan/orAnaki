{
var value=6,squareArea,squarePerimeter,circleArea,circlePerimeter,triangleArea,trianglePerimeter,pai=3.14;
squareArea=value*value;
squarePerimeter=value*4;
circleArea=pai*(value*value);
circlePerimeter=(2*pai)*value;
triangleArea=(value*value)/2;
trianglePerimeter=value+value+value;

document.getElementById("aquareArea").innerHTML="square area:"+squareArea;
document.getElementById("squarePerimeter").innerHTML="<br>square Perimeter:"+squarePerimeter;

document.getElementById("circleArea").innerHTML="circle area:"+circleArea;
document.getElementById("circlePerimeter").innerHTML="<br>circle Perimeter:"+circlePerimeter;

document.getElementById("triangleArea").innerHTML="triangle area:"+triangleArea;
document.getElementById("trianglePerimeter").innerHTML="<br>triangle Perimeter:"+trianglePerimeter;

}
