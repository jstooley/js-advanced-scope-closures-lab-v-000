function produceDrivingRange(max_distance){
  return function withinRange (distance) {
    if (distance > max_distance){
      return false;
    } else{
      return true;
    }
  }
}
