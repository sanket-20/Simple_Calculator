const inputVal = document.querySelector('#main-input');
const subInputBox = document.querySelector('#sub-input');
const historyDiv = document.querySelector('#history');
mainInput=[],  subInput=[];
let opt;
let percentage;

var toggleIndex = 1;
function getValue(e){
    // alert("hi");
    if(inputVal.value == "0")
    {
        // console.log('true');
        inputVal.value = e;
    }
    else{
            inputVal.value += e;
            console.log(inputVal.value);
        }
}

let get_opretor = (num)=>{
    if(inputVal.value!='0'){
        if(inputVal.value.charAt(inputVal.value.length - 1)=='+'||inputVal.value.charAt(inputVal.value.length - 1)=='*'||inputVal.value.charAt(inputVal.value.length - 1)=='/')
        {
         inputVal.value = inputVal.value.slice(0,-1) + num;
        }
        else{
            if(inputVal.value.charAt(inputVal.value.length - 1)!='-')
            inputVal.value+=num;
        }
    }
    else{
        if(num=='-'){
            inputVal.value='-';
        }
    }
    opt = num;
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


function percent()
{
    if(opt == '+'|| opt=='-')
    {
        equation = inputVal.value;
        let arr = equation.split(opt);
        percentage = (arr[0]*arr[1])/100; 
        console.log(percentage);
        inputVal.value = arr[0]+opt+percentage;   
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

function toggleMode(){
    if(toggleIndex%2==1){
        document.querySelector('#mode').innerText = "Dark Mode";
        document.querySelector('#mode').style.color = "black";

        // inputVal.style.color = "black";
        // subInputBox.style.color = "black";
        // historyDiv.style.color = "black";
    }
    else{
        document.querySelector('#mode').innerText = "Light Mode";
        document.querySelector('#mode').style.color = "white";

        // inputVal.style.color = "white";
        // subInputBox.style.color = "white";
        // historyDiv.style.color = "white";
    }
    toggleIndex+=1;
    
}



document.querySelector('#history').addEventListener('click', function(e){
    // console.log(e.target.id);
    // console.log(e.target);
    subInputBox.value = subInput[e.target.id] + " = ";
    inputVal.value = mainInput[e.target.id];
});

