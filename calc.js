function displayNum(num) {
 result.value+=num
}
function evaluateExpr() {
    // expr=result.value
    // op=eval(expr)
    // result.value=op
    result.value = eval(result.value)
    //eval is used to sum the number
}
function allClear() {
    result.value = ""
}
function backSpace() {
    //slice is used for remove the last element
    result.value = result.value.slice(0, -1)
}