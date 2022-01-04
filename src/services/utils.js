export const sort = (field, reverse, format) => {
  const key = format
    ? x => {
        return format(x[field]);
      }
    : x => {
        return x[field];
      };

  reverse = !reverse ? 1 : -1;

  return (a, b) => {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};

export const checkNull = a => {
  if (a == undefined || a == [] || a == null || a == 0 || a == "" || a == " ") {
    return true; //is null
  } else {
    return false; // not null
  }
};

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};
