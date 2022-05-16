import { todos } from './arr.js'

let form = document.forms.to_do
let wrapper = document.querySelector('.wrapper')
let wrapper_block = document.querySelector('.wrapper_block')
let form_todo = document.querySelector('.form_todo')
let countainer_todo = document.querySelector('.countainer_todo')

let inp = document.querySelector('.inp')

form.onsubmit = (e) => {
    e.preventDefault();
    
    let task = {
        id: Math.random(),
        status: false,
    }
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        task[key] = value
    })
    todos.push(task);
    reload(todos)
}

function reload(arr) {
    countainer_todo.innerHTML = ""
    for(let item of arr) {
        
        let span = document.createElement('span')
        let block_to_do = document.createElement('div')
        let block_edite_btn  = document.createElement('div')
        let left_btn = document.createElement('button')
        let left_btn1 = document.createElement('button')

        span.innerHTML = item.task
        left_btn.innerHTML = "Edit"
        left_btn1.innerHTML = "Delete"

        block_edite_btn.classList.add('block_edite_btn')
        block_to_do.classList.add('block_to_do')
        span.classList.add('span')
        left_btn.classList.add('left_btn')
        left_btn1.classList.add('left_btn1')


        wrapper.prepend(wrapper_block)
        wrapper_block.append(form_todo, countainer_todo)
        form_todo.append(form)
        countainer_todo.append(block_to_do)
        block_to_do.append(span, block_edite_btn)
        block_edite_btn.append(left_btn, left_btn1)

       


        left_btn.onclick = () => {
            span.innerHTML = ""
            inp.style.border = "2px solid red"
            arr.splice(arr.indexOf(item),1, {
                id: Math.random(),
                task: inp.value,
                status: false,
            })
            reload(todos)
        }


        left_btn1.onclick = () => {
            arr.splice(arr.indexOf(item),1)
            reload(todos)
        }
    }
}

reload(todos)
