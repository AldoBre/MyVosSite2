const openModalButton = document.querySelectorAll('.openModal')
const closeModalButton = document.querySelector('.closeModal')
const modal = document = document.querySelector('#modal')
const fade = document.querySelector('#fade');



openModalButton.forEach(function(button){
    button.addEventListener('click', () =>{
        modal.classList.toggle("hide")
    fade.classList.toggle("hide")
    })
})

closeModalButton.addEventListener("click", () =>{
    modal.classList.add("hide")
    fade.classList.add("hide")
})