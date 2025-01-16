import { Result, result } from '../results/results.js';
import { iSNumeric, iSNumVect, hasAzeroOrNaN } from '../validations/arrayValidations.js';


/**
 *  Group of methods to electrical circuits
 */
export class ElectricCts{

  /**
   * return the resistence
   * @param iElectric number
   * @param voltage   number
   * @returns   r: number
   */
  static getResistence(iElectric: number, voltage:number):Result{

    let errScan: Result;
    let resistence: number;

    // Validation block
    errScan = iSNumeric(iElectric);
    if(!errScan.status) return result(false, errScan.msg+' [ getResistence[x][] ]', NaN);
    
    errScan = iSNumeric(voltage);
    if(!errScan.status) return result(false, errScan.msg+' [ getResistence[][x] ]', NaN);
    // end block

    try{
      resistence = voltage / iElectric;
    }catch(error){
      return result(false,error, NaN);
    }

      return result(true, '', {r:resistence});
  }

  /**
   * return Voltage
   * @param iElectric number
   * @param resistence  number
   * @returns  v: number
   */
  static getVoltage(iElectric: number, resistence:number):Result{

    let errScan: Result;
    let voltage: number;

    // Validation block
    errScan = iSNumeric(iElectric);
    if(!errScan.status) return result(false, errScan.msg+' [ getVoltage[x][] ]', NaN);
    
    errScan = iSNumeric(resistence);
    if(!errScan.status) return result(false, errScan.msg+' [ getVoltage[][x] ]', NaN);
    // end block

    try{
      voltage = resistence * iElectric;
    }catch(error){
      return result(false,error, NaN);
    }
      return result(true, '', {v:voltage});
  }

  /**
   * return Current
   * @param voltage number
   * @param resistence  number
   * @returns  i: number
   */
  static getCurrent(voltage: number, resistence:number):Result{

    let errScan: Result;
    let current: number;

    // Validation block
    errScan = iSNumeric(voltage);
    if(!errScan.status) return result(false, errScan.msg+' [ getCurrent[x][] ]', NaN);
    
    errScan = iSNumeric(resistence);
    if(!errScan.status) return result(false, errScan.msg+' [ getCurrent[][x] ]', NaN);
    // end block
    
    try{
      current = voltage / resistence;
    }catch(error){
      return result(false,error, NaN);
    }
      return result(true, '', {i:current});
  }

  /**
   * return the sum of a group of resistences 
   * series = 0 
   * parallel = 1
   * @param ressGroup { array }
   * @param ser_parallel  { number 1/0 }
   * @returns  
   */
  static addResistences(ressGroup: number[], ser_parallel:number): Result{

    let errScan: Result;
    let sumReslt: number = 0;

    // Validation block 
    errScan = iSNumVect(ressGroup)
    if(!errScan.status) return result(false, errScan.msg + '[addResistences[x][]]', NaN)

    errScan = hasAzeroOrNaN(ressGroup)
    if(!errScan.status) return result(false, errScan.msg + '[addResistences[x][]]', NaN)

    errScan = iSNumeric(ser_parallel)
    if(!errScan.status) return result(false, errScan.msg + '[addResistences[][x]]', NaN)
    // end block

    try{
      // series
      if(ser_parallel == 0) sumReslt = ressGroup.reduce((a,b)=> a + b, 0)
    
      //parallel
      if(ser_parallel == 1){
        ressGroup.forEach( (r)=>{ sumReslt +=  (1/r) })
        sumReslt = 1/sumReslt
      }
    }catch(error){
      return result(false, error, NaN)
    }
    return result(true, '', { r: sumReslt })
  }

}
