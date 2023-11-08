
// function to display value in input field//////////////

function display(value) {

    let display = document.getElementById('display').value+=value;
}

// function to calculate the result...........

function calculateResult() {
   
    var value=document.getElementById('display').value;
    var answer= eval(value);
    document.getElementById('display').value=answer;
    
}

// function to clear values from input field.......

function clearDisplay() {
    document.getElementById('display').value='';
}