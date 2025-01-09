import { getInvArr2x2, isInvers2x2 } from './arrays/invers.js'
import { determinant2x2, determinant3x3, determinant4x4 } from './arrays/determinants.js'
// import { trsnpSqrMtrx } from './arrays/transposed .js' 
// import { solveLn2x2 } from './solve/solveLn2x2.js'
// import { solveLn3x3 } from "./solve/solveLn3x3.js" 

// is inverse ?  array 2x2

let arr2x2 = [
    [3, 8], [7, 5]
];

// console.log( determinant2x2(arr2x2) )  det = -41

let inv2x2 = getInvArr2x2(arr2x2, -41) // inv = res

console.log( inv2x2 )

// { status: true, msg: '',
//      res: [ [ -0.12195121951219512,  0.1951219512195122 ],
//             [  0.17073170731707318, -0.07317073170731707 ]
//          ]     
// }
let inverse = isInvers2x2(arr2x2, inv2x2.res)
console.log( isInvers2x2(arr2x2, inv2x2.res) )
console.log( inverse.res.mtrx )