
function calc() {
    let number = document.getElementById("number1").value;
    let result = (number*1 + 10);
    document.getElementById("number1").value = result;
    // console.log(result);
    // alert(result);

}

function change() {
    document.getElementById("hw").innerHTML = "YOU CLICKED ME!";

}


document.getElementById('myBtn').onclick = showAns;

function showAns() {
    document.getElementById("ans").innerHTML = document.getElementById("number1").value;
}
