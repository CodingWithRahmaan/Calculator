function btnClick(val) {
   let cal = document.getElementById("calculation")
  
  let lastChar = cal.value.slice(-1);

  if( val === "C"){
    cal.value = "" 
  }
  else if((lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") && (val === "+"|| val === "-" || val === "*" || val === "/")){
    cal.value = cal.value.slice(0,-1) + val
  } else if(val  === "CE"){
    cal.value = cal.value.slice(0,-1)

  }else if(val=== "="){
    cal.value = eval(cal.value)
  }else{
    cal.value = cal.value + val
  }

}





