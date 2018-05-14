var katzDeli = [];
//var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var positionInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${positionInLine} in line.`;
}

function nowServing() {
  if (katzDeli.length===0) {
    return 'There is nobody waiting to be served!';
  }
  else {return `Currently serving ${katzDeli.shift()}`}
}