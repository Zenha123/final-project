/*function increment() {
    let input=document.getElementById(quantity);
    let currentValue = parseInt(input.Value);
    if (currentValue < 9){
        input.Value=currentValue+1;
    }

}
function decrement(){
    let input=document.getElementById(quantity);
    let currentValue=parseInt(input.Value);
    if (currentValue > 1){
        input.Value=currentValue-1;
    }

}*/
function increment() {
    let quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 9) {
        quantityInput.value = currentValue + 1;
    }
}

function decrement() {
    let quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}