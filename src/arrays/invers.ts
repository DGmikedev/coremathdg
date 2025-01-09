import { Result, result } from "../results/results.js";
import { iScudrticAndNumc, iSNumeric } from '../validations/arrayValidations.js'

/**
 * return de inverse array 2x2
 * @param arr  { array 2x2}
 * @param det  { number }
 * @returns    { array inv }  
 */
export function getInvArr2x2(arr:number[][], det:number): Result{

    let invA:number[][] = [];
    
    // Block of validations
    let {status, msg, res} = iScudrticAndNumc(arr)
    if(!status) return result( status, msg + ' [getInvArr2x2[x][]]', res )

    if(det === 0) return result(false, `Determinant is equal to zero [getInvArr2x2[][${det}]]`, NaN)    
    
    let resn: Result = iSNumeric(det)
    if(!resn.status) return result( resn.status, resn.msg + ' [getInvArr2x2[][x]]', resn.res )
    // end block    
    
    try{
        invA.push([arr[1][1]/det , (arr[0][1] * -1 )/det ]); 
        invA.push([ (arr[1][0] * -1 )/det , arr[0][0]/det ]); 
    }catch(error){
        return result(false, error, NaN )
    }

    return result(true, '', invA)

}

//     [a,b] [1,2] => [ [a*1 + b*3], [a*2 + b*4] ]
//     [c,d] [3,4]    [ [c*1 + d*3], [c*2 + d*4] ]

/**
 * 
 * @param arr     { array }
 * @param isInvrs { array ?  inverse }
 * @returns       { array identityMtrx? }
 */
export function isInvers2x2(arr:number[][], isInvrs:number[][]): Result{

    let identityMtrx:number[][];
    let acm:number = 0;

    // Block of validations
    let arrO: Result = iScudrticAndNumc(arr)
    if(!arrO.status) return result( arrO.status, arrO.msg + ' [isInvers2x2[x][]]', arrO.res )

    let arrInv: Result = iScudrticAndNumc(isInvrs)
    if(!arrInv.status) return result( arrInv.status, arrInv.msg + ' [isInvers2x2[][x]]', arrInv.res )
    // end block 

    try{
        identityMtrx = [
            [ ( arr[0][0] * isInvrs[0][0] ) + ( arr[0][1] * isInvrs[1][0] ) ,  ( arr[0][0] * isInvrs[0][1] ) + ( arr[0][1] * isInvrs[1][1] ) ],
            [ ( arr[1][0] * isInvrs[0][0] ) + ( arr[1][1] * isInvrs[1][0] ) ,  ( arr[1][0] * isInvrs[0][1] ) + ( arr[1][1] * isInvrs[1][1] ) ]
        ]

        identityMtrx.forEach((vector)=>{
            acm += vector.reduce((a,b)=>a+b,0 )
        })

        if(acm != 2) return result(false, 'Array 2 Not inverse of Array1',false  )

    }catch(error){

        return result(false, error, NaN)
    }

    return result(true, 'Arra 2 are Invers of Array 1', {mtrx:identityMtrx, inv:true} )
}