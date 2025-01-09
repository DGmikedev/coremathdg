
import { result, Result } from '../results/results.js'
import {iSNumVect, iSNumeric } from '../validations/arrayValidations.js'

/**
 * return the sum of all number of an array 2d
 * @param vector { array 2d }
 * @returns number
 */
export function vctrSum(vector:number[]): Result{
    // handle the result
    let sum: number = 0;
    
    let {status, msg, res } = iSNumVect(vector)
    if(!status) return result(status, msg + ' [vctrSum]', res)

    try{
        sum = vector.reduce((a,b)=> a+b, 0)
    }catch(error){
        throw( new Error(`Error when generating the sum of the vector - data: [ ${vector }] ${error}`) )
    }

    return result(true,'',sum);
}

/**
 * return an array  with the product of
 * array 2d x number
 * @param vector { array 2d }
 * @param mult   { number }
 * @returns       { vector * mult }
 */
export function vctrXn(vector:number[], mult:number):Result{
    let vectRes:number[] = [];
    let check: Result;

    // Block of validations
    check = iSNumeric(mult);
    if(!check.status) return result(check.status, check.msg + ' [vctXn([][x])]', check.res)

    check = iSNumVect(vector)
    if(!check.status) return result( check.status, check.msg + ' [vctXn[x][]]', check.res )
    // end of block

    try{
        vector.forEach((value)=>{
            vectRes.push(value * mult)
        })  
    }catch(error){
        throw( new Error(`Error when generating the vector product - data: [${vector}] - ${error}`) )
    }  

    return result(true, '', vectRes);
}

