

function display(value) {

    let display = document.getElementById('display').value+=value;
}

function clearDisplay() {
    document.getElementById('display').value='';
}

function calculateResult() {
    // try {
    //     display.value = eval(display.value);
    // } catch (error) {
    //     display.value = 'Error';
    // }  
    var value=document.getElementById('display').value;
    var answer= eval(value);
    document.getElementById('display').value=answer;
    
}
