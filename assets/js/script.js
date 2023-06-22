const graduacao = document.querySelector('#btn-graduacao');
const modalGraduacao = document.querySelector('#modal-graduacao');
const tecnico = document.querySelector('#btn-tecnico');
const modalTecnico = document.querySelector('#modal-tecnico');
const modalCloseGrad = document.querySelector('#close-graduacao');
const modalCloseTec = document.querySelector('#close-tecnico');

graduacao.onclick = ()=> {
    modalGraduacao.showModal();
}

tecnico.onclick = ()=> {
    modalTecnico.showModal();
}

modalCloseGrad.onclick = ()=> {
    modalGraduacao.close();
}

modalCloseTec.onclick = ()=> {
    modalTecnico.close();
}