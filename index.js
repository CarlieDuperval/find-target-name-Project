//Write a function that given an array of strings, for example ['Todd', 'Darie', 'Jonathan', 'Zach', 'Manny'] and a single string, for example 'Amhed' return wheter the single srting exist whithin the array.

let instructor = ['Todd', 'Darie', 'Jonathan', 'Zach', 'Manny']

let target = 'tag'
function findATarget(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){

            return true

        }

        return false
    }

}
console.log(findATarget(instructor, "Todd"))





function findTheTarget(ArrOfinstructor, target){
    return ArrOfinstructor.indexOf(target) !== -1
}

//console.log(findTheTarget(instructor,"Carlie"))