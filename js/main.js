
const listaTarea = new Array(
    {
        id: 0,
        titulo: 'Learn Javascript'
    },
    {
        id: 1,
        titulo: 'Learn Angular'
    },
    {
        id: 2,
        titulo: 'Learn NodeJS'
    },
    {
        id: 4,
        titulo: 'Learn Express'
    }
)

let id = 5;


const add = document.querySelector('.add');
const edit = document.querySelector('.edit');
const section = document.querySelector('.containerUl')
const input = document.querySelector('input');



function showTasks(pLista, pSection) {

    pSection = section;
    pLista = listaTarea;

    section.innerHTML = "";
    pLista.forEach(task => {

        printTask(task.titulo, task.id, section)


    })

}






function printTask(pTarea, pId, pSection) {

    pLista = listaTarea;
    pSection = section;



    let li = document.createElement('li');
    li.id = `${pId}`;
    /* li.innerText = `${pTarea}`; */
    let checkBox = document.createElement('input');
    checkBox.className = "chekito";
    checkBox.setAttribute("type", "checkbox");
    checkBox.id = `${pTarea}`;
    let label = document.createElement('label');
    label.setAttribute("for", `${pTarea}`);
    label.innerText = `${pTarea}`


    let eliminar = document.createElement('div');
    eliminar.className = "delete";
    eliminar.addEventListener('click', deleteTask);
    let iconoBorrar = document.createElement("i");
    iconoBorrar.className = `far fa-trash-alt`;


    let editar = document.createElement('div');
    editar.className = "edit";
    editar.addEventListener('click', checkTask);
    let iconoEditar = document.createElement("i");
    iconoEditar.className = `fas fa-check`;


    let updata = document.createElement('div');
    updata.className = "update";
    updata.addEventListener('click', updateTask);
    let iconoUpdate = document.createElement('i');
    iconoUpdate.className = `fas fa-pen`;


    li.appendChild(checkBox);
    li.appendChild(label);
    eliminar.appendChild(iconoBorrar);
    li.appendChild(eliminar);
    editar.appendChild(iconoEditar);
    li.appendChild(editar);
    updata.appendChild(iconoUpdate);
    li.appendChild(updata);


    section.appendChild(li);


}



/* Add Task event */

add.addEventListener('click', addTask);

function addTask(pId, pTitulo) {

    const lastDiv = document.querySelector(".last");
    const nullMessage = document.querySelector(".nullMessage");
    console.log(nullMessage);

    const input = document.querySelector('input');
    pTitulo = input.value;
    pId = id;

    const newTask = {
        id: id,
        titulo: pTitulo
    };


    if (pTitulo != "") {
        listaTarea.push(newTask);
        input.value = "";
        id++;


    } else {
        /* Poner alerta */
    }


    showTasks(listaTarea, section)

}




function deleteTask(pEvent) {
    pEvent.preventDefault();

    pEvent.target.parentNode.parentNode.remove();

    let deleteId = pEvent.target.parentNode.id;
    let position = listaTarea.findIndex(task => {
        task.id == deleteId;
    })

    listaTarea.splice(position, 1);



}



function checkTask(pEvent) {

    pEvent.target.parentNode.parentNode.classList.toggle('checked');

}



function updateTask(pEvent) {

    inputId = pEvent.target.parentNode.parentNode.id;
    let li = document.getElementById(`${inputId}`);
    inputText = li.innerText;
    li.innerHTML = "";


    let newInput = pEvent.target.parentNode.parentNode;
    newInput = document.createElement('input');
    newInput.className = "modify"
    newInput.setAttribute("type", "text");
    newInput.value = `${inputText}`;

    let updateButton = document.createElement('button');
    updateButton.setAttribute("type", "submit");
    updateButton.innerText = "Update";
    updateButton.addEventListener('click', confirmUpdate)

    li.appendChild(newInput);
    li.appendChild(updateButton);


    function confirmUpdate() {

        let newValue = newInput.value;


        let li2 = document.createElement('li');
        li2.id = `${inputId}`;
        let checkBox = document.createElement('input');
        checkBox.className = "chekito";
        checkBox.setAttribute("type", "checkbox");
        checkBox.id = `${newValue}`;
        let label = document.createElement('label');
        label.setAttribute("for", `${newValue}`);
        label.innerText = `${newValue}`


        let eliminar = document.createElement('div');
        eliminar.className = "delete";
        eliminar.addEventListener('click', deleteTask);
        let iconoBorrar = document.createElement("i");
        iconoBorrar.className = `far fa-trash-alt`;


        let editar = document.createElement('div');
        editar.className = "edit";
        editar.addEventListener('click', checkTask);
        let iconoEditar = document.createElement("i");
        iconoEditar.className = `fas fa-check`;


        let updata = document.createElement('div');
        updata.className = "update";
        updata.addEventListener('click', updateTask);
        let iconoUpdate = document.createElement('i');
        iconoUpdate.className = `fas fa-pen`;


        li2.appendChild(checkBox);
        li2.appendChild(label);
        eliminar.appendChild(iconoBorrar);
        li2.appendChild(eliminar);
        editar.appendChild(iconoEditar);
        li2.appendChild(editar);
        updata.appendChild(iconoUpdate);
        li2.appendChild(updata);


        li.replaceWith(li2);

    }

}



const mainSection = document.querySelector('.container1');
const important = document.querySelector('.makeImportant span');
important.addEventListener('click', selectImportant);


function selectImportant(pEvent) {

    let checkB = document.querySelectorAll('.chekito');

    for (i = 0; i < listaTarea.length; i++) {
        if (checkB[i].checked) {
            const fullNode = checkB[i].parentNode;

            mainSection.appendChild(fullNode);


        }
    }


}





showTasks(listaTarea, section);








