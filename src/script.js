
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

let createTask = (inputValue) => {
    let inputText = inputValue
    let li = document.createElement("li")

    if (inputValue === undefined) {
        inputText = document.getElementById("input-task").value
    }

    //create checkbox
    let checkboxInput = document.createElement("input")
    checkboxInput.type = "checkbox"
    checkboxInput.appendChild(document.createTextNode("\u00D7"))

    //create span
    let spanTask = document.createElement("span")
    spanTask.className = "task"
    spanTask.appendChild(document.createTextNode(inputText))

    //create close button
    let closeButton = document.createElement("button")
    closeButton.className = "delete-btn"
    closeButton.appendChild(document.createTextNode("X"))

    closeButton.addEventListener('click', () => {
        savedTasks = savedTasks.filter((e) => e !== inputText);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        li.remove()
    })

    //append html elements to list item
    li.appendChild(checkboxInput)
    li.appendChild(spanTask)
    li.appendChild(closeButton)

    //append li element to ul
    if (inputText === '') {
        alert("You must write something!");
    } else {
        document.getElementById("task-list").appendChild(li);
        if (inputValue === undefined) {
            savedTasks.push(inputText);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        }
    }

    //reset value of input task
    document.getElementById("input-task").value = ""
}

window.onload = updateTaskList

function updateTaskList() {
    if (savedTasks.length > 1 ) {
        savedTasks.forEach(createTask)
    }
}






