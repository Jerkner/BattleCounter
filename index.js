
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count + "/5"
}


function save() {
    let countDash = "\n" + count + "/5"
    saveEl.textContent += countDash
    countEl.textContent = "0/5"
    count = 0
}