import {
  addOneAndDouble,
  arrToObjCompacter,
  filterV1,
  filterV2,
  filterV3,
} from "../index";

describe("Question One", () => {
  const values = [
    { a: [1, 2, 3, 4] },
    { a: [10] },
    { c: [5, 7, 9] },
    { c: [15, 20] },
    { c: [] },
  ];
  test("arr values of objects should be compacted into an object that contains keys with respective sums", () => {
    expect(arrToObjCompacter(values)).toEqual({ a: 20, c: 56 });
  });
});

describe("Question Two", () => {
  test("addOneAndDouble should take a value, add 1 to it, double and then add two", () => {
    expect(addOneAndDouble(10)).toEqual(24);
  });
});

describe("Question Three", () => {
  test("All 3 filter functions should take a filter function and an array and return an expected filtered array", () => {
    expect(filterV1((x) => x % 2 === 0)([1, 2, 3, 4])).toEqual([2, 4]);
    expect(filterV2((x) => x % 2 === 0)([1, 2, 3, 4])).toEqual([2, 4]);
    expect(filterV3((x) => x % 2 === 0)([1, 2, 3, 4])).toEqual([2, 4]);
  });
});
