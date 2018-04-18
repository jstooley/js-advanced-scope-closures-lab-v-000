function produceDrivingRange(max_distance){
  return function withinRange (distnace) {
    if (distance > max_distance){
      return false
    } else{
      return true
    }
  }
}
