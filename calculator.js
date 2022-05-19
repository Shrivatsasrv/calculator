function display(clickedElement)
{
    // console.log(clickedElement);
    // console.log(clickedElement.innerText);
    let clickedBtnVal=clickedElement.innerText;
    let expression=document.getElementById("display").value;
    expression=expression+ clickedBtnVal;
    document.getElementById("display").value=expression;
}

function calculate(){
    let expression=document.getElementById("display").value;
    let result=eval(expression);
    document.getElementById("display").value=result;
    // eval is method which evaluates the given expression.

}

function clearAll(){
    document.getElementById("display").value="";
}

function clearOneChar(){
    let expression=document.getElementById("display").value;
    expression=expression. substring(0,expression.length-1);
    document.getElementById("display").value=expression;

}