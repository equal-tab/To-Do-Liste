const openModalButton = document.getElementById('calender')
const closeModalButton = document.getElementById('close-button') 

openModalButton.addEventListener('click', () => {
    const modal = document.getElementById('modal') 
    openModal(modal)
})

closeModalButton.addEventListener('click', () => {
    const modal = closeModalButton.closest('.modal') // Findet das nächstgelegene Modal-Element, das diesen Button enthält.
    closeModal(modal)
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
}
