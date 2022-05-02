// Calling
let taskText = document.getElementById("taskText")
let taskDate = document.getElementById("taskDate")
let taskTime = document.getElementById("taskTime")
let display = document.getElementById("display")
let table = document.getElementById("table")

// The List
let myTasks = []

// clear form
function clearForm() {
    taskText.value = ""
    taskDate.value = ""
    taskTime.value = ""
}

// validation
function myValidation() {
    if (taskText.value == "" || taskDate.value == "" || taskTime.value == "") return false;
    return true
}


// send to List
function sendToMyTasks() {
    let tempTask = { text: taskText.value, date: taskDate.value, time: taskTime.value }
    // Error
    if (!myValidation()) {
        alert("Please fill in all required fields");
    }
    // valid
    else {
        myTasks.push(tempTask)
        clearForm()
        console.log("Task added to myTasks")
    }
}

// save to local storage
function saveToLocalStorage() {
    localStorage.setItem("My Tasks", JSON.stringify(myTasks))
}

// load from local storage
function loadFromLocalStorage() {
    theList = JSON.parse(localStorage.getItem("My Tasks"))
}

// display 
function displayMyTasks() {
    loadFromLocalStorage()
    table.innerHTML = ``
    if (theList != null) {
        theList.forEach((item, i) => {
            table.innerHTML += `
               <main class="animate__animated animate__fadeInLeft">
               <div class="mydivouter">
                 <div id="task${i + 1}" class="card">
                     <div class="text_area">
                       <p>${item.text}</p>
                     </div>
                     <p class="date_time" style="color: #dc3545;">
                         ${item.date}<br>${item.time}
                     </p>
                     
                     <button onclick="removeFromList(${i})" class="mybuttonoverlap"><img src="./images/x-icon-png-17.jpg" style="width: 35px; height: 35px;"></button>
                 </div>
                </div>
               </main>
           `
        })
        console.log(theList)
    } else {
        console.log("myTasks: Zero Tasks")
    }
}

// "save" click
function saveTask() {
    sendToMyTasks()
    saveToLocalStorage()
    loadFromLocalStorage()
    displayMyTasks()
}

// remove task
function removeFromList(ind) {
    myTasks.splice(ind, 1);
    console.log("Task Removed from myTasks")
    saveToLocalStorage()
    loadFromLocalStorage()
    displayMyTasks()
}

// remove All tasks
function clearList() {
    localStorage.clear(myTasks)
    myTasks = []
    console.log("myTasks cleared")
    table.innerHTML = ``
}

function loadFromLocalStorage2() {
    myTasks = JSON.parse(localStorage.getItem("My Tasks"))
}

loadFromLocalStorage2()
