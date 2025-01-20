import { result, Result } from "../results/results.js";
import { iSNumVect } from "../validations/arrayValidations.js"

/**
 * evaluate a coefficient raised to an exponent 
 * @param coefficient   { number }       
 * @param exponent      { number }       
 * @param valueVaraible { numebr }       
 * @returns 
        example:   coefficcient = 3,  exponent = 4, valueVaraible = 2
        1.- 3x^4
        2.- 3(2)^4
        3.- return => 48
 */
export function evalMonomial(coefficient: number, exponent:number, valueVaraible:number): Result{
    let res:number = 0;

    let errScan: Result = iSNumVect([coefficient, exponent, valueVaraible])
    if(!errScan.status) return result(false, errScan.msg, NaN)
    try{
        res += ( coefficient ) * ( valueVaraible**(exponent) ) 
    }catch(error){
        return result(false, error, NaN)
    }
    return result(true, '', res)
  }