"use strict";

// ==================================================
// Header Controller
// GNB + Sitemap + search
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

  search: {
    wrap: null,
    openBtn: null,
    closeBtn: null,
    input: null
  },


  // 초기화
  init() {
    this.gnbInit();
    this.sitemapInit();
    this.searchInit();
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
    this.gnb.depth2.forEach((elm, i) => {
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

        // 모든 레이어 닫기
        this.gnbClose();
        this.sitemapClose();
        this.searchClose();

        // 이미 열려 있던 메뉴라면 종료
        if (isOpen) return;

        // 선택한 GNB 열기
        this.gnb.wrap.classList.add('active');
        parent.classList.add('gnb-open');

        btn.setAttribute('aria-expanded', 'true');

        this.updateBodyScroll();
      });
    });
  },


  // Sitemap
  sitemapInit() {
    const sitemapWrap = document.querySelector('.sitemap-wrap');

    if (!sitemapWrap) return;

    this.sitemap.wrap = sitemapWrap;
    this.sitemap.openBtn = document.querySelector('.btn-head-sitemap');
    this.sitemap.closeBtn = document.querySelector('.btn-sitemap-off');


    // 사이트맵 열기 버튼
    if (this.sitemap.openBtn) {
      this.sitemap.openBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.sitemapOpen();
      });
    }


    // 사이트맵 닫기 버튼
    if (this.sitemap.closeBtn) {
      this.sitemap.closeBtn.addEventListener('click', () => {
        this.sitemapClose();
      });
    }
  },


  // Search
  searchInit() {
    const searchWrap = document.querySelector('.header-integrated');

    if (!searchWrap) return;

    this.search.wrap = searchWrap;
    this.search.openBtn = document.querySelector('.btn-head-search');
    this.search.closeBtn = searchWrap.querySelector('.btn-head-search-close');
    this.search.input = searchWrap.querySelector('input');


    // 검색 열기 버튼
    if (this.search.openBtn) {
      this.search.openBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.searchOpen();
      });
    }


    // 검색 닫기 버튼
    if (this.search.closeBtn) {
      this.search.closeBtn.addEventListener('click', () => {
        this.searchClose(true);
      });
    }
  },


  // 공통 이벤트
  eventInit() {

    // GNB 외부 클릭
    document.addEventListener('click', (event) => {

      if (!this.gnb.wrap) return;

      const isGnbButton = Array.from(this.gnb.depth1Btn).some((btn) => {
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
      this.searchClose(true);
    });


    // 로고 포커스
    const h1LogoLink = document.querySelector('.h1-logo > a');

    if (h1LogoLink) {
      h1LogoLink.addEventListener('focusin', () => {
        this.gnbClose();
      });
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

    // GNB 및 검색 닫기
    this.gnbClose();
    this.searchClose();

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


  // Search 열기
  searchOpen() {
    if (!this.search.wrap) return;

    // GNB 닫기
    this.gnbClose();

    // Sitemap 닫기
    this.sitemapClose();

    // 검색 레이어 열기
    this.search.wrap.classList.add('open');

    if (this.search.openBtn) {
      this.search.openBtn.setAttribute('aria-expanded', 'true');
    }

    // 검색창 포커스
    if (this.search.input) {
      this.search.input.focus();
    }
  },


  // Search 닫기
  searchClose(restoreFocus = false) {
    if (!this.search.wrap) return;

    const isOpen = this.search.wrap.classList.contains('open');

    this.search.wrap.classList.remove('open');

    if (this.search.openBtn) {
      this.search.openBtn.setAttribute('aria-expanded', 'false');

      // 닫기 후 검색 버튼으로 포커스 복귀
      if (restoreFocus && isOpen) {
        this.search.openBtn.focus();
      }
    }
  },


  // Body Scroll 제어
  updateBodyScroll() {

    const isGnbOpen = this.gnb.wrap &&
      this.gnb.wrap.classList.contains('active');

    const isSitemapOpen = this.sitemap.wrap &&
      this.sitemap.wrap.classList.contains('open');

    // GNB 또는 Sitemap이 열려 있으면 스크롤 잠금
    if (isGnbOpen || isSitemapOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

};

/* === 모바일 GNB === */
const arko_mobile_gnb = {
  // 요소
  mobileGnb: {
    wrap: null,
    depth1Btn: null,
    depth1Item: null,
    depth2: null,
    depth2Btn: null,
    depth2Item: null,
    depth3: null,
  },

  init() {
    // 최초 1회만 이벤트 등록
    this.mobileGnbInit();
  },

  // 모바일 GNB 초기화
  mobileGnbInit() {
    const mobileGnbWrap = document.querySelector('.sitemap-wrap');

    if (!mobileGnbWrap) return;

    this.mobileGnb.wrap = mobileGnbWrap;
    this.mobileGnb.depth1Btn =
      mobileGnbWrap.querySelectorAll('.depth1-link');
    this.mobileGnb.depth1Item =
      mobileGnbWrap.querySelectorAll('.sitemap__depth > li');
    this.mobileGnb.depth2 =
      mobileGnbWrap.querySelectorAll('.sitemap__depth2');
    this.mobileGnb.depth2Btn = mobileGnbWrap.querySelectorAll('.depth2-link');
    this.mobileGnb.depth2Item = mobileGnbWrap.querySelectorAll('.sitemap__depth2 > li');
    this.mobileGnb.depth3 = mobileGnbWrap.querySelectorAll('.sitemap__depth3');

    this.mobileGnb.depth3.forEach((depth3) => {
      depth3.parentElement.classList.add('mobile-gnb-down');
    });

    // 2depth ID 설정
    this.mobileGnb.depth2.forEach((elm, i) => {
      elm.setAttribute('id', `moGnbSub${i}`);
    });

    // 1depth 버튼 설정
    this.mobileGnb.depth1Btn.forEach((btn, i) => {
      btn.setAttribute('aria-controls', `moGnbSub${i}`);
      btn.setAttribute('aria-expanded', 'false');

      btn.addEventListener('click', (event) => {

        // PC에서는 모바일 기능 실행하지 않음
        if (window.innerWidth > 1024) {
          return;
        }

        event.preventDefault();

        const parent = btn.parentElement;
        const isOpen = parent.classList.contains('gnb-open');

        // 이미 열려 있으면 닫기
        if (isOpen) {
          parent.classList.remove('gnb-open');
          btn.setAttribute('aria-expanded', 'false');
          return;
        }

        // 기존 메뉴 닫기
        this.mobileGnbClose();

        // 선택한 GNB 열기
        parent.classList.add('gnb-open');
        btn.setAttribute('aria-expanded', 'true');
      });
    });

    // 2depth 버튼 설정
    this.mobileGnb.depth2Btn.forEach((btn, i) => {
      btn.setAttribute('aria-controls', `moGnbSub2${i}`);
      btn.setAttribute('aria-expanded', 'false');

      btn.addEventListener('click', (event) => {
        event.preventDefault();

        const parent = btn.parentElement;
        const isOpen = parent.classList.contains('gnb-open');


        this.mobileGnb.depth2Item.forEach((item) => {
          item.classList.remove('gnb-open');
        });

        this.mobileGnb.depth2Btn.forEach((btn) => {
          btn.setAttribute('aria-expanded', 'false');
        });

        // 선택한 GNB 열기
        parent.classList.add('gnb-open');
        btn.setAttribute('aria-expanded', 'true');
      });
    });
  },

  // GNB 열기
  mobileGnbOpen() {
    if (!this.mobileGnb.wrap) return;

    this.mobileGnb.wrap.classList.add('active');

    this.updateBodyScroll();
  },

  // GNB 닫기
  mobileGnbClose() {
    if (!this.mobileGnb.wrap) return;

    this.mobileGnb.depth1Item.forEach((item) => {
      item.classList.remove('gnb-open');
    });

    this.mobileGnb.depth1Btn.forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
    });
  },

  // Body Scroll 제어
  updateBodyScroll() {
    const isGnbOpen =
      this.mobileGnb.wrap &&
      this.mobileGnb.wrap.classList.contains('active');

    if (isGnbOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
};

// tab sub
const arko_sub_tab = {
  layerTabArea: null,
  init() {
    this.layerTabArea = document.querySelectorAll(".tab-sub-area");

    if (!this.layerTabArea.length) return;

    this.setupTabs();
  },
  setupTabs() {
    this.layerTabArea.forEach((tabArea) => {
      const layerTabs = tabArea.querySelectorAll(".tab-sub > ul > li");

      // 탭 설정
      layerTabs.forEach((tab) => {
        // 이미 이벤트가 연결된 탭을 건너뜀
        if (!tab.dataset.listenerAttached) {
          // 연결된 탭 패널 찾기
          const control = tab.getAttribute("aria-controls");
          const selectedTabPanel = document.getElementById(control);

          // aria 설정
          tab.setAttribute("aria-selected", "false");
          tab.setAttribute("role", "tab");
          selectedTabPanel.setAttribute("role", "tabpanel");

          // 초기 active 설정
          if (tab.classList.contains("active")) {
            if (!tab.querySelector("button .sr-only")) {
              tab.setAttribute("aria-selected", "true");
              tab.querySelector("button").append(this.createAccText()); // 초점이 버튼이라 aria-selected 대체 텍스트 필요
            }
          }

          // 클릭 이벤트
          tab.addEventListener("click", () => {
            const closestTabs = tab.closest(".tab-sub-area > .tab-sub").querySelectorAll("li");
            const closestTabPanels = tab.closest(".tab-sub-area").querySelectorAll(":scope > .tab-sub-conts-wrap > .tab-sub-conts");

            this.resetTabs(closestTabs, closestTabPanels);

            tab.classList.add("active");
            tab.querySelector("button").append(this.createAccText());
            tab.setAttribute("aria-selected", "true");
            selectedTabPanel.classList.add("active");
          });

          // 키보드 이벤트
          this.setupKeyboardNavigation(tab);

          // 이벤트가 추가된 탭을 표시
          tab.dataset.listenerAttached = "true";
        }
      });
    });
  },
  createAccText() {
    const tabAccTag = document.createElement("i");
    tabAccTag.classList.add("sr-only");
    tabAccTag.textContent = "선택됨";
    return tabAccTag;
  },
  resetTabs(closestTabs, closestTabPanels) {
    closestTabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
      // 대체 텍스트 삭제
      const srOnly = tab.querySelector(".sr-only");
      if (srOnly) tab.querySelector("button").removeChild(srOnly);
    });
    closestTabPanels.forEach((panel) => {
      panel.classList.remove("active");
    });
  },
  setupKeyboardNavigation(tab) {
    tab.addEventListener("keydown", function (event) {
      let newTab;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        newTab = tab.nextElementSibling?.querySelector("button");
      } else if (event.key === "ArrowLeft") {
        newTab = tab.previousElementSibling?.querySelector("button");
      }
      newTab?.focus();
    });
  },
};



// 초기 이벤트
window.addEventListener("DOMContentLoaded", () => {
  headerCtrl.init();
  arko_mobile_gnb.init();
  arko_sub_tab.init();
});

// 스크롤 이벤트
window.addEventListener("scroll", () => {

});

// 리사이즈 이벤트
window.addEventListener("resize", () => {
  
});
