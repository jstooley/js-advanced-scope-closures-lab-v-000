function produceDrivingRange(max_distance){
  return function withinRange (start, finish) {
    if(distance > max_distance){
      return false;
    } else{
      return true;
    }
  }
}
