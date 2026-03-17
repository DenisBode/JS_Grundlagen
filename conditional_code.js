let myCondition = true;

// myCondition = !myCondition; // ! -> Erzeugt das Gegenteil -> Not Operator

myCondition = true || false || false; // || -> if on Operator = true then all true

// myCondition = treu && true; // && -> and Operator = true then all true


myCondition = 45 == 45; // testing if same (not same Type)
myCondition = 45 === '45'; // testing if same (with same Type)

myCondition = 45 < 123; // größen Abfrage
myCondition = 45 <= 45; // kleiner gleich (größen Abfrage)




console.log(myCondition);

let myIfConditioin = 5 < 10;

if (myIfConditioin) {       // wenn das was in () steht True ist wird das in den geschweiften Klammern ausgeführt
    console.log("Hello World! IF Teil");
}
else if (!myIfConditioin) {
    console.log("Hallo World ! NotmyIfCondition Teil");
}
else {
    console.log("Hello World! Else Teil");
}

