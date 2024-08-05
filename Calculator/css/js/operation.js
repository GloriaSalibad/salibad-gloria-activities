function Operation(oper) {
    document.getElementById('operation-input').value = oper;

    document.getElementById('previous').value = document.getElementById('number-input').value;
    equal();
}

    document.getElementById('previous').value = document.getElementById('number-input').value;
    document.getElementById('number-input').value = "";

function equal() {
   var textbox =  document.getElementById("number-input").value;
   var previous =  document.getElementById("previous").value;

   var operation =  document.getElementById("operation-input").value;

   switch(operation) {
    case '+':
    textbox.value = Number(previous) + Number(textbox.value);
    break;
   }

 Case '-':
    textbox.value = Number(previous) + Number(textbox.value);
    break;
}

