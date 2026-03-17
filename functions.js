let discount = 50;
let price = 500;



console.log(price - discount) * 1.19

function myDiscountPrice() {
    console.log(price - discount) * 1.19
}

price = 400;

myDiscountPrice();

console.log(calculatesPrice(30, 500));

function calculatesPrice(discount, price) {
    let value = (price - discount - discount) * 1.19;
    return value;
}

let myFancyObject = {
    name: "denis",
    age: 42,
    height: 183
}

console.log(myFancyObject.age);
console.log(myFancyObject["name"]);