function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth)

function add(...values) {
  let sum = 0
  for (var value of values) {
    sum += value
  }
  return sum
}
console.log(add(2, 5, 3))

// let { name: userName } = { name: 'along', age: 33 };
// console.log(userName);
let [{ name }, { hobby }] = [{ id: 1, name: 'zs', age: 23 }, { id: 2, name: 'lisi', hobby: ['sleeping', 'eating'] }];
console.log(name);
console.log(hobby);