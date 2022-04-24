//Write a function that given an array of strings, for example ['Banana', 'Apple', 'Orange', 'Peach', 'Pineapple'] and a single string, for example 'grape' return wheter the single srting exist whithin the array.

const fruitList = ['Banana', 'Apple', 'Orange', 'Peach', 'Pineapple']
let tarFuit = 'grape'
    tarFuit = 'Apple'


const findFruitTarget = ( arrF, target) => {
    return arrF.indexOf(target) !== -1

}
console.log('This is ',findFruitTarget(fruitList, tarFuit))