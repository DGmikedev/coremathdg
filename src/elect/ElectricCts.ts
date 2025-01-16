import { Result, result } from '../results/results.js'
import { DataError } from '../results/Errors.js' 
import { iSNumeric } from '../validations/arrayValidations.js'



export class ElectricCts{

  static getResistence(iElectric: number, voltage:number):Result{

    let errScan: Result;
    let resistence: number;

    // Validation block
    errScan = iSNumeric(iElectric)
    if(!errScan.status) return result(false, errScan.msg, NaN)
    
    errScan = iSNumeric(voltage)
    if(!errScan.status) return result(false, errScan.msg, NaN)  
    // end block

    try{

      resistence = voltage / iElectric

    }catch(error){
      return result(false,error, NaN)
    }

      return result(true, '', {r:resistence})  
  }

  static getVoltage(iElectric: number, resistence:number):Result{

    let errScan: Result;
    let voltage: number;

    // Validation block
    errScan = iSNumeric(iElectric)
    if(!errScan.status) return result(false, errScan.msg, NaN)
    
    errScan = iSNumeric(resistence)
    if(!errScan.status) return result(false, errScan.msg, NaN)  
    // end block

    try{

      voltage = resistence * iElectric

    }catch(error){
      return result(false,error, NaN)
    }

      return result(true, '', {v:voltage})  
  }

  static getCurrent(voltage: number, resistence:number):Result{

    let errScan: Result;
    let current: number;

    // Validation block
    errScan = iSNumeric(voltage)
    if(!errScan.status) return result(false, errScan.msg, NaN)
    
    errScan = iSNumeric(resistence)
    if(!errScan.status) return result(false, errScan.msg, NaN)  
    // end block
    
    try{

      current = voltage / resistence;

    }catch(error){
      return result(false,error, NaN)
    }
      return result(true, '', {i:current})  

  }

  

}

/*

function addResist(ress, typ){
   let resResult = 0;

   if(typ == 0){
     resResult = ress.reduce((a,b)=> a+b,0)
   }else if(typ == 1){
     ress.forEach((r)=>{
         resResult +=  (1/r)
     })
     resResult = 1/resResult
   }

   return resResult;
}

funtion setResistence(resis){

}  */