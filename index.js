var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var positionInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return positionInLine;
}