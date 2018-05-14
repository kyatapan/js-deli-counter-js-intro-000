var katzDeli = [];
//var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var positionInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${positionInLine} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return 'There is nobody waiting to be served!';
  }
  else {return `Currently serving ${katzDeliLine.shift()}.`}
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length===0) {
    return `The line is currently empty.`
  }
  else{
    var announcement = 'The line is currently:'
    for(var i=0; i<katzDeliLine.length; i++) {
      announcement.append(` ${i+1}. ${katzDeliLine[i]}`)
    }
  }
}