import { result, Result } from '../results/results.js'
import { iSSquareAndNumc } from '../validations/arrayValidations.js'

/**
 * return the determinant of an array 2x2
 * @param arr - { [ [n1,n2], [n1,n2] ] }
 * @returns determinant { number }
 */
export function determinant2x2(arr:number[][]): Result {
    // arr = [
    //     [n1, n2],  (n1 x n4) - (n2 x n3)
    //     [n3, n4]
    // ]
    let determinant:number = 0;

    // Block of validations
    let { status, msg, res } = iSSquareAndNumc(arr)
    if(!status) return result( status, msg + '[determinant2x2]', res )
     // end block   

    try{
        determinant =  (arr[0][0] * arr[1][1]) ;
        determinant -= (arr[0][1] * arr[1][0]);
    }catch(error){
        return result(false, error + '[determinant2x2]', NaN)
    }
    
    if(determinant == 0) return result(true, `¡warning determinant = 0! data: [ ${arr[0]}], [${arr[1]}] ]`, determinant );

    return  result(true, '', determinant );

}

/**
 * return the determinant of an array 3x3
 * @param arr - { [ [a,b,c], [d,e,f], [g,h,i] ] }
 * @returns determinant { number }
 */
export function determinant3x3(arr_input:number[][]): Result{

    let leftToRight:number  = 0;
    let RightToleft:number  = 0;
    let delta:      number  = 0;
    let cont :      number  = 0;
    let tmp:        number  = 0; 
    let hnNmb:      boolean = false;
    let result3x3: Result;

    // Block of validations
    let { status, msg, res } = iSSquareAndNumc(arr_input)
    if(!status) return result( status, msg + ' [determinant3x3]', res )
    // end block

    const arr:number[][] = [ arr_input[0],    // arr_input[0] [a, b, c ];
                             arr_input[1],    // arr_input[1] [e, f, g ];
                             arr_input[2],    // arr_input[2] [i, j, k ];
                             arr_input[0],    // arr_input[0] [a, b, c ];
                             arr_input[1]     // arr_input[1] [e, f, g ];
    ];

    // sets diagonal left to right and right to left
    const deltaCords0 = [
        [ arr[0][0], arr[1][1], arr[2][2] ],                  // a , f , k
        [ arr[1][0], arr[2][1], arr[3][2] ],                  // e , j , c
        [ arr[2][0], arr[3][1], arr[4][2] ],                  // i , b , g 
        [ arr[0][2], arr[1][1], arr[2][0] ],                  // c , f , i
        [ arr[1][2], arr[2][1], arr[3][0] ],                  // g , j , a 
        [ arr[2][2], arr[3][1], arr[4][0] ]                   // k , b , e
    ] 

    try{

        deltaCords0.forEach((vector)=>{
    
              tmp = vector.reduce((a,b)=> a * b, 1 )
    
              cont < 3 ? leftToRight += tmp  : RightToleft += tmp ;
    
            cont++
    
        })
    
    }catch(error){
        return result(false,`Error [ ${error} ] when generating the determinant of 3x3 - data: [ ${arr[0]}], [${arr[1]}], [${arr[2]}] ${error}`, NaN)
    }

    delta = leftToRight - RightToleft

    if(delta == 0) return  result(true, `¡warning determinant = 0! data: [ ${arr[0]}], [${arr[1]}], [${arr[2]}]`, delta.toString() )  

    return result(true, '', delta);

}

/**
 * return the determinant of an array 4x4
 * @param arr { [[4n][4n][4n][4n]] }
 * @returns   { number }
 */
export function determinant4x4(arr:number[][]): Result{

    let delta:     number = 0;
    let result4x4: Result;


    // Block of validations
    let { status, msg, res } = iSSquareAndNumc(arr)
    if(!status) return result( status, msg + ' [determinant4x4]', res )
    // end block

    // [ a, b, c, d ]
    // [ f, g, h, i ]
    // [ k, l, m, n ]
    // [ p, q, r, s ]

    try{
    // Delta determinant
    // Sets arrays and gets their determinants
    // [ g, h, i ],[ l, m, n ], [ q, r, s ].result  * a
    delta += determinant3x3( setArray4x4(arr, [1,4], 0) ).res  * arr[0][0];
  
     // [ f, h, i ], [ k, m, n ], [ p, r, s ].det * (b * -1 )
    delta += determinant3x3( setArray4x4(arr, [0,4], 1) ).res * (arr[0][1] * -1);
  
    // [ f, g, i ], [ k, l, n ], [ p, q, s ].result * c
    delta += determinant3x3( setArray4x4(arr, [0,4], 2) ).res * arr[0][2]
  
    // [ f, g, h ], [ k, l, m ], [ p, q, r ].result * (d * -1 )
    delta += determinant3x3( setArray4x4(arr, [0,4], 3) ).res * (arr[0][3] * -1)
  
    }catch(error){
          return result(false, `Error when generating the determinant of 4x4 - data: [ ${arr} ${error}`, NaN )
    }
  
    if(delta == 0) return result(true, `¡warning determinant = 0! data: [ ${arr}`, delta )
 
    return result(true, '', delta )

}

/**
 *  sets the arrays to function determinant3x3 used by determinant4x4
 * @param arr   { [ [a,b,c,d],[e,f,g,h],[i,j,k,l],[m,n,o,p] ] }
 * @param range { [ start, stop ]}
 * @param skipt { number }
 * @returns      {[ [1,2,3],[4,5,6],[7,8,9] ]}
 */
function setArray4x4(arr: number[][], range:number[], skipt:number): number[][]{

    let vectTmp: number[] = [];
    let vectSnd: number[][] = [];
  
    for(let i = 1; i < 4; i++){
    
        for(let j = range[0]; j < range[1]; j++){ 
  
            if( j === skipt ){  continue 
            }else{
                 vectTmp.push(arr[i][j]) 
             } 
        }
    
        vectSnd.push(vectTmp)
    
        vectTmp = []
    }
    
    return vectSnd
}
