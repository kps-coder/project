window.addEventListener('load', function() {
    const elHeader = document.querySelector('.header');
    const elFooter = document.querySelector('.container-foot');

    elHeader.outerHTML = `
      <div class="header">
      <h1 class="logo"><a href="main.html"><span class="blind">maummove</span></a></h1>
      <div class="gnb">
        <div class="login-info">
          <div class="login-user">
            <strong>김무브</strong> 님 안녕하세요
          </div>
          <div class="my-menu">
            <a href="#n" class="my-menu__message"><i class="ic24-msg"></i><span class="msg-count">2</span>쪽지확인</a>
            <span class="bar"></span>
            <a href="#n" class="my-menu__logout"><i class="ic24-out"></i>로그아웃</a>
          </div>  
        </div>
        <div class="menu-list">
          <ul>
            <li><a href="#n"><i class="ic24-smile"></i> 회원정보</a></li>
            <li><a href="#n"><i class="ic24-pie"></i> 통계 <i class="ic24-down"></i></a>
              <ul>
                <li><a href="#n">사용자현황 치료모드</a></li>
                <li><a href="#n">사용자현황 일반모드</a></li>
                <li><a href="#n">가치선택 통계</a></li>
              </ul>
            </li>
            <li><a href="#n"><i class="ic24-file"></i> 마이페이지 <i class="ic24-down"></i></a>
              <ul>
                <li><a href="#n">회원목록</a></li>
                <li><a href="#n">관리자리스트</a></li>
                <li><a href="#n">쪽지</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>`;

    elFooter.outerHTML = `
      <footer class="container-foot">
        <address>관리 책임자 : 김무브 &nbsp; | &nbsp; 이메일 : maummove@gmail.com &nbsp; | &nbsp; 2025 maummove all right reserved. &nbsp; 본 사이트를 무단복제,사용시 법적인 제재를 받습니다.</address>
      </footer>`;
});

function gnbSelect(n1, n2) {
  let menuList = $('.menu-list > ul > li');
  let subMenuList = menuList.eq(n1).find('li');

  menuList.eq(n1).addClass('on');
  subMenuList.eq(n2).addClass('on');
}
