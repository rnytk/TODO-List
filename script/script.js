//creacion de la lista 

list = [ ]

// se crea un objeto tipo tarea
const newTask = (title, dueDate)=>{
    return {
        title: title,
        dueDate: dueDate,
        done: false
    }
}

// obtiene el ID de la tarea 
// si el usuario dijita un dato no valio, lo convierte en 0

const getIDTask = () => {
    const id = prompt ("Digite el ID de la tarea")
    let idNumber = parseInt(id, 10)
    if (isNaN(idNumber)){
        idNumber = 0
    }
    if (idNumber < 0) {
        idNumber = 0
    }
    return idNumber
}

// Si el usuario digital 1 es true, de lo contrario es false
const getIsDone = () => {
    const isDone = prompt("Digite 1 para true, cualquier otro valor para false ")
    if (isDone === "1"){
        return true
    }
    return false
}

// Obtiene los datos que el usuario ingresa y 
// lo convierte en una nueva tarea
const createTask = () => {
    const title = prompt("Digite el nombre de la tarea")
    const dueDate = prompt ("Digite la fecha")
    return newTask(title, dueDate)
}


//Agrega una nueva tarea a la lista
const processCreateTask = () =>  {
    const task = createTask()
    list.push(task)
    print(list)
}

//Edita una tarea ya exsistente
const processEditTask = () => {
    const id = getIDTask()
    if (id === 0 || id > list.length  ){
        alert("Numero invalido")
        return
    }
    const task = createTask()
    list[id-1] = task
    print(list)
}
//Marca como realizada una tarea (true, false)
const processDoneTask = () => {
    const id = getIDTask()
    if (id === 0 || id > list.length  ){
        alert("Numero invalido")
        return
    }
    const isDone = getIsDone()
    list[id-1].done = isDone
    print(list)
}

//Borra una tarea dentro de la lista
const processDeletTask = () => {
    const id = getIDTask()
    if (id === 0 || id > list.length  ){
        alert("Numero invalido")
        return
    }
    list.splice(id-1,1)
    print(list)
}

//Botones
const tnAdd = document.getElementById("btnAdd")
const btnEdit = document.getElementById("btnEdit")
const btnDone = document.getElementById("btnDone")
const btnDel = document.getElementById("btnDel")

//Eventos
btnAdd.addEventListener('click', processCreateTask)
btnEdit.addEventListener('click', processEditTask)
btnDone.addEventListener('click', processDoneTask)
btnDel.addEventListener('click', processDeletTask)