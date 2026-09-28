"use strict";

// ==================================================
// Header Controller
// GNB + Sitemap
// ==================================================
const headerCtrl = {
  
  // 요소  
  gnb: {
    wrap: null,
    depth1Btn: null,
    depth1Item: null,
    depth2: null
  },

  sitemap: {
    wrap: null,
    openBtn: null,
    closeBtn: null
  },

  
  // 초기화  
  init() {
    this.gnbInit();
    this.sitemapInit();
    this.eventInit();
  },


 
  // GNB 
  gnbInit() {
    const gnbWrap = document.querySelector('.gnb');

    if (!gnbWrap) return;

    this.gnb.wrap = gnbWrap;
    this.gnb.depth1Btn = gnbWrap.querySelectorAll('.depth1-link');
    this.gnb.depth1Item = gnbWrap.querySelectorAll('.gnb__depth > li');
    this.gnb.depth2 = gnbWrap.querySelectorAll('.gnb__depth2');

   
    // 2depth ID 설정   
    this.gnb.depth2.forEach(function (elm, i) {
      elm.setAttribute('id', `gnbSub${i}`);
    });

   
    // 1depth 설정   
    this.gnb.depth1Btn.forEach((btn, i) => {

      btn.setAttribute('aria-controls', `gnbSub${i}`);
      btn.setAttribute('aria-expanded', 'false');

      btn.addEventListener('click', (event) => {
        event.preventDefault();

        const parent = btn.parentElement;
        const isOpen = parent.classList.contains('gnb-open');

        // 모든 GNB 닫기
        this.gnbClose();

        // 이미 열려 있던 메뉴라면 여기서 종료
        if (isOpen) return;

        // 사이트맵 닫기
        this.sitemapClose();

        // 선택한 GNB 열기
        this.gnb.wrap.classList.add('active');
        parent.classList.add('gnb-open');

        btn.setAttribute('aria-expanded', 'true');

        // Body 스크롤 잠금
        this.updateBodyScroll();
      });
    });
  },


 
  // Sitemap 
  sitemapInit() {
    const sitemapWrap = document.querySelector('.sitemap-wrap');

    if (!sitemapWrap) return;

    this.sitemap.wrap = sitemapWrap;
    this.sitemap.openBtn =
      document.querySelector('.btn-head-sitemap');
    this.sitemap.closeBtn =
      document.querySelector('.btn-sitemap-off');

   
    // 사이트맵 열기 버튼   
    if (this.sitemap.openBtn) {
      this.sitemap.openBtn.addEventListener('click', (event) => {
          event.preventDefault();

          this.sitemapOpen();
        }
      );
    }

   
    // 사이트맵 닫기 버튼   
    if (this.sitemap.closeBtn) {
      this.sitemap.closeBtn.addEventListener(
        'click',
        () => {
          this.sitemapClose();
        }
      );
    }
  },
 
  // 공통 이벤트 
  eventInit() {   
    // GNB 외부 클릭   
    document.addEventListener('click', (event) => {

      if (!this.gnb.wrap) return;

      const isGnbButton =
        Array.from(this.gnb.depth1Btn).some((btn) => {
          return btn.contains(event.target);
        });

      if (!isGnbButton) {
        this.gnbClose();
      }
    });


   
    // ESC   
    document.addEventListener('keydown', (event) => {

      if (event.key !== 'Escape') return;

      this.gnbClose();
      this.sitemapClose();
    });


   
    // 검색 버튼 / 로고 포커스   
    const btnHeadSearch = document.querySelector('.btn-head-search');

    const h1LogoLink = document.querySelector('.h1-logo > a');


    if (btnHeadSearch) {
      btnHeadSearch.addEventListener('focusin', () => {
          this.gnbClose();
        }
      );
    }

    if (h1LogoLink) {
      h1LogoLink.addEventListener('focusin', () => {
          this.gnbClose();
        }
      );
    }
  },
 
  // GNB 열기 
  gnbOpen() {
    if (!this.gnb.wrap) return;
    this.gnb.wrap.classList.add('active');

    this.updateBodyScroll();
  },
 
  // GNB 닫기 
  gnbClose() {
    if (!this.gnb.wrap) return;

    this.gnb.wrap.classList.remove('active');

    this.gnb.depth1Item.forEach((item) => {
      item.classList.remove('gnb-open');
    });

    this.gnb.depth1Btn.forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
    });

    this.updateBodyScroll();
  },
  
 
  // Sitemap 열기 
  sitemapOpen() {
    if (!this.sitemap.wrap) return;

    // GNB 닫기
    this.gnbClose();

    // Sitemap 열기
    this.sitemap.wrap.classList.add('open');

    this.updateBodyScroll();
  },
 
  // Sitemap 닫기 
  sitemapClose() {

    if (!this.sitemap.wrap) return;

    this.sitemap.wrap.classList.remove('open');

    this.updateBodyScroll();
  },

  // Body Scroll 제어
  updateBodyScroll() { 
    const isGnbOpen = this.gnb.wrap && this.gnb.wrap.classList.contains('active'); 
    const isSitemapOpen = this.sitemap.wrap && this.sitemap.wrap.classList.contains('open'); 

    // GNB 또는 Sitemap이 열려 있으면 스크롤 잠금 
    if (isGnbOpen || isSitemapOpen) { 
      document.body.style.overflow = 'hidden'; 
    } else { 
      document.body.style.overflow = ''; 
    } 
  }
}


// 초기 이벤트
window.addEventListener("DOMContentLoaded", () => {
  headerCtrl.init();
});

// 스크롤 이벤트
window.addEventListener("scroll", () => {

});

// 리사이즈 이벤트
window.addEventListener("resize", () => {

});
