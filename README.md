# coremathdg

```javascript
// to start
npm install all
```
## Build the project to Browser or Node
```javascript
// just browser
"build-browser": "tsc --project tsconfig.browser.json",

// just node
"build-node": "tsc --project tsconfig.node.json",

// both 
"build": "npm run build-browser & npm run build-node",
```

### entry point: index.js

1.- Determinants: 

``` javascript

//  array 2x2

   import { determinant2x2, determinant3x3, determinant4x4 } from './arrays/determinants.js'

   let arr2x2=[ [1, 5], [8, 4] ];
   console.log( determinant2x2(arr2x2) ) // det = -36
// return { status: true, msg: '', res: -36 }

//  array 3x3
    let arr3x3=[
        [4, 6, 7], [1, 0, 2], [1, 2, 3]
    ];
    console.log( determinant3x3(arr3x3) ) // det = -8
// return { status: true, msg: '', res: -8 }

//  array 4x4
    let arr4x4=[
        [1, 3, 7, 4], [2, 4, 8, 2],
        [1, 5, 3, 2], [1, 3, 4, 6]
    ];

    console.log( determinant4x4(arr4x4) ) // det = 88

//  return { status: true, msg: '', res: 88 }
```

2.- Inverse Matrix:

``` javascript

//  inverse of an array 2x2
    import { getInvArr2x2, isInvers2x2 } from './arrays/invers.js'

    let arr2x2 = [ [3, 8], [7, 5] ];

//  console.log( determinant2x2(arr2x2) )  det = -41

    let inv2x2 = getInvArr2x2(arr2x2, -41) // inv = res

    console.log( inv2x2 )

//  return
//  { status: true, msg: '',
//       res: [ [ -0.12195121951219512,  0.1951219512195122 ],
//              [  0.17073170731707318, -0.07317073170731707 ]
//           ]     
//  }


//  is inverse ?  inv2x2  of arr2x2  or another arr2x2

    let inverse = isInvers2x2(arr2x2, inv2x2.res)
        console.log( isInvers2x2(arr2x2, inv2x2.res) ) // inv = true, res.mtrx = [ [ 1, 0 ], [ 0, 1 ] ]

//  return
//  { status: true,  msg: 'Array 2 are Invers of Array 1',
//    res: { mtrx: [ [Array], [Array] ], inv: true }
//  } 

```

3.- Transposed Matrix:

``` javascript

// array N x N

    import { trsnpSqrMtrx } from './arrays/transposed.js'

    let arr4x4=[
        [1, 3, 7, 4],
        [2, 4, 8, 2],
        [1, 5, 3, 2],
        [1, 5, 3, 2],
    ];

    console.log( trsnpSqrMtrx(arr4x4) ) 

//  return
//  {
//      status: true, msg: '',
//      res: [ [ 1, 2, 1, 1 ], 
//             [ 3, 4, 5, 5 ], 
//             [ 7, 8, 3, 3 ], 
//             [ 4, 2, 2, 2 ] 
//          ]
//  }

```
 

4.- Vector:
```javascript

   import { vctrSum, vctrXn } from './arrays/vector.js'

    // sum the contents of an vector
    let vctr = [1,2,3,4,5,6]
    console.log(  vctrSum(vctr) ) // sum = 21
    // return { status: true, msg: '', res: 21 }


    // multiply vector by a value
    let vctr = [6,8,9];
    let multNumber = 3;

    //                   [6,8,9],  3
    console.log( vctrXn( vctr,    multNumber) ) // res = [ 18, 24, 27 ]
    //return { status: true, msg: '', res: [ 18, 24, 27 ] }
    
```



5.- solve systems of linear equations:
```javascript

    import { solveLn2x2 } from './solve/solveLn2x2.js'

    // solve system eq: lineal 2x2

    // if:  x = 3, y = 2

    // 2x + y  = 8
    // 7x + 2y = 25
    
    let eq = [ 
        [2, 1, 8],
        [7, 2, 25]
    ];

    console.log( solveLn2x2(eq) ) // res = x:3, y:2

    // return 
    // {
    //     status: true,
    //     msg: { delta: -3, delta_x: -9, delta_y: -6 },
    //     res: { x: 3, y: 2 }
    // }

    // solve system lineal 3x3

    import { solveLn3x3 } from "./solve/solveLn3x3.js"

    // if
    // 11x+32y−7z=−18
    // 31x+42y+33z=2
    // 31x+43y+29z=−2

    let eq = [ 
        [11, 32, -7, -18],
        [31, 42, 33,  2],
        [31, 43, 29, -2]
    ];

    console.log( solveLn3x3(eq) ) // res = { x:-1, y:0, z:1 }

    // return 
    // {
    //   status: true,
    //   msg: 'deltaX:-1540, deltaY:0, deltaZ:1540, delta:1540 ',
    //   res: { x: -1, y: 0, z: 1 }
    // }

```
6.- Analysis of electrical circuits using Ohm's law
All values of entrance are in their magnitude without  prefixes R, V, I 

```javascript

import { ElectricCts } from './elect/ElectricCts.js'

// Gets Voltage
console.log( ElectricCts.getVoltage(2,4) ) // v = 8

//return { status: true, msg: '', res: { v: 8 } }

// Gets Electrical Current
console.log( ElectricCts.getCurrent(5,7) ) // i = 0.7142857142857143

// { status: true, msg: '', res: { i: 0.7142857142857143 } }

// Gets Resistence
console.log( ElectricCts.getResistence(1, 12) ) // r = 12

// { status: true, msg: '', res: { r: 12 } }

// group of series resistences 

let Rgroup: number[] = [120,12, 1000, 50000];
let tipe = 0 // series
console.log( ElectricCts.addResistences(Rgroup, tipe) )  // r = 51132

// return 
// { status: true, msg: '', res: { r: 51132 } }

// group of parallel resistences 

let Pgroup: number[] = [1500, 2, 10000, 300];
let tipe = 1 // series

console.log( ElectricCts.addResistences(Pgroup, tipe) ) // r = 1.9837333862328903

// return
// { status: true, msg: '', res: { r: 1.9837333862328903 } }

```

7.- Solve squre root by backshali method

```javascript

import { getSqRoot } from "./solve/sqrtRootBackShali.js";

// sqare root of 120 
// residing number / radicando         => 120
// approach number / aproximación      => 10 :. 10 * 10 =100
// iteration number / # de iteraciones => 10

console.log( getSqRoot(120, 10, 10) ) // sqrt: 10.954451150103322 

```