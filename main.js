
//Write a function that takes an object as argument and returns an array of arrays,
//  where each inner array contains the key-value pair of the object.
const obj1 = {
  name: "Ann",
  age: 22,
  isWorking: true,
};

function fun(arg) {
  return Object.entries(arg)
}
console.log(fun(obj1));


//Implement a function that takes two objects and returns true
// if they have the same set of keys, false otherwise.

const obj2 = {
  name: "Tom",
  age: 27,
  isWorking: false,
};

const checkKeys = (arg1, arg2) => {
  const keys1= Object.keys(arg1);
  const keys2 = Object.keys(arg2);

  if (keys1.length !== keys2.length) return false;
  for (let keys of keys1) {
    if (keys2.includes(keys)) {
      return true;
    }
  }
  return true;
};

console.log(checkKeys(obj1, obj2));

//Write a function that takes two or more objects as arguments
//  and merges them into a single object

const client = {
  clientName: "Ann",
  count: 2,
};

const coffee = {
  name: "espresso",
  price: 4.0,
};

const mergesObjects = (client, coffee) => {
  // const clientCoffee = { ...client, ...coffee };
  // return clientCoffee;
  return Object.assign({}, client, coffee);
};

console.log(mergesObjects(client, coffee));




//Write a function that takes an object and a key as input and deletes
//  the specified key from the object.

const obj3 = {
  name: "Tom",
  age: 27,
  isWorking: false,
};

const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value) {
    deleteKey(obj3, value);
  }
});

function deleteKey(obj, keyWord) {
  for (let key in obj) {
    if (key === keyWord) {
      delete obj[keyWord];
    }
  }
  console.log(obj);
  return obj;
}




//make a class of rectangle that recieves width and height and add this methods
// getArea()
// getPerimeter()
// isSquare()

class Rectangle {
  constructor(value = 0, height, width) {
    this.initValue = value;
    this.height = height;
    this.width = width;
  }

  getArea(h, w) {
    this.initValue =  h * w;
  }

  getPerimeter(h, w) {
    this.initValue = 2 * (h + w)
  }
  getResult() {
    return this.initValue
  }
}
const rect = new Rectangle()
rect.getArea(2, 3)
console.log(rect.getResult())
rect.getPerimeter(2, 3)
console.log(rect.getResult())



// Create a class representing a car with properties like make, model, and year.
class Car {
  constructor(make, model, year){
    this.make = make
    this.model = model
    this.year = year
  }
}

const newCar = new Car('Toyota', 'Highlander', 2022)
console.log(newCar)
