// import { getInvArr2x2, isInvers2x2 } from './arrays/invers.js'
//  import { determinant2x2, determinant3x3, determinant4x4 } from './arrays/determinants.js'
// import { trsnpSqrMtrx } from './arrays/transposed .js' 


// import { solveLn2x2 } from './solve/solveLn2x2.js'

import { solveLn3x3 } from "./solve/solveLn3x3.js" 

let eq:number[][] = [
    [1,2,3,6],
    [2,5,3,10],
    [-2,7,-4,1]
]

console.log( solveLn3x3(eq) )

// [ 1, 2, 3,  6],
// [ 2, 5, 3, 10],
// [-2, 7,-4,  1]
// [ 1, 2, 3,  6],
// [ 2, 5, 3, 10],



// let arr3x3 = [
//     [1,2,3],
//     [4,5,4]
// ]
// 
// console.log( solveLn2x2(arr3x3) )


// let res= [
//      [ -2, 1 ], [ 1.5, -0.5 ] 
//   ]
// console.log( determinant2x2( arr2x2 ) )
// console.log(getInvArr2x2(arr2x2, -2))
// console.log(isInvers2x2(arr2x2, res))

/*
import { determinant2x2, determinant3x3, determinant4x4 } from './arrays/determinants.js'




console.log( determinant2x2( arr2x2 ) )

let arr3x3 = [
    [1,2,3],
    [4,5,4],
    [7,8,20]

]

console.log(determinant3x3(arr3x3))

let arr4x4 = [
    [1,9,2,8],
    [3,2,1,6],
    [2,2,5,5],
    [9,0,9,3]
]

console.log(determinant4x4(arr4x4))
*/