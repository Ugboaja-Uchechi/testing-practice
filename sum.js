
const stringLength = (string) => {
  // console.log(string.charAt(0));
  if(string.length === 1 || string.length <= 10) {
  return 'error';
} else {
  return string.length;
  }
};
module.exports = stringLength;

stringLength('hi');
stringLength('hey');
stringLength('hello');

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;