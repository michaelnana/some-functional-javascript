// Question One

const values = [
  {
    a: [1, 2, 3, 4, 5],
  },
  {
    a: [1, 2, 3, 4],
  },
  {
    a: [],
  },
  {
    b: [5, 4, 3, 2, 1],
  },
  {
    b: [5, 4, 3, 2],
  },
  {
    b: [0],
  },
];

const sumOfArr = (arr) => {
  return arr.reduce((sum, value) => sum + value, 0);
};

export const arrToObjCompacter = (values) =>
  values.reduce((cummu, obj) => {
    const key = Object.keys(obj)[0];
    return Object.assign(cummu, {
      [key]: (!!!cummu[key] ? 0 : cummu[key]) + sumOfArr(obj[key]),
    });
  }, {});

//-------------------------------------------------------------------------

// Question Two

export const addOneAndDouble = (x) => {
  return compose(
    (x) => x + 1,
    (x) => x * 2,
    (x) => x + 2
  )(x);
};

const compose = (...funcs) => (value) => {
  return funcs.reduce((res, func) => func(res), value);
};

//-------------------------------------------------------------------------


// Question Three

export const filterV1 = (func) => (arr) => {
  const result = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

export const filterV2 = (func) => (arr) => {
  return arr.reduce(
    (res, value) => (func(value) ? [...res, ...[value]] : res),
    []
  );
};

export const filterV3 = (func) => (arr) => {
  var i = 0;
  const recur = (i, result) => {
    if (i >= arr.length - 1) {
      return result;
    }
    i++;
    return recur(i, func(arr[i]) ? [...result, ...[arr[i]]] : result);
  };
  return recur(i, []);
};

//---------------------------------------------


// Running Question One
console.log(`Reduced Values are: ${JSON.stringify(arrToObjCompacter(values))}`);

// Running Question Two
console.log(`Function composer: ${addOneAndDouble(12)}`);

// Running Question Three
console.log(`Filter Values: ${filterV1((x) => x != "a")(["a", "b", "c", "d"])}`);
console.log(
  `Filter Values: ${filterV2((x) => x != "a")(["a", "b", "c", "d"])}`
);
console.log(
  `Filter Values: ${filterV3((x) => x != "a")(["a", "b", "c", "d"])}`
);
