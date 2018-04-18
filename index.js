function produceDrivingRange(max_distance){
  return function withinRange (start, finish) {

  let distance  = Math.abs(parseInt(finish) - parseInt(start));

    if(distance > max_distance){
      return false;
    } else{
      return true;
    }
  }
}
