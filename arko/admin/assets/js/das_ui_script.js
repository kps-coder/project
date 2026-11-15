"use strict";

const modalCtrl = {

  // 초기화
  init() {
    this.modalInit();
  },

  modalInit() {

  },

  modalOpen(openModalId){
    const modalWrap = document.getElementById(openModalId);

    if (!modalWrap) return;
    modalWrap.classList.add('open');
  },
  modalClose(closeModalId){
    const modalWrap  = document.getElementById(closeModalId);

    if (!modalWrap) return;
    modalWrap.classList.remove('open');
  },
}

// 초기 이벤트
window.addEventListener("DOMContentLoaded", () => {

});

// 스크롤 이벤트
window.addEventListener("scroll", () => {

});

// 리사이즈 이벤트
window.addEventListener("resize", () => {
  
});
