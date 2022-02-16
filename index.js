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
function clicked(){
    console.log('eqwe')
    // let text=document.createElement('div')
    // text.innerHTML += `<p>hello</p>`
    // document.getElementById('abc').appendChild(text)

    var table= document.createElement('Table')
    var tableBody = document.createElement('tbody')
    table.appendChild(tableBody)
    var count = 1; 
    for(var i =0; i< 3;i++){
        var tr = document.createElement('tr')
        tableBody.appendChild(tr)
        for(var j = 0; j< 3;j++){
            var td = document.createElement('td')
            td.appendChild(document.createTextNode(count++));
            tr.appendChild(td)
        }
    }
    document.getElementById('a').appendChild(table)
}
