# coremathdg
This is a repository where mathematical calculation algorithms are found.


### Build the project to Browser or Node
#### or just Browser or just Node
``` json
"build-browser": "tsc --project tsconfig.browser.json",
"build-node": "tsc --project tsconfig.node.json",
"build": "npm run build-browser & npm run build-node",
```

1.- Determinants: 

``` javascript

//  array 2x2
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
- array nxn

4.- Vector:
- sum the contents of an vector
- multiply vector by a value

5.- solve systems of linear equations:
- lineal 2x2
- lineal 3x3
