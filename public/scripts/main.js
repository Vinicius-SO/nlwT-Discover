import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal H2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const ckeckButtons = document.querySelectorAll(".actions a.check")

ckeckButtons.forEach(button => {
    button.addEventListener('click', handleClick)
    
});

const deleteButtons = document.querySelectorAll(".actions a.delete")


deleteButtons.forEach(button => {

    button.addEventListener("click",(event) =>{ handleClick(event, false)})

})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida":"Excluir"

    modalTitle.innerHTML = `${text}`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `sim, ${text.toLowerCase()}`
    check? modalButton.classList.remove('red'): modalButton.classList.add('red')
    
    modal.open()

}