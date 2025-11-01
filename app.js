let perc1 = document.querySelector(".perc1")
let perc2 = document.querySelector(".perc2")
let perc3 = document.querySelector(".perc3")

let count = 0

let interval = setInterval(() => {
    count++

    if (count <= 90) perc1.innerText = `${count} %`
    if (count <= 80) perc2.innerText = `${count} %`
    if (count <= 75) perc3.innerText = `${count} %`

    if (count >= 90) clearInterval(interval)

} , 17)