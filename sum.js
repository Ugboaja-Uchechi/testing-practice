
const stringLength = (string) => {
  // console.log(string.charAt(0));
  if(string.length === 1 || string.length <= 10) {
  return 'error';
} else {
  return string.length;
  }
};
module.exports = stringLength;

const reversedString = (string) => {
  return string.split('').reverse().join('');
}
module.exports = reversedString;

const capitalisedString = (string) => {
  console.log(string.charAt(0).toUpperCase() + string.slice(1));
}
module.exports = capitalisedString;

// class Calculator {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   // Getter
//   get area() {
//     return this.calcArea();
//   }

//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }

//   get addition() {
//     return this.calcAddition();
//   }

//   calcAddition() {
//     return this.height + this.width;
//   }

//   get subtraction() {
//     return this.calcAddition();
//   }

//   calcSubtraction() {
//     return this.height + this.width;
//   }

//   get multiplication() {
//     return this.calcAddition();
//   }

//   calcMultiplication() {
//     return this.height + this.width;
//   }

//   get division() {
//     return this.calcAddition();
//   }

//   calcDivision() {
//     return this.height + this.width;
//   }
// }
// const square = new Rectangle;
// return square;