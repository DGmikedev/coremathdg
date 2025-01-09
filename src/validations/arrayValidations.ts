import { Result, result  } from "../results/results.js";
import { DataError } from "../results/Errors.js";

/**
 * 
 * @param arr { array }
 * @returns    { boolean }
 */
export function iScudrticAndNumc(arr:number[][]):Result{

    let lng: number = arr.length;
    let msgW: string = 'Something are wrong square matrix';
    let ind:number = 0;

    try{

        arr.forEach((vector, index)=>{

            if(vector.length != lng){
               
               ind = index 
               throw( new DataError(`${msgW} NOT are Square Matrix  ${lng} x ${vector.length}`) )  
            } 
    
            vector.forEach((number)=>{
                ind = index 
                if( isNaN(number) || typeof(number) == 'boolean' ){
                  throw( new DataError(`${msgW} this have a Not Number: [ ${number} ]  ${lng} x ${vector.length} --  ${arr} `) )  
                } 
            })
    
        });

    }catch(error){

        return result(false,error, arr[ind])
    }
    

    return result(true, {'lng':lng, 'txt':`${lng} x ${lng}`}, true)

}

/**
 * return if all data, in a vector are numbers
 * @param vect { number }
 * @returns 
 */
export function iSNumVect(vect: number[]):Result{

    try{
        vect.forEach((num)=>{
            if( isNaN(num) ) throw( new DataError(`Error in vector this have a NOT Number [ ${num} ]`) )
        })
    }catch(error){
        return result(false, error, NaN)
    }

    return result(true, '', true)
}


/**
 *  retur if a value are of numeric type
 * @param number 
 * @returns 
 */
export function iSNumeric(number: number):Result{

    try{

        if(isNaN(number)) throw( new DataError(`Error value is NOT a Number [ ${number} ]`)  )

    }catch(error){

        return result(false,error, NaN )
    }

    return result(true, '', true) 

}

export function iSNumcMtrxAndHasNVec(arr:number[][], vectrsNum:number): Result{

    try{

        if(!(vectrsNum == arr.length)) throw( new DataError(`Matrix have not number rows required = required: ${vectrsNum} | gived ${arr.length} `) ) 
        if(arr.length > 1) {

            arr.forEach((vector)=>{
                vector.forEach((number)=>{
                    if( isNaN(number) ) throw( new DataError( `Error matrix has a NOT number [ ${number} ]` ) )
                })
            })
        }else{
            return result( false, 'Matrix has no more that one vector', NaN )
        }
    }catch(error){ 
        return result( false, error, NaN ) 
    }

    return result(true, '', arr)
}
