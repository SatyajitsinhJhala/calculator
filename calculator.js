var x="";
var y="";
var operator="";
var result;
var flag=0;
const numberButton=document.querySelectorAll(".number");
const symbolButton=document.querySelectorAll(".symbol");

document.getElementById("equal").addEventListener('click',function(){
    if(x!=""&&y!=""){
        operate(x,y,operator);
    }
})
document.getElementById("clear").addEventListener('click',function(){
    clear();
});
document.getElementById("display").innerHTML
numberButton.forEach(button=>{button.addEventListener('click',function(){
    if(flag==1){
        y+=this.value;
        document.getElementById("display").innerHTML=y;
        console.log(y);
    }else{
        if(operator==""){
            x+=this.value;
            document.getElementById("display").innerHTML=x;
            console.log(x);
        }else{
            y+=this.value;
            document.getElementById("display").innerHTML=y;
            console.log(y);
            
        }
    }
        
    });
});
symbolButton.forEach(button=>{button.addEventListener('click',function(){
        operator="";
        operator+=this.value;
        document.getElementById("display").innerHTML=operator;
        console.log(operator);

    });
});
const operate=function(x,y,operator){
    if(operator=='+'){
        result=add(parseFloat(x),parseFloat(y));
    }else if(operator=='-'){
        result=subtract(parseFloat(x),parseFloat(y));
    }else if(operator=='*'){
        result=multiply(parseFloat(x),parseFloat(y));
    }else if(operator=='/'){
        result=divide(parseFloat(x),parseFloat(y));
    }
    document.getElementById("display").innerHTML=result.toFixed(2);
    console.log(result.toFixed(2));
    setx();
};
const setx=function(){
    x=result;
    y="";
    operator="";
    result="";
    flag=1;
}
const clear=function(){
    x="";
    y="";
    operator="";
    result="";
    document.getElementById("display").innerHTML="";
    flag=0;
}

const add=function(a,b){
    return a+b
};
const subtract=function(a,b){
    return a-b
};
const multiply=function(a,b){
    return a*b
};
const divide=function(a,b){
    if(b=="0"){
        console.log("Invalid");
    }else{
        return a/b;
    }
    
};
