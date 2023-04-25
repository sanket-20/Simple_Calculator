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

function removeLastNum(){
    if(inputVal.value != '')
    {
        if(inputVal.value.length > 1)
            inputVal.value = inputVal.value.slice(0,-1);
        else{
            inputVal.value = inputVal.value.slice(0,-1);
            inputVal.value = "0";
        }
    }  
    else{
        inputVal.value = "0";
    }

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
    mainInput.reverse();
    subInput.reverse();
    var history='<div>';
    for(let i=0; i< subInput.length; i++){
        history += "<div class='his'><i class='fas fa-arrow-alt-circle-left' id="+i+"></i><p>"+ subInput[i] + " = "+"</p><p>"+ mainInput[i]+"</p></div>";
    }
    history += "</div>";
    historyDiv.innerHTML = history;
}


function clearHistory(){
        if(mainInput.length != 0){
            const res = confirm('Are You Sure Want To  Delete History ?');
            if(res == true)
            {
                historyDiv.innerHTML="";
                mainInput=[];
                subInput=[];
            }
//             historyDiv.innerHTML="";
//             mainInput=[];
//             subInput=[];
        }
}


tem=1;
function hideHistoryBox(){
    if(tem%2==1){
        document.querySelector('.right-section').style.visibility="visible";
    }
    else{
        document.querySelector('.right-section').style.visibility="visiblehidden";
    }
    tem+=1;
}


document.querySelector('#history').addEventListener('click', function(e){
    // console.log(e.target.id);
    // console.log(e.target);
    subInputBox.value = subInput[e.target.id] + " = ";
    inputVal.value = mainInput[e.target.id];
});
