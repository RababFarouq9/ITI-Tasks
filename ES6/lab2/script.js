class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Shape is abstract class");
    }
  }
}

function defineProperty(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    if (width <= 0 || height <= 0) {
      throw new Error("Width and Height must be positive numbers.");
    }

    defineProperty(this, "_width", width);
    defineProperty(this, "_height", height);
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }

  get perimeter() {
    return 2 * (this._width + this._height);
  }

  toString() {
    return `Rectangle=> Width=${this._width}, Height=${this._height}, Area=${this.area}, Perimeter=${this.perimeter}]`;
  }

  valueOf() {
    return this.area;
  }
}

class Square extends Rectangle {
  static counter = 0;

  constructor(side) {
    super(side, side);
    Square.counter++;
  }

  toString() {
    return `Square => Side=${this.width}, Area=${this.area}, Perimeter=${this.perimeter}]`;
  }
}

try {
  let s = new Shape(); 
} catch (e) {
  console.log(e.message);
}

let rect1 = new Rectangle(10, 6);
let rect2 = new Rectangle(5, 7);

console.log(rect1.toString()); 
console.log(rect2.toString()); 

console.log("rect1 + rect2 =", rect1 + rect2); 
console.log("rect1 - rect2 =", rect1 - rect2); 

let sq1 = new Square(4);
let sq2 = new Square(10);

console.log(sq1.toString());
console.log(sq2.toString());
console.log("Squares created:", Square.counter);