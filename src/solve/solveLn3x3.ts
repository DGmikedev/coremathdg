import { result, Result } from '../results/results.js'
import { iSNumcMtrxAndHasNVec } from '../validations/arrayValidations'
import { DataError } from '../results/Errors.js';

/**
 *  solve equation system 3x3
 * @param arr array [][]
 * @returns  values x,y,z 
 */
export function solveLn3x3(arr: number[][]):Result{
    
    let coordsTmp: number[][];
    let x:number   = 0;
    let y:number   = 0;
    let z:number   = 0;
    let acm:number = 0;

    // Block of validations
    let check:Result = iSNumcMtrxAndHasNVec(arr, 3)
    if(!check.status) return result( check.status, check.msg + ' [solveLn3x3]', check.res )
     // end block   
    
    let arr_in: number[][] = [ arr[0], arr[1], arr[2], arr[0], arr[1] ];

        // [ a, b, c, d  ]
        // [ a1,b1,c1,d1 ]
        // [ a2,b2,c2,d2 ]
        // [ a3,b3,c3,d3 ]
        // [ a4,b4,c4,d4 ]

    const coordinates = [
        [0,0,1,1,2,2],   
        [1,0,2,1,3,2],   
        [2,0,3,1,4,2],
        [0,2,1,1,2,0],
        [1,2,2,1,3,0],
        [2,2,3,1,4,0]
    ] 

    coordsTmp = structuredClone(coordinates)
        
    // split cordinates marix in two parts
    const spltMtrxCoord:number[][][] = splitMatrix(coordsTmp)
    
    // select the values of the main mtrix with the cordinates to evalue
    const delta = evalue(arr_in, spltMtrxCoord)

    // modify a copy of the cordinate matrix with 
    // x value cordinates
    const mtrxToX:number[][] = prepareX(coordinates)

    // split cordinates marix in two parts
    const spltMatrixToX:number[][][] = splitMatrix(mtrxToX)
    
    // select the values of the main mtrix with the cordinates to evalue
    const deltaX = evalue(arr_in, spltMatrixToX)  
    
    // case Y
    const mtrxToY:number[][] = prepareY(coordinates)
    const spltMatrixToY:number[][][] = splitMatrix(mtrxToY)
    const deltaY:number = evalue(arr_in,spltMatrixToY)
    
    const mtrxToZ = prepareZ(coordinates)
    const spltMatrixToZ:number[][][] = splitMatrix(mtrxToZ)
    const deltaZ:number = evalue(arr_in,spltMatrixToZ)
    
    try{

        if(delta == 0) throw( new DataError(`Error when evaluating the system of equations delta is equal to zero, the system has infinite values ​​or none`) )
        
        x = deltaX / delta;
        y = deltaY / delta;
        z = deltaZ / delta;

        if( ( (arr[0][0] * x) + (arr[0][1] * y) + (arr[0][2] * z) ) == arr[0][3] ) acm ++;
        if( ( (arr[1][0] * x) + (arr[1][1] * y) + (arr[1][2] * z) ) == arr[1][3] ) acm ++;
        if( ( (arr[2][0] * x) + (arr[2][1] * y) + (arr[2][2] * z) ) == arr[2][3] ) acm ++;

        if( acm === 3){
            return result(true, `deltaX:${deltaX}, deltaY:${deltaY}, deltaZ:${deltaZ}, delta:${delta} `, { x:x, y:y, z:z })
        }else{
            return result( false, `The equations do not belong to the same system of equations OR exist an error to computing x: ${ Math.round(x) } | y: ${ Math.round(y)} | z: ${Math.round(z)} | delta: ${ delta }`, NaN );
        } 

    }catch(error){
        return result(false, error, NaN)
    }
}

/**
 * copy and split the first three vectors of coordinates nad replace
 * of [indice][3] for 3
 * @param arrMain  array[][]
 * @returns  array[][]  
 */
function prepareX(arrMain:number[][]): number[][]{
  
    let arrTemp:number[][] = structuredClone(arrMain)
    
    for(let index = 0; index < 6; index++){
      if(index < 3){ arrTemp[index][1] = 3 }else{ arrTemp[index][5] = 3 }
    } 
    return arrTemp
}
  
/**
 * copy and split the first three vectors of coordinates nad replace
 * of [indice][3] for 3
 * @param arrMain  array[][]
 * @returns  array[][]  
 */
function prepareY(arrMain:number[][]):number[][]{

    let arrTemp:number[][] = structuredClone(arrMain)

    for( let index = 0; index < 6; index++){
        arrTemp[index][3] = 3
    }
    return arrTemp
}
  
/**
 * copy and split the first three vectors of coordinates nad replace
 * of index [index][5] and [index][1] for 3
 * @param arrMain  array[][]
 * @returns  array[][]  
 */
function prepareZ(arrMain:number[][]):number[][]{

    let arrTmp: number[][] = structuredClone(arrMain)

    for(let index = 0; index < 6; index++){
        if(index < 3){ arrTmp[index][5] = 3 } else { arrTmp[index][1] = 3 }
    }  
    return arrTmp
}
  
  /**
   * return the products of main matrix values
   * @param arr   { number[][] 2d }          
   * @param spltMtrxCoord { array [][][] 3d }
   * @returns  { number }
   */
function evalue(arr:number[][], spltMtrxCoord:number[][][]): number{

    let res:number = 0;
    let res2:number = 0;
    
    for(let i = 0; i < 2 ; i++){
        for( let j = 0; j < 3; j++){
            i < 1 ? res += getVectorProduct(arr, spltMtrxCoord[i][j]) : 
                    res2 += getVectorProduct(arr, spltMtrxCoord[i][j])
        }
    }
    return res - res2;
}
 
/**
 * return product of the three values of mina array 
 * @param arr    { number[][] }
 * @param vector { number[][] }
 * @returns       number
 *
*/
function getVectorProduct(arr: number[][], vector:number[]): number{
    return ( 
                arr[vector[0]][vector[1]] * 
                arr[vector[2]][vector[3]] *  
                arr[vector[4]][vector[5]] 
            )
}
  
/**
 * split the coordinates main matrix 
 * @param arrTemp { array[][] }
 * @returns { array[][][] }
 */  
function splitMatrix(arrTemp:number[][]): number[][][]{
    let temp: number[][] = []; 
    let temp2:number[][] = [];
    let re: number[][][]   = [];

    arrTemp.forEach((vector, index)=>{

        if(index < 3){ temp.push(vector) }else{ temp2.push(vector)  }
    })
    re.push(temp);
    re.push(temp2);

    return re;   //[temp,temp2]
}
