// print
// alert("Hello JS!")
console.log("Hello console")

// переменные
var a = 7
let b = "hi"
const c = true
let d = null
let e = undefined
let f = `my number: ${a}`
let names = ["Beknazar", "Emir", "Amantur"]
let profile = {
    "name": "Aziret",
    age: 24,
    code: "python",
}
// c = 9 - error

// console.log(a, b, c, d, e, NaN)
// console.log(f)
// console.log(names[0])
// console.log(profile["name"], profile["age"], profile.code)

// if
if (a > 5) {
    console.log("a more than 5")
    console.log("end")
}

// for
for (let i=0; i < names.length; i++) {
    console.log(names[i])
}

for (e in names) {
    console.log(e)
}

// function
function sum_2(a, b) {
    let c = a + b
    return c
}

const mult_2 = (a, b) => a * b

console.log(sum_2(4, 9))
console.log(mult_2(5, 8))
