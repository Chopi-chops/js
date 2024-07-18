const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")

const plus = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value + num2Value
    result.textContent = resultValue
}

const minus = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value - num2Value
    result.textContent = resultValue
}

const del = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value / num2Value
    result.textContent = resultValue
}

const umn = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value * num2Value
    result.textContent = resultValue
}

const plusBtn = document.getElementById("plus")
plusBtn.addEventListener("click", plus)
const minusBtn = document.getElementById("minus")
minusBtn.addEventListener("click", minus)
const delBtn = document.getElementById("del")
delBtn.addEventListener("click", del)
const umnBtn = document.getElementById("umn")
umnBtn.addEventListener("click", umn)
