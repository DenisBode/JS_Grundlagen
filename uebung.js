// test 1

let fullName = (firstname, lastname) => {
    return firstname + " " + lastname;
};

console.log(fullName("Max", "Mustermann"));


//test 2

function capitalizeLetters(text) {
    return text.toUpperCase();
}
console.log(capitalizeLetters("bAnanE"));

//test 3

function countCaracters(text) {
    return text.length;
}
console.log(countCaracters("bAnanE"));

//test 4

function formatToCurrency(text) {
    return Number(text.replace(",", ".")).toFixed(2) + " €";
}
console.log(formatToCurrency("0,5"));
