function c(value)  
{
document.getElementById("result").value=value;  
}
function calc(value)  
{
    document.getElementById("result").value+=value;  
}  
function calculate()  
{ 
    c(eval(document.getElementById("result").value))  
} 

