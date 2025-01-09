
export interface Result {
    status:boolean,
    msg: any,
    res: any
}

export function result( stat:boolean, msg: any, res:any ):Result{

    let result: Result = {
        status: stat,
        msg: msg,
        res:res
    }

    if(stat){
        return result;
        
    }else{
        // future use
        return result
    }
    
}