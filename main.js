class Header extends HTMLElement {
  constructor() {
    super();

    const container = document.querySelector("#container");
    container.insertAdjacentHTML(
      "afterbegin",
      `
      <header>
        <div class="header-top-wrapper">
          <!-- TEAM.T 로고 부분 -->
          <h1 class="header-top__logo">
            <a href="index.html"> TEAM.<span>T</span> </a>
          </h1>

          <!-- 검색창 -->
          <form class="header-top__search">
            <input id="header-search" placeholder="Search" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 30 30"
              >
                <path
                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                ></path>
              </svg>
            </button>
          </form>

          <!-- 로그인 상태 UI
          <div class="header-top__logged-in"> 
            <a href="#">
              <div class="relative">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 483.1 483.1" xml:space="preserve">
                  <g>
                    <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6 c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3
                      C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1
                      c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"/>
                  </g>
                </svg>
                <div>
                  <span>0</span>
                </div>
              </div>
            </a>
            <a href="user.html">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM27 32a1 1 0 0 1-1-1v-6.115a6.95 6.95 0 0 0-6.942-6.943h-6.116A6.95 6.95 0 0 0 6 24.885V31a1 1 0 1 1-2 0v-6.115c0-4.93 4.012-8.943 8.942-8.943h6.116c4.93 0 8.942 4.012 8.942 8.943V31a1 1 0 0 1-1 1z"/></svg>
              </div>
            </a>
          </div> 
          -->

          <!-- 로그인, 회원가입 버튼 -->
          <div class="header-top__logged-out">
            <a href="login.html">
              <button class="primary-btn">로그인</button>
            </a>
            <a href="register.html">
              <button class="primary-btn">회원가입</button>
            </a>
          </div>
        </div>

        <!-- 카테고리 바 -->
        <nav class="header-bottom__nav">
          <ul class="header-bottom__wrapper">
            <li class="header-bottom__category-level-1">
              <span>컴퓨터&#183;노트북</span>
              <ul class="header-bottom__category-level-2__wrapper">
                <div>
                  <span>노트북/데스크탑</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">게이밍 노트북</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">사무용 노트북</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">브랜드 PC</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">AI/딥러닝 PC</a>
                        </li>
                        <hr />
                      </ul>
                    </div>
                  </li>
                </div>
                <hr />
                <div>
                  <span>입출력장치</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">모니터</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">키보드</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">마우스</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">웹캠</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">프린터</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <hr />
                <div>
                  <span>PC부품</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">CPU</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">RAM</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">SSD</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              </ul>
            </li>
            <li class="header-bottom__category-level-1">
              <span>가전&#183;TV</span>
              <ul class="header-bottom__category-level-2__wrapper">
                <div>
                  <span>영상/음향가전</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">TV</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">프로젝터</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">셋톱박스</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">사운드바</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">앰프</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <hr />
                <div>
                  <span>생활/계절가전</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">세탁기</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">건조기</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">청소기</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">에어컨</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <hr />
                <div>
                  <span>주방가전</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">냉장고</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">김치냉장고</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">전기밥솥</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              </ul>
            </li>
            <li class="header-bottom__category-level-1">
              <span>태블릿&#183;모바일&#183;게임</span>
              <ul class="header-bottom__category-level-2__wrapper">
                <div>
                  <span>태블릿/스마트폰</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">삼성</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">애플</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">샤오미</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <hr />
                <div>
                  <span>주변기기</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">스마트워치</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">모바일 악세서리</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">보조배터리</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <hr />
                <div>
                  <span>게임기</span>
                  <li class="header-bottom__category-level-2">
                    <div>
                      <ul class="header-bottom__category-level-3__wrapper">
                        <li class="header-bottom__category-level-3">
                          <a href="#">스위치</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">플레이스테이션</a>
                        </li>
                        <hr />
                        <li class="header-bottom__category-level-3">
                          <a href="#">엑스박스</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      `
    );
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();

    const container = document.querySelector("#container");
    container.insertAdjacentHTML(
      "beforeend",
      `
      <footer>
        <div>
          <p class="footer__logo">
            TEAM.<span>T</span>
          </p>
          <p class="footer__copyright">Copyright &copy; TEAM.T Co. Ltd. All Rights Reserved.</p>
        </div>
        <div class="footer__info">
          <span>주소 : (우) 03048 서울특별시 종로구 청와대로 1 (세종로, 청와대)</span>
          <div>
            <span>대표이사 : 레이 크록 / Ray Kroc</span>
            <span>사업자번호 : 000-00-00000</span>
          </div>
          <span>통신판매업 : 제1999-서울종로-0420호</span>
        </div>
      </footer>
    `
    );
  }
}

customElements.define("app-header", Header);
customElements.define("app-footer", Footer);
