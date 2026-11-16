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

const tooltipCtrl = {
  // 초기화
  init() {
    this.tooltipInit();
    this.tooltipOutsideClick();
  },

  // 툴팁 토글
  tooltipInit() {
    const tooltipBtn = document.querySelectorAll('.btn-tooltip');

    if (tooltipBtn.length === 0) return;

    tooltipBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const parent = btn.closest('.das-tooltip-wrap');

        if (!parent) return;

        const isOpen = parent.classList.contains('open');

        // 모든 툴팁 닫기
        document.querySelectorAll('.das-tooltip-wrap.open').forEach((item) => {
          item.classList.remove('open');
        });

        // 현재 툴팁 토글
        if (!isOpen) {
          parent.classList.add('open');
        }
      });
    });
  },

  // 외부 영역 클릭 시 모두 닫기
  tooltipOutsideClick() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.das-tooltip-wrap')) return;

      document.querySelectorAll('.das-tooltip-wrap.open').forEach((item) => {
        item.classList.remove('open');
      });
    });
  },
};

// 초기 이벤트
window.addEventListener("DOMContentLoaded", () => {
  tooltipCtrl.init();
});

// 스크롤 이벤트
window.addEventListener("scroll", () => {

});

// 리사이즈 이벤트
window.addEventListener("resize", () => {
  
});
