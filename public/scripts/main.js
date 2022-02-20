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
    const slug = check ? "check":"delete"
    const roomID = document.querySelector("#room-id").dataset.id
    const questionID = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action',`/question/${roomID}/${questionID}/${slug}`)


    modalTitle.innerHTML = `${text}`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `sim, ${text.toLowerCase()}`
    check? modalButton.classList.remove('red'): modalButton.classList.add('red')
    
    modal.open()

}
