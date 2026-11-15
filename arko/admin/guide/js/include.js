window.addEventListener('DOMContentLoaded', function() {
    const elHeader = document.getElementById('dasHeaderInclude');
    const elFooter = document.getElementById('dasFooterInclude');
    const elLnb1 = document.getElementById('dasLnbInclude1');
    const elLnb2 = document.getElementById('dasLnbInclude2');
    const elLnb3 = document.getElementById('dasLnbInclude3');

    if (elHeader) {
      elHeader.outerHTML = `
        <header class="das-header">
        <div class="das-head">
          <h1 class="h1-head">
            <b>DAS</b>
            <small>아르코예술기록원 &middot; 통합디지털아카이브</small>
          </h1>
          <div class="user-conts">
            <div class="user-info">
              <div class="user__img">담</div>
              <div class="user__name">
                <p>김담은 &middot; 학예연구팀</p>
                <button type="button" class="btn-logout">로그아웃</button>
              </div>
            </div>
          </div>
        </div>

        <nav class="das-gnb-wrap">
          <ul class="das-gnb-list">
            <li class="active">
              <a href="#n" class="btn-das-gnb"><i class="ico14-gnb-site"></i> 사이트관리</a>
            </li>
            <li>
              <a href="#n" class="btn-das-gnb"><i class="ico14-gnb-member"></i> 회원관리</a>
            </li>
            <li>
              <a href="#n" class="btn-das-gnb"><i class="ico14-gnb-statistics"></i> 통계</a>
            </li>
          </ul>
        </nav>
      </header>`;
    }
    

    if (elFooter) {
      elFooter.outerHTML = `
      <footer class="das-footer">
          <p>&copy; 아르코예술기록원. All rights reserved.</p>
        </footer>`;
    }
    
    

    if (elLnb1) {
      elLnb1.outerHTML = `
      <aside class="das-lnb-wrap">
        <h2 class="h2-lnb">사이트관리</h2>
        <ul class="das-lnb-list">
          <li>
            <a href="#n" class="btn-lnb-depth1">Dashboard</a>
            <ul class="lnb-depth2">
              <li>
                <a href="#n" class="btn-lnb-depth2">대시보드 홈</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">최근변경사항</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#n" class="btn-lnb-depth1">DA-Arts 관리</a>
            <ul class="lnb-depth2">
              <li>
                <a href="#n" class="btn-lnb-depth2">기획 콘텐츠</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">인기 자료</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">구술채록</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">원테이블</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#n" class="btn-lnb-depth1">메인화면관리</a>
            <ul class="lnb-depth2">
              <li>
                <a href="#n" class="btn-lnb-depth2">Hero 영역 관리</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">키워드관리</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">주요 아카이브 콘텐츠 관리</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">원테이블 관리</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">구술채록·공연영상화 관리</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">추천 콘텐츠 관리</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">기록원 소식 관리</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#n" class="btn-lnb-depth1">안내·지원센터</a>
            <ul class="lnb-depth2">
              <li>
                <a href="#n" class="btn-lnb-depth2">FAQ</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">1:1 문의</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">공지사항</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#n" class="btn-lnb-depth1">팝업관리</a>
          </li>
        </ul>
      </aside>`;
    }
    

    if (elLnb2) {
      elLnb2.outerHTML = `
      <aside class="das-lnb-wrap">
        <h2 class="h2-lnb">회원관리</h2>
        <ul class="das-lnb-list">
          <li>
            <a href="#n" class="btn-lnb-depth1">활성회원</a>
          </li>
          <li>
            <a href="#n" class="btn-lnb-depth1">휴면회원</a>
          </li>
          <li>
            <a href="#n" class="btn-lnb-depth1">탈퇴회원</a>
          </li>
        </ul>
      </aside>`;
    }
    
    if (elLnb3) {
      elLnb3.outerHTML = `
      <aside class="das-lnb-wrap">
        <h2 class="h2-lnb">통계</h2>
        <ul class="das-lnb-list">
          <li>
            <a href="#n" class="btn-lnb-depth1">검색</a>
            <ul class="lnb-depth2">
              <li>
                <a href="#n" class="btn-lnb-depth2">검색 통계</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">검색 로그</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#n" class="btn-lnb-depth1">사이트통계</a>
            <ul class="lnb-depth2">
              <li>
                <a href="#n" class="btn-lnb-depth2">접속 통계</a>
              </li>
              <li>
                <a href="#n" class="btn-lnb-depth2">접속 로그</a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>`;
    }
  
});

