// let arr = [' d','b']
// let target = 'tag'
// function findATarget(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr.include(target)){
//             return true

//         }
//         else{
//             return false
//         }
//     }

// }
// findATarget([],)
// console.log(findATarget(arr, target))

let instructor = ['Todd', 'Darie', 'Jonathan', 'Zach', 'Manny']

function findTheTarget(ArrOfinstructor, target){
    return ArrOfinstructor.indexOf(target) !== -1
}

console.log(findTheTarget(instructor,"Todd"))