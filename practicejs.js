const bill = document.querySelector('#bill'); // inpput 
const survey = document.querySelector('#survey'); // select with options
const people = document.querySelector('#people') // input 
const result = document.querySelector('#result') // span 
const each = document.querySelector('#each') // span 
const button = document.querySelector('#button') // button
const tip = document.querySelector('#tip')



button.addEventListener("click", calculate)

function calculate(){
    let index = survey.selectedIndex; 
    let totalTip = Number(bill.value)* Number(survey.options[index].value)/100;
    result.style.visibility = "visible";
    tip.style.visibility = "visible";

    if (people.value > 1){
        result.innerHTML = (totalTip/Number(people.value)).toFixed(2)
        each.style.visibility = "visible" 
    } else {
        result.innerHTML = totalTip.toFixed(2);
        each.style.visibility = "visible";
    }
} 


