var square = x => x * x;

// with an arrow function that takes 1 arguments we can leave off the parenthesis

//console.log(square(5));

var user = {
  name: `Patrick`,
  sayHi: () => {
    console.log(`Hi. I am ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi. I am ${this.name}`);
  }
}

user.sayHiAlt();
