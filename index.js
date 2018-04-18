function produceDrivingRange(max_distance){
  return function withinRange (start, finish) {

  let distance  = Math.abs(parseInt(finish) - parseInt(start));

  if(distance > max_distance){
      return `${distance - max_distance} blocks out of range`;
    } else{
      return `within range by ${max_distance - distance}`;
    }
  }
}
function produceTipCalculator(percent){
  return function tipPercent(){

  }
}
