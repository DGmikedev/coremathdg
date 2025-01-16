# Analysis of electrical circuits using Ohm's law

### All values of entrance are in their magnitude without  prefixes R, V, I 

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

````
