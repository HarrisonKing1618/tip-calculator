const numOfPeople = document.getElementById("no-of-people")
const tip = document.getElementById("tip-percentage")
const ammount = document.getElementById("ammount")
const submit = document.getElementById("submit")
const answer = document.getElementById("answer")

// let numOfPayers = 5
// let tip = (10/100)*10
// let ammount = 100
// let individualAmmount = (ammount + tip)/ numOfPayers
// console.log(individualAmmount)

submit.addEventListener("click", function() {
    
    let tipPercent = Number(tip.value)    
    let bill = Number(ammount.value)
    let people = Number(numOfPeople.value)

    let tipValue = (tipPercent/100) * bill
    let individualAmmount = (bill + tipValue)/people
    answer.innerHTML = `Total ammount = ${individualAmmount}`
    
    console.log(individualAmmount.toFixed(2))
})