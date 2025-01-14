import { result, Result} from '../results/results.js';
import { determinant2x2 } from '../arrays/determinants.js';
import { iSNumcMtrxAndHasNVec } from '../validations/arrayValidations.js'

/**
* 
* solve an system of equations by cramer method
*
* @eqi  { array }  first array  of values from equation 1
* @eq2i { array }  second array of values from equation 2
*
* return { x: value of x, y: value of y }
 * 
 * 
 */

export function solveLn2x2(arr:number[][]): Result{

    let x: number     = 0;   // x value
    let y: number     = 0;   // y value
    let t: number     = 0;   // degree of testing  0 and 1 = bad, 2 = ok
    let delta:number  = 0;
    let deltaX:number = 0;
    let deltaY:number = 0;
    let check:Result = iSNumcMtrxAndHasNVec(arr, 2)
    // Block of validation
    if(!check.status) return result( check.status, check.msg + ' [solveLn2x2]', check.res )

    // [a, b, c]
    // [d, e, f]
   

    try{
        // delta         [a, b] [d, e]          
        delta  = determinant2x2( [ [arr[0][0] , arr[0][1] ] , [ arr[1][0] , arr[1][1] ] ] ).res;

        // delta x       [b, c] [e, f]
        deltaX = determinant2x2( [ [arr[0][2] , arr[0][1] ] , [ arr[1][2] , arr[1][1] ] ] ).res;

        // delta y        [a, c] [d, f]  
        deltaY = determinant2x2( [ [arr[0][0] , arr[0][2] ] , [ arr[1][0] , arr[1][2] ] ] ).res;
        x = deltaX/delta; 
        y = deltaY/delta; 

    /* TEST AND SEND*/

    // if delta = 0 the system have infiny solutions
    if( delta == 0 ) return result(false, 'delta = 0, infity solutions betweet equations',{x:NaN, y:NaN} ) 

    // testing values in eq1
    if( ( ( arr[0][0]*x ) +  ( arr[0][1]*y ) ) == arr[0][2] )  t++;

    // testing values in eq2
    if( ( ( arr[1][0]*x ) +  ( arr[1][1]*y ) ) == arr[1][2] ) t++;

    }catch(error){
        throw( new Error(`Error when generating solution slvLn2x2 - data:${arr}, [ ${ delta.toString()} ], [ ${deltaX.toString() } ], [ ${deltaY.toString()} ] `))
    }

    // if allright send solutions
    if( t === 2){
       return result(true, { delta:delta, delta_x:deltaX, delta_y:deltaY },  { x:x, y:y } );

    // if an equation is not equal to result 
    }else{
       return result( false, `The equations do not belong to the same system of equations OR exist an error to computing x: ${ Math.round(x) } | y: ${ Math.round(y)} | delta: ${ delta }`, NaN );
    }

}