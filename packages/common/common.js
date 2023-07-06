
const common = () => {

const multiply = (a, b) => (parseInt(a) * parseInt(b)).toString();
const divide = (a, b) => (parseInt(a) / parseInt(b)).toString();
const add = (a, b) => (parseInt(a) + parseInt(b)).toString();

const num = 123;
const text = "hello";

const num2 = 321;
const text2 = "goodbye";

// Only functions added to publicApi will be accessible outside the module
// Alternatively we could use named exports

const publicApi = {
    divide,
    multiply,
    add,
    num,
    text
}

 return publicApi;
}

export default common;

