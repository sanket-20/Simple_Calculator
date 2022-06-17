inputVal = document.querySelector('#main-input');
subInputBox = document.querySelector('#sub-input');
historyDiv = document.querySelector('#history');
mainInput=[],  subInput=[];
function getValue(e){
    // alert("hi");
    if(inputVal.value == "0"){
        // console.log('true');
        inputVal.value = e;

    }
    else{
        inputVal.value += e;
    }
}

function clearAll(){
    inputVal.value = 0;
    subInputBox.value = '';
}


function solve(){
    if(inputVal.value != '0'){
        temp = inputVal.value;
        inputVal.value = eval(temp);
        subInputBox.value = temp + " = ";
    
        mainInput.push(eval(temp));
        subInput.push(temp);
        // console.log(subInput);
        // console.log(mainInput);
        showHistory();
    }
}

function showHistory(){
    var history='<div>';
    for(let i=0; i< subInput.length; i++){
        history += "<div class='his'><p>"+ subInput[i] + " = "+"</p><p>"+ mainInput[i]+"</p></div>";
    }
    history += "</div>";
    historyDiv.innerHTML = history;
}


function clearHistory(){
        if(mainInput.length != 0){
            const res = confirm('Are You Sure Want To  Delete History ?');
            historyDiv.innerHTML="";
            mainInput=[];
            subInput=[];
        }
}