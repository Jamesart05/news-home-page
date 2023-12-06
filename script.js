const openModal = document.querySelector('.ham')
const closeModal = document.querySelector('.close-modal')
const modal = document.querySelector('.nav-modal')

openModal.addEventListener('click', ()=> {
    modal.classList.toggle('hidden')
})

closeModal.addEventListener('click', ()=> {
    modal.classList.toggle('hidden')
})