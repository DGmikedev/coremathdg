let str = "";
let val = 0;
let acmdot = 0;
let pare = 0;
let expRegCero = new RegExp("/[!^π√]/");

const disp = document.getElementById("disp");

document.getElementById("ac").addEventListener("click", ()=>{ deldisply() });

document.getElementById("num9").addEventListener("click",()=>{ concat_strANDshow("9") });
document.getElementById("num8").addEventListener("click",()=>{ concat_strANDshow("8") });
document.getElementById("num7").addEventListener("click",()=>{ concat_strANDshow("7") });
document.getElementById("num6").addEventListener("click",()=>{ concat_strANDshow("6") });
document.getElementById("num5").addEventListener("click",()=>{ concat_strANDshow("5") });
document.getElementById("num4").addEventListener("click",()=>{ concat_strANDshow("4") });
document.getElementById("num3").addEventListener("click",()=>{ concat_strANDshow("3") });
document.getElementById("num2").addEventListener("click",()=>{ concat_strANDshow("2") });
document.getElementById("num1").addEventListener("click",()=>{ concat_strANDshow("1") });

document.getElementById("num0").addEventListener("click",()=>{ 

  if(specialChartIsTeLast(["!", "π", "^", "√", "0"]) ){
    alert("SI")
  }
  concat_strANDshow("0")
  /* if( str[str.length] == expRegCero.test(str) ){
    console.log("Funcion")
  } */
  /* if(str.length == 0 ){
    alert(0)
  }else if( str[str.length] == "!" || str[str.length] == "^" || 
            str[str.length] == "π" || str[str.length] == "√"  ){

  } concat_strANDshow("0") */
  
});

document.getElementById("numdot").addEventListener("click",()=>{
  
  if(str.length == 0 ){
    concatstr("0.")
    acmdot = 1;
  }

  if(acmdot == 0){
    acmdot = 1;
    concat_strANDshow(".")
  }
});

document.getElementById("rad").addEventListener("click",()=>{

  concat_strANDshow("√")   
  // concatstr("√")
  // showresult()
});

document.getElementById("pi").addEventListener("click",()=>{
  concat_strANDshow("π") 
  // concatstr
  // showresult()
});

document.getElementById("pow").addEventListener("click",()=>{
  concat_strANDshow("^") 
  // concatstr
  // showresult()
});

document.getElementById("fact").addEventListener("click",()=>{
  concat_strANDshow("!")
  // concatstr
  // showresult()
});


function showstr(val){ 
  disp.innerHTML=val 
  showresult()
}

document.getElementById("parent").addEventListener("click",()=>{
  
  if(pare == 0){
     if(str[str.length - 1] == ")" ){
      concatstr("*(")
      pare = 1
      showresult()
    }else{
      concatstr("(")
      pare = 1
      showresult()
    } 
  }else{
    if(str[str.length - 1] == "(" ){
      // No despilega nada en display
    }else{
      concatstr(")")
      pare = 0
      showresult()
    }
  }

});
function deldisply(){
  str = "";
  acmdot = 0
  pare = 0
  showresult()
  disp.innerHTML="0"
}

function concat_strANDshow(val){
  concatstr(val)
  showresult()
}

/**
 * Busca el último simbolo de la cadena principal
 * y si lo encuentra retorna true, si no es así 
 * retorna false
 * ejemplos de busquedas: 
 * "π" "^" "√" "/" "*" "-" "+" 
 */
function specialChartIsTeLast(arrChar){

  arrChar.forEach((char)=>{

    if(str[str.length] == char ) return true

  })

  return false;

}

function concatstr(val){ return str = str+val }
function showresult(){ disp.innerHTML=str }
