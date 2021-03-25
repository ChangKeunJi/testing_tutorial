const { forEach, map } = require("./index.js");

const assert = require("assert");

// Three issues
// 1) Every variables are in Global
// 2) Can't keep testing after one of them failed
// 3) Hard to find which one has failed

/*
const test = (desc, fn) => {
  console.log("-----", desc);

  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};
*/

//! forEach

it("Testing forEach function", () => {
  let sum = 0;

  forEach([1, 2, 3], (value, i) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Expected forEach to sum");

  // if (sum !== 6) throw new Error(" expected '6' ");
});

//! Map

it("Testing map function", () => {
  const result = map([1, 2, 3], (value) => value * 2);

  assert.deepStrictEqual(result, [2, 4, 6]);

  // assert.strictEqual(result[0], 2);
  // assert.strictEqual(result[1], 4);
  // assert.strictEqual(result[2], 6);

  // if (result[0] !== 2) {
  //   throw new Error(`Expected 2 but found ${result[0]}`);
  // }

  // if (result[1] !== 4) {
  //   throw new Error(`Expected 4 but found ${result[0]}`);
  // }

  // if (result[2] !== 6) {
  //   throw new Error(`Expected 6 but found ${result[0]}`);
  // }
});
