const overlayContainer = document.querySelector('#overlayContainer');
const modalContainer = document.querySelector('#modalContainer')
const openModalContainer = document.querySelectorAll('#modalbtn');
const modal = document.querySelector('#modal');
for (let i= 0; i <openModalContainer.length; i++){
    openModalContainer[i].addEventListener('click', () => {    
        overlayContainer.classList.remove('hidden');
        modalContainer.classList.remove('hidden');
        modal.classList.remove('hidden');
    });
}
const closeModal = () => {
    overlayContainer.classList.add('hidden');
    modalContainer.classList.add('hidden');
    modal.classList.add('hidden');
}
document.addEventListener('keydown',function(e){
    if(e.key ==='Escape' && !modal.classList.contains('hidden')){
       closeModal();
    }
});