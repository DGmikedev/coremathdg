import {Result, result} from '../results/results.js'
import { iSSquareAndNumc } from '../validations/arrayValidations.js'

/**
 * return the transposed matrix of a square (array) matrix
 * @param arr { square matrix_nxn }
 * @returns   { transposed matrix }
 */
export function trsnpSqrMtrx(arr: number[][]):Result{

    let arrTr: number[][] = structuredClone(arr)

    // validation of data
    let {status, msg, res } = iSSquareAndNumc(arr)
    if (!status)return result(status, msg + ' [trsnpSqrMtrx]', res)

    try{
        arr.forEach((vector, index)=>{
            vector.forEach((num, inx)=>{
                arrTr[index][inx] = arr[inx][index]
            })
        });

    }catch( error ){
        return result(false, error , NaN)
    }
    return result(true, '', arrTr)
}
