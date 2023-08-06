const inputTask = document.getElementById('nameTaskButton')
const buttonTask = document.getElementById('createTask')
const listTask = document.getElementById('list')
const done = document.getElementsByClassName('doneTask')
const complete = document.getElementsByClassName('completeTask')

// console.log(inputTask.value)
const notes = [
    {
        title:'Показать мою тестовую программу)',
        completed: false,
    },
    {
        title:'С чистой совестью ложиться спать))',
        completed: true,
    },
]

function rander(){
    listTask.innerHTML = ''
    if(notes.length === 0) {
        listTask.innerHTML = '<p>Нет элементов!</p>'
    }
    for (let i = 0; i<notes.length; i++){
        listTask.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
    
}

rander()


done.onclick = function(){

    
}
buttonTask.onclick = function(){
    if(inputTask.value.length === 0){
        return
    }
    const newNote = {
        title: inputTask.value,
        completed: false,
    }
  
    for(let i = 0; i < notes.length; i++){
        if(notes[i].title == inputTask.value) {
            notes.splice(i, 1)
        } 
    }
    notes.push(newNote)
    
    rander()    
    inputTask.value = ''
}

listTask.onclick = function(event){
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if(type === 'remove'){
            notes.splice(index, 1)
        }
        rander()
    }
}

function getNoteTemplate(note, index){
    if(note.completed) {
        return `
        <div class="containerTask"><li class="task" id="stringTask"><span class="task"><del>${note.title}</del></span></li> 
        <button class="doneTask" style="background-color: red;"data-index = "${index}" data-type = "toggle">Done</button>
        <button class="completeTask"data-index = "${index}" data-type = "remove">Complete</button> 
        </div>
        `
    } else{
        return `
        <div class="containerTask"><li class="task" id="stringTask"><span class="task">${note.title}</span></li> 
        <button class="doneTask" data-index="${index}" data-type = "toggle">Done</button>
        <button class="completeTask" data-index = "${index}" data-type = "remove">Complete</button> 
        </div>
        `
    }
    
}
