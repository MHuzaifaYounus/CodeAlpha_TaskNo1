
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'Pm' : 'Am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  


function getTask(task_text,currentTime) {
    let task = document.createElement("div")
    task.className = "task"
    document.querySelector(".container").append(task)

    let done = document.createElement("div")
    done.className = "done"
    done.innerHTML = `<?xml version="1.0" ?><svg class="tick" height="30px" version="1.1" viewBox="0 0 19 18" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="rgb(7, 193, 7)" id="Core" transform="translate(-465.000000, -45.000000)"><g id="check-box" transform="translate(465.000000, 45.000000)"><path d="M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M7,14 L2,9 L3.4,7.6 L7,11.2 L14.6,3.6 L16,5 L7,14 L7,14 Z" id="Shape"/></g></g></g></svg>`
    task.append(done)


    let taskText = document.createElement("div")
    taskText.className = "task-text"
    task.append(taskText)



    let text = document.createElement("input")
    text.value = task_text
    text.setAttribute("type", "text")
    text.setAttribute("readonly", "")
    text.className = "input"
    taskText.append(text)

    let deltext = document.createElement("del")
    taskText.append(deltext)

    let options = document.createElement("div")
    options.className = "options"
    taskText.append(options)

    let doneEdit = document.createElement("div")
    doneEdit.className = 'done-edit'
    doneEdit.innerHTML += ` <?xml version="1.0" ?><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M58.3945,32.1563,42.9961,50.625l-5.3906-6.4629a5.995,5.995,0,1,0-9.211,7.6758l9.9961,12a5.9914,5.9914,0,0,0,9.211.0059l20.0039-24a5.9988,5.9988,0,1,0-9.211-7.6875Z"/><path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/></g></svg>`
    options.append(doneEdit)

    let timeBox = document.createElement("div")
    timeBox.className = "time" 
    options.append(timeBox)

    let time = document.createElement("p")
    time.innerText = currentTime
    timeBox.append(time)

    let edit = document.createElement("div")
    edit.className = 'edit'
    edit.innerHTML += `<?xml version="1.0" ?><svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`
    options.append(edit)

    let del = document.createElement("div")
    del.className = 'del'
    del.innerHTML += `  <?xml version="1.0" ?><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"/></svg>`
    options.append(del)

    done.addEventListener("click", () => {
        done.children[0].style.display = "block"
        console.log(text.value); 
        deltext.innerText = text.value 
        text.remove()
    })
    del.addEventListener("click", () => {
        console.log('clicked');
        task.remove()
    })
    edit.addEventListener("click", () => {

        console.log('clicked');
        text.removeAttribute("readonly")
        text.className += " input-editing"
        doneEdit.children[0].style.display = "block"
        doneEdit.children[0].addEventListener("click", () => {
            console.log("click again");
            text.setAttribute("readonly", "")
            text.classList.remove("input-editing")
            doneEdit.children[0].style.display = "none"

        })

    })

}

document.querySelector(".addbtn").addEventListener("click", () => {
    console.log('clicked');
    let inputText = document.querySelector(".inputText").value
    getTask(inputText,formatAMPM(new Date()))
    document.querySelector(".inputText").value = null
})

window.onbeforeunload = function() {
    return "Are you sure you want to leave?";
}
