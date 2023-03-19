
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

let array = []

function increment() {
    count += 1
    countEl.textContent = count + "/5"

    if (count === 5) {
    document.getElementById("increment-btn").disabled = true;
    }
}

function save() {
    let countDash = "\n" + count + "/5"
    saveEl.textContent += countDash
    countEl.textContent = "0/5"
    count = 0
    document.getElementById("increment-btn").disabled = false;
    array.push(countDash)
    console.log(array)
    if (array.length > 4 ) { 
        document.getElementById("increment-btn").disabled = true;
        document.getElementById("save-btn").disabled = true;
}
}

function reset() {
    count = 0
    countEl.textContent = "0/5"
    saveEl.textContent = "Previous sets: "
    document.getElementById("increment-btn").disabled = false;
    array = []
    document.getElementById("save-btn").disabled = false;

}
