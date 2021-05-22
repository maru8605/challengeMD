// selector
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const modal = document.querySelector('#modal-container');
    const card = document.querySelector('#container');

 cargarEventListeners();
 function cargarEventListeners(){
     openModal.addEventListener('click', showModal);
     closeModal.addEventListener('click', hiddenModal);
 }


function showModal () {
        console.log('holaaaaa malditasea')
    
    modal.classList.add('show-modal')
    card.classList.add('hidden-container')
}

function hiddenModal () {
    console.log('adios')
    modal.classList.add('modal-video')
    modal.classList.remove('show-modal');
    card.classList.remove('hidden-container');
}
