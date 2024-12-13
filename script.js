let input = document.querySelector('input')
let botao = document.querySelector('button')
let lista = document.querySelector('.lista')

botao.addEventListener('click', ()=>{

    let tarefa = input.value

    if (tarefa != "") {
        addToList(tarefa)
        salvar(tarefa)
    }

    input.value = ''

})

function addToList(tarefa){
    let novaTarefa = document.createElement('li')
    novaTarefa.textContent = tarefa

    let excluir = document.createElement('button')
    excluir.textContent = 'Excluir'

    excluir.addEventListener('click', ()=>{
        novaTarefa.remove()
    })

    novaTarefa.appendChild(excluir)
    lista.appendChild(novaTarefa)

}

function salvar(tarefa){

    const tarefas = obterTodasAsTarefas()

    tarefas.push(tarefa)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function obterTodasAsTarefas(){
    const tarefas = localStorage.getItem('tarefas')

    // if (tarefas) {
    //     tarefas = JSON.parse(tarefas)
    // } else {
    //     tarefas = []
    // }

    return tarefas ? JSON.parse(tarefas) : [];
}