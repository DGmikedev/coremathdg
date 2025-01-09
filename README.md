# coremathdg
This is a repository where mathematical calculation algorithms are found.


### Build the project to Browser or Node
#### or just Browser or just Node
``` json
"build-browser": "tsc --project tsconfig.browser.json",
"build-node": "tsc --project tsconfig.node.json",
"build": "npm run build-browser & npm run build-node",
```

* Entry point: index.js 

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
// { status: true, msg: '', res: -8 }

//  array 4x4
let arr4x4=[
    [1, 3, 7, 4], [2, 4, 8, 2],
    [1, 5, 3, 2], [1, 3, 4, 6]
];

console.log( determinant4x4(arr4x4) ) // det = 88
// { status: true, msg: '', res: 88 }
```

2.- Inverse Matrix:
- array 2x2
- is inverse ?  array 2x2

3.- Transposed Matrix:
- array nxn

4.- Vector:
- sum the contents of an vector
- multiply vector by a value

5.- solve systems of linear equations:
- lineal 2x2
- lineal 3x3
