//Write a function that given an array of strings, for example ['Olympic Heigh', 'Wispering pincs', 'Miami Dade College', 'Omni Elementary School', 'French America Scholl'] and a single string, for example 'LAD' return wheter the single srting exist whithin the array.

const schoolName = ['Olympic Heigh', 'Wispering pincs', 'Miami Dade College', 'Omni Elementary School', 'French America Scholl']
let tarName = 'LAD'
    tarName = 'Miami Dade College'

const getSchoollName = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (target === arr[i]){
            return true
        }
    }
    return false

}
console.log(getSchoollName(schoolName, tarName))