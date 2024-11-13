const form = document.querySelector("#new-item-form")
const input = document.querySelector("#item-input")
const list = document.querySelector("#list")

form.addEventListener("submit", e => {
    e.preventDefault()

    const item = document.createElement("div")
    item.classList.add("list-item")
    item.innerText = input.value

    input.value = ""

    list.appendChild(item)

    item.addEventListener("click", () => {
        list.removeChild(item)
    })
})



