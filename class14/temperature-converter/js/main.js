//Write your pseduo code first! 

// only on click
document.querySelector('#yell').addEventListener('click', temp).value

// convert the value to temp
function temp() {
    let number = document.querySelector('#temp').value
    number =  number * 9/5 + 32

    document.querySelector('#answer').innerText = `${number}`
}
 //put back the temp to dom 

 