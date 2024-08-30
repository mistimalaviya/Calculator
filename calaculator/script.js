function cal(a) {
    document.getElementById("misti").value += a;

}
function can() {
    document.getElementById("misti").value = "";
}
function del() {
    let display = document.getElementById("misti");
    display.value = display.value.slice(0, -1);
}
function calc() {
    let a = document.getElementById("misti").value;

    document.getElementById("misti").value = eval(a)
}

