/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const btn = document.getElementById("convert-btn")
let lengthValue = document.getElementById("length-value")
let volumeValue = document.getElementById("volume-value")
let massValue = document.getElementById("mass-value")
let milliValue = document.getElementById("milli-value")


btn.addEventListener("click", function(){
    const inputValue = document.getElementById("input-el").value
    
    const metertoFeet = inputValue * 3.281
    const feettoMeter = inputValue / 3.281
    const litertoGallon = inputValue * 0.264
    const gallontoLiter = inputValue / 0.264
    const kilotoPound = inputValue * 2.204
    const poundtoKilo = inputValue / 2.204
    const millitoGram = inputValue / 1000
    const gramtoMilli = inputValue * 1000
    
    console.log(inputValue)
    lengthValue.textContent =  `${inputValue} meters = ${metertoFeet.toFixed(3)} feet | ${inputValue} feet = ${feettoMeter.toFixed(3)} meters`
    volumeValue.textContent =  `${inputValue} liters = ${litertoGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallontoLiter.toFixed(3)} liters`
    massValue.textContent = `${inputValue} kilos = ${kilotoPound.toFixed(3)} pounds | ${inputValue} pounds = ${poundtoKilo.toFixed(3)} kilos`
    milliValue.textContent =`${inputValue} milligrams =${millitoGram.toFixed(3)} grams | ${inputValue} grams = ${gramtoMilli.toFixed(3)} milligrams`
})