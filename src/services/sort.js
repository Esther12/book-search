export const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(x[field])
    } :
    function(x) {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}

export const checkNull = (a)=>{
  if(a==undefined || a == [] || a == null || a ==0 ||a =="" || a == " "){
    return true; //is null
  }else{
    return false; // not null
  }
}
 