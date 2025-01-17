import { Result, result  } from "../results/results.js";
import { DataError } from "../results/Errors.js";

export function isZeroOrNaN(number: number):Result{

    try{
        if( number == 0 || isNaN(number) ) throw( new DataError(`Error at the value, this a NaN or Zero - value: [${number}] `) )
    }catch(error){
        return result(false, error, NaN)
    }
    return result(true, '', true)
}