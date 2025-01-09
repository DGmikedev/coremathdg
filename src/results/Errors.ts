
export class DataError extends Error{
    constructor(message:string){
        super(message)
        this.name = 'DataError'
        this.message = message
        this.stack = ''
    }
}

export class ComprobationError extends Error{
    constructor(message:string){
        super(message)
        this.name = "ComprobationError"
        this.stack = ''
        this.message = message
    }
}

export class ExecutionError extends Error{
    constructor(message:string){
        super(message)
        this.name = "ExecutionError"
        this.stack = ''
        this.message = message
    }
}