import { Result, result } from "../results/results.js";
import { iSNumVect } from "../validations/arrayValidations.js";
import { isALetterFrmAlph } from "../validations/singleValues.js";

/**
 * make the representation of a equation
 * @param values   { number[] }
 * @param degrees  { number[] }
 * @param variable { string }
 * @returns 
 */
export function getRepresentEquationPolinomial(values: number[], degrees: number[], variable: string ='x'): Result{
    
    let eq: string =''
    let value: string = '';
    let scanErr: Result;

    // Block of validation
    scanErr = iSNumVect(values);
    if(!scanErr.status) return result(false, scanErr.msg, NaN);

    scanErr = iSNumVect(degrees);
    if(!scanErr.status) return result(false, scanErr.msg, NaN);

    scanErr = isALetterFrmAlph(variable);
    if(!scanErr.status) return result(false, scanErr.msg, NaN);

    // end block of validation

    
    for(let i = 0; i < values.length; i++){
      
      // set de simbol <+,-> in the coefficient
      value = setSimbol(values[i])
      
      // sience i != last one
      if(i != values.length - 1){ 
        
        // if the coefficient is 1 or -1, remove the coefficient
        if(value === '-1' ) value = value.slice(0,1) // set just '-'
        if(value === '+1' ) value = value.slice(0,1) // set just '+'
      }
      
      // Assemble the monomials and then attach them
      // to the variable eq
      eq += makeMonomial(value, variable, degrees[i])
  
    }
  
    // Remove the + simbol in the first caracter
    eq.charAt(0) == '+' ? eq = eq.slice(1) : ''; 
    
    return result(true,'',eq);
  }

 // assemble a representation of a monomial
  // value * variable ^ degree
  /**
   * 
   * @param value 
   * @param variable 
   * @param degree 
   * @returns 
   */
  function makeMonomial(value: string, variable: string, degree:number){
  
    let mono: string = '';
  
    degree >  1 ? mono += value + variable +'^' + degree : // ax^2 full monomial
    degree == 1 ? mono += value + variable               : // ax   just coefficient and the varable
    degree == 0 ? mono += value                     : '' ; // a    just the coefficicent
  
    return mono;
  
  }

// 
/**
 * make the representation of a equation
 * the values ​​of the degree matrix are subtracted by one degree and fitted into the equation
 * @param arrVal   { arrar }
 * @param arrDegre { array }
 * @param variable { string }
 * @returns    equation represntated by string
 */

export function setRprstDerivEq(arrVal: number[] ,arrDegre: number[] ,variable: string='x'): Result{
    
  let eq: string    = '';
  let value: string = '';
  let degre: string = '';
  let tmp: any = '';
  
  for(let i = 0; i < arrVal.length; i++){
    
    // set de simbol <+,-> in the coefficient
    value = setSimbol( arrVal[i]  *  arrDegre[i]  );

    tmp = arrDegre[i] -1
    degre = ( arrDegre[i] -1 ).toString(); 
    //tmp = ( arrDegre[i] -1 ).toString(); 

    // if the coefficient is 1 or -1, remove the coefficient
    if( value === '-1' || value === '+1'  ) value = value// set just '- o + '

    tmp >  1 ? eq += value + variable +'^' +  degre:
    tmp == 1 ? eq += value + variable : 
    tmp == 0 ? eq += value : '' ;

    // // add monomials to the equation
    // degre >  1 ? eq += value + variable +'^' +  degre:
    // degre == 1 ? eq += value + variable : 
    // degre == 0 ? eq += value : '' ;

  }

  // Remove the + simbol in the first caracter
  eq.charAt(0) == '+' ? eq = eq.slice(1) : ''; 
  
  return result(true, '', eq);

}


/**
  * Sets the simbol < + > or < - > to the character supplied
  * @param num { number } 
  * @returns < '+' or '', or '-' > + nuemric string
  */
function setSimbol(num: number):string{
    
  let str: string = '';
  
  if( num < 0 ){ str = '-' + ( num * -1 ).toString() }
  else if( num == 0 ){ str = '' }
  else if( num > 0)  { str =  '+'  +  num.toString() }
  
  return str
  
}



    /*
  // make the representation of a equation
  function getRepresentOfDerivatePolinEqDesc(values, degrees, variable='x'){
  // setRprstDerivEq
    let degree: any = 0.0;
    let eq: string =''
    let value: any = '';
    
    for(let i = 0; i < values.length; i++){
      
      // coefficient * degree
      value = parseFloat(values[i]) * parseFloat(degrees[i]) 
  
      // set de simbol <+,-> in the coefficient
      value = setSimbol(value)
  
      // degree minus 1
      degree = (parseFloat(degrees[i])-1).toString() 
  
      // Assemble the monomials and then attach them
      // to the variable eq
         eq += makeMonomial(value, variable, degree)
  
    }
  
    // Remove the + simbol in the first caracter
    eq.charAt(0) == '+' ? eq = eq.slice(1) : ''; 
    
    return eq
  
  }
  
  
  // get a representation of a polinomial
  // adding monomials to ensdambled a polynimail 
  /* 
  input
    monomials [
      [a, exp, varaible],
      [b, exp, variable],
      [c, exp, variable]
      ]
  
    retrun ' a * variable ^exp + b * variable ^exp + c * variable ^exp +  '
  */

    /*
  function getRepresentPolinomials(monomials){
    
    let eq    = '';
    let value = 0;
  
    monomials.forEach((monomial)=>{
  
      // set de simbol <+,-> in the coefficient
      value = setSimbol(monomial[0])
  
      // Assemble the monomials and then attach them
      // to the variable eq
      eq += makeMonomial(value, monomial[2], monomial[1])
  
    }) 
  
     // Remove the + simbol in the first caracter
     eq.charAt(0) == '+' ? eq = eq.slice(1) : ''; 
    
  
    return eq
  }
  
  
 
  
 
  
  /*
  export{ getRepresentEquationPolinomialDesc, 
          getRepresentOfDerivatePolinEqDesc, 
          getRepresentPolinomials 
        }
*/