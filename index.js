function produceDrivingRange(max_distance){
  return function withinRange (start, finish) {

    start = start.slice(0,2);
    finsih = finish.slice(0,2);

    if(distance > max_distance){
      return false;
    } else{
      return true;
    }
  }
}
function distacneBetween(start,finish){

}
