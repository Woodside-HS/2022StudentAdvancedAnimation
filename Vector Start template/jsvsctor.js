// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x,y){
  //constructor properties
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
  return this;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
  return //value
}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
  
  return this;
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
  return //value;
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
  return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
  return this;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
  return new JSVector();
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
  return new JSVector();
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
  return this;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  return this;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  return this;

}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
    return this;
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
    return //value;
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
    return //value;
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function(angle) {
    return this;
}


// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
  return // value
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
  return new JSVector(/* expression */);
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {
    return "";
}
