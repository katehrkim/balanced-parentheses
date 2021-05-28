const bp = require("./balanceParens");

// Add more test cases!...

test('one', () => {
  expect(bp("abc(d)e(fgh))(i)j)k")).toEqual("abc(d)e(fgh)(i)jk");
});

test('two', () => {
  expect(bp("abc((d)e(fgh)(i)j(k")).toEqual("abc(d)e(fgh)(i)jk");
});

// Challenge: nested parentheses...

test('three', () => {
  expect(bp("abc(d)(ef(g(h))ij)k)lm()o)p")).toEqual("abc(d)(ef(g(h))ij)klm()op");
});