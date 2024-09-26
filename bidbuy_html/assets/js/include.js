"use strict";

// 공통 헤더
const $HEADER_CONT = `<div>
<div class="header__simple inner-width flex">
  <a href="../index/index.html" class="header__logo"><span class="blind">Bidbuy</span></a>
  <!-- input에 커서들어가면 스타일이 바뀌도록 css에서 처리함 -->
  <!-- 검색 -->
  <form method="get" action="../search" role="search" class="search-box">
    <div class="search-input">
      <input type="search" name="" id="" placeholder="야후일본 경매 초가성비 Top10 보기" />
      <button type="submit" class="search-input__icon"><span class="blind">검색</span></button>
    </div>
    <div class="search-box__info">
      <ul>
        <!-- 최근 검색어 -->
        <li class="search-box__info-list">
          <p class="search-box__info-title">
            최근 검색어<button type="button" class="recent-searches__all-delete">전체삭제</button>
          </p>
          <ul class="recent-searches__list">
            <li>
              <a href="" class="recent-searches__text">야후와인</a
              ><button type="button" class="recent-searches__delete">
                <span class="blind">태그삭제</span>
              </button>
            </li>
            <li>
              <a href="" class="recent-searches__text">레드와인</a
              ><button type="button" class="recent-searches__delete">
                <span class="blind">태그삭제</span>
              </button>
            </li>
            <li>
              <a href="" class="recent-searches__text">명품시계</a
              ><button type="button" class="recent-searches__delete">
                <span class="blind">태그삭제</span>
              </button>
            </li>
            <li>
              <a href="" class="recent-searches__text">토로르피규어</a
              ><button type="button" class="recent-searches__delete">
                <span class="blind">태그삭제</span>
              </button>
            </li>
          </ul>
        </li>
        <!-- 추천 검색어 -->
        <li class="search-box__info-list">
          <p class="search-box__info-title">추천 검색어</p>
          <ol class="recommended-search__list">
            <li><a href="" class="recommended-search__text">다이빙 컴퓨터</a></li>
            <li><a href="" class="recommended-search__text">영국 봉주르 와인</a></li>
            <li><a href="" class="recommended-search__text">Babysense</a></li>
            <li>
              <a href="" class="recommended-search__text"
                >Binaural Hemi-SyncBinaural Hemi-SyncBinaural Hemi-SyncBinaural Hemi-SyncBinaural Hemi-SyncBinaural
                Hemi-SyncBinaural Hemi-Sync</a
              >
            </li>
          </ol>
        </li>
        <!-- 검색어 배너 -->
        <li class="search-box__info-list">
          <ul class="search-banner">
            <li>
              <a href="" class="search-banner__text"><span class="nowrap">야후일본 경매 초가성비 Top10 보기</span></a>
            </li>
            <li>
              <a href="" class="search-banner__text"
                ><span class="nowrap">2024년 봄시즌 비드바이코리아 특별 할인</span></a
              >
            </li>
            <li>
              <a href="" class="search-banner__text"><span class="nowrap">포인트 1+1 핵 아이템 이벤트</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </form>

  <ul class="header__utils">
    <li>
      <a href="../auth" class="header__util util-user">
        <span class="blind">마이페이지</span>
      </a>
    </li>
    <li>
      <button
        type="button"
        class="header__util util-notify modal_button"
        onclick="openModal(this, event)"
        data-modal="notify"
      >
        <span class="blind">알림</span>
      </button>
    </li>
    <li>
      <a href="../cart/index.html" class="header__util util-cart">
        <span class="blind">장바구니</span>
        <span class="util-card-num"><b>7</b></span>
      </a>
    </li>
  </ul>
</div>

<!-- GNB -->
<div class="header__gnb">
  <div class="inner-width flex">
    <div class="header__gnb-left">
      <button
        type="button"
        class="category-button modal_button"
        onclick="openModal(this, event)"
        data-modal="category"
      >
        <span class="blind">카테고리 메뉴열기</span>
      </button>
      <div class="header__gnb-menu-wrap">
        <button type="button" class="sticky-header__gnb-menu-button toggle-button">컬렉션</button>
        <div class="header__gnb-inner">
          <ul class="header__gnb-menu">
            <li class="header__gnb-menu-list">
              <b class="header__gnb-text">컬렉션</b>
              <!-- GNB DROPDOWN MENU -->
              <div class="dropdown-menu-box" data-idx="0">
                <div class="dropdown-menu inner-width flex">
                  <!-- 1 DEPTH -->
                  <div class="dropdown-menu__depth_one">
                    <p><b>컬렉션</b></p>
                    <p>
                      해외직구 Hot 컬렉션아이템<br />
                      이제 비드바이몰에서 ~
                    </p>
                    <figure class="dropdown-menu__img">
                      <img src="../../assets/images/icon/gnb_01.png" alt="" />
                    </figure>
                  </div>
                  <!-- 2 DEPTH -->
                  <div class="dropdown-menu__depth_two">
                    <ul class="dropdown-menu__list">
                      <li><button type="button">비타민/건강1</button></li>
                      <li><button type="button">명품/악세사리</button></li>
                      <li><button type="button">골프용품</button></li>
                      <li><button type="button">스피커/음향</button></li>
                      <li><button type="button">골동품/소품</button></li>
                      <li><button type="button">피규어/취미</button></li>
                      <li><button type="button">와인/주류</button></li>
                    </ul>
                  </div>
                  <!-- 3 DEPTH -->
                  <div class="dropdown-menu__depth_three" style="display: none">
                    <ul class="dropdown-menu__list">
                      <li><a href="">와인</a></li>
                      <li><a href="">위스키</a></li>
                      <li><a href="">사케</a></li>
                      <li><a href="">와인용품</a></li>
                      <li><a href="">골동품/소품</a></li>
                      <li><a href="">안주</a></li>
                      <li><a href="">기타</a></li>
                    </ul>
                  </div>
                  <!-- 추천 아이템 -->
                  <article class="dropdown-menu__items item-list" style="display: none">
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
                        <div class="item__price">
                          <p>¥ 10,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name"
                          >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ
                          スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく
                          ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
                        >
                        <div class="item__price">
                          <p>¥ 10,000,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </li>
            <li class="header__gnb-menu-list">
              <b class="header__gnb-text">가전제품</b>
              <!-- GNB DROPDOWN MENU -->
              <div class="dropdown-menu-box" data-idx="1">
                <div class="dropdown-menu inner-width flex">
                  <!-- 1 DEPTH -->
                  <div class="dropdown-menu__depth_one">
                    <p><b>가전제품</b></p>
                    <p>
                      해외직구 Hot 가전아이템<br />
                      이제 비드바이몰에서 ~
                    </p>
                    <figure class="dropdown-menu__img">
                      <img src="../../assets/images/icon/gnb_02.png" alt="" />
                    </figure>
                  </div>
                  <!-- 2 DEPTH -->
                  <div class="dropdown-menu__depth_two">
                    <ul class="dropdown-menu__list">
                      <li><button type="button">비타민/건강2</button></li>
                      <li><button type="button">명품/악세사리</button></li>
                      <li><button type="button">골프용품</button></li>
                      <li><button type="button">스피커/음향</button></li>
                      <li><button type="button">골동품/소품</button></li>
                      <li><button type="button">피규어/취미</button></li>
                      <li><button type="button">와인/주류</button></li>
                    </ul>
                  </div>
                  <!-- 3 DEPTH -->
                  <div class="dropdown-menu__depth_three" style="display: none">
                    <ul class="dropdown-menu__list">
                      <li><a href="">와인</a></li>
                      <li><a href="">위스키</a></li>
                      <li><a href="">사케</a></li>
                      <li><a href="">와인용품</a></li>
                      <li><a href="">골동품/소품</a></li>
                      <li><a href="">안주</a></li>
                      <li><a href="">기타</a></li>
                    </ul>
                  </div>
                  <!-- 추천 아이템 -->
                  <article class="dropdown-menu__items item-list" style="display: none">
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
                        <div class="item__price">
                          <p>¥ 10,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name"
                          >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ
                          スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく
                          ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
                        >
                        <div class="item__price">
                          <p>¥ 10,000,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </li>
            <li class="header__gnb-menu-list">
              <b class="header__gnb-text">취미/문화</b>
              <!-- GNB DROPDOWN MENU -->
              <div class="dropdown-menu-box">
                <div class="dropdown-menu inner-width flex">
                  <!-- 1 DEPTH -->
                  <div class="dropdown-menu__depth_one">
                    <p><b>취미/문화</b></p>
                    <p>
                      해외직구 Hot 취미/문화 아이템<br />
                      이제 비드바이몰에서 ~
                    </p>
                    <figure class="dropdown-menu__img">
                      <img src="../../assets/images/icon/gnb_03.png" alt="" />
                    </figure>
                  </div>
                  <!-- 2 DEPTH -->
                  <div class="dropdown-menu__depth_two">
                    <ul class="dropdown-menu__list">
                      <li><button type="button">비타민/건강3</button></li>
                      <li><button type="button">명품/악세사리</button></li>
                      <li><button type="button">골프용품</button></li>
                      <li><button type="button">스피커/음향</button></li>
                      <li><button type="button">골동품/소품</button></li>
                      <li><button type="button">피규어/취미</button></li>
                      <li><button type="button">와인/주류</button></li>
                    </ul>
                  </div>
                  <!-- 3 DEPTH -->
                  <div class="dropdown-menu__depth_three" style="display: none">
                    <ul class="dropdown-menu__list">
                      <li><a href="">와인</a></li>
                      <li><a href="">위스키</a></li>
                      <li><a href="">사케</a></li>
                      <li><a href="">와인용품</a></li>
                      <li><a href="">골동품/소품</a></li>
                      <li><a href="">안주</a></li>
                      <li><a href="">기타</a></li>
                    </ul>
                  </div>
                  <!-- 추천 아이템 -->
                  <article class="dropdown-menu__items item-list" style="display: none">
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
                        <div class="item__price">
                          <p>¥ 10,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name"
                          >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ
                          スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく
                          ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
                        >
                        <div class="item__price">
                          <p>¥ 10,000,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </li>
            <li class="header__gnb-menu-list">
              <b class="header__gnb-text">패션</b>
              <!-- GNB DROPDOWN MENU -->
              <div class="dropdown-menu-box">
                <div class="dropdown-menu inner-width flex">
                  <!-- 1 DEPTH -->
                  <div class="dropdown-menu__depth_one">
                    <p><b>패션</b></p>
                    <p>
                      해외직구 Hot 패션아이템<br />
                      이제 비드바이몰에서 ~
                    </p>
                    <figure class="dropdown-menu__img">
                      <img src="../../assets/images/icon/gnb_04.png" alt="" />
                    </figure>
                  </div>
                  <!-- 2 DEPTH -->
                  <div class="dropdown-menu__depth_two">
                    <ul class="dropdown-menu__list">
                      <li><button type="button">비타민/건강</button></li>
                      <li><button type="button">명품/악세사리</button></li>
                      <li><button type="button">골프용품</button></li>
                      <li><button type="button">스피커/음향</button></li>
                      <li><button type="button">골동품/소품</button></li>
                      <li><button type="button">피규어/취미</button></li>
                      <li><button type="button">와인/주류</button></li>
                    </ul>
                  </div>
                  <!-- 3 DEPTH -->
                  <div class="dropdown-menu__depth_three" style="display: none">
                    <ul class="dropdown-menu__list">
                      <li><a href="">와인</a></li>
                      <li><a href="">위스키</a></li>
                      <li><a href="">사케</a></li>
                      <li><a href="">와인용품</a></li>
                      <li><a href="">골동품/소품</a></li>
                      <li><a href="">안주</a></li>
                      <li><a href="">기타</a></li>
                    </ul>
                  </div>
                  <!-- 추천 아이템 -->
                  <article class="dropdown-menu__items item-list" style="display: none">
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
                        <div class="item__price">
                          <p>¥ 10,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name"
                          >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ
                          スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく
                          ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
                        >
                        <div class="item__price">
                          <p>¥ 10,000,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </li>
            <li class="header__gnb-menu-list">
              <b class="header__gnb-text">뷰티</b>
              <!-- GNB DROPDOWN MENU -->
              <div class="dropdown-menu-box">
                <div class="dropdown-menu inner-width flex">
                  <!-- 1 DEPTH -->
                  <div class="dropdown-menu__depth_one">
                    <p><b>뷰티</b></p>
                    <p>
                      해외직구 Hot 뷰티아이템<br />
                      이제 비드바이몰에서 ~
                    </p>
                    <figure class="dropdown-menu__img">
                      <img src="../../assets/images/icon/gnb_05.png" alt="" />
                    </figure>
                  </div>
                  <!-- 2 DEPTH -->
                  <div class="dropdown-menu__depth_two">
                    <ul class="dropdown-menu__list">
                      <li><button type="button">비타민/건강</button></li>
                      <li><button type="button">명품/악세사리</button></li>
                      <li><button type="button">골프용품</button></li>
                      <li><button type="button">스피커/음향</button></li>
                      <li><button type="button">골동품/소품</button></li>
                      <li><button type="button">피규어/취미</button></li>
                      <li><button type="button">와인/주류</button></li>
                    </ul>
                  </div>
                  <!-- 3 DEPTH -->
                  <div class="dropdown-menu__depth_three" style="display: none">
                    <ul class="dropdown-menu__list">
                      <li><a href="">와인</a></li>
                      <li><a href="">위스키</a></li>
                      <li><a href="">사케</a></li>
                      <li><a href="">와인용품</a></li>
                      <li><a href="">골동품/소품</a></li>
                      <li><a href="">안주</a></li>
                      <li><a href="">기타</a></li>
                    </ul>
                  </div>
                  <!-- 추천 아이템 -->
                  <article class="dropdown-menu__items item-list" style="display: none">
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
                        <div class="item__price">
                          <p>¥ 10,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                    <div class="item-box simple">
                      <a href="" class="item__img img-wrap">
                        <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                      </a>
                      <div class="item__info">
                        <div class="item__market">
                          <figure class="item__country">
                            <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <a href="" class="item__name"
                          >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ
                          スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく
                          ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
                        >
                        <div class="item__price">
                          <p>¥ 10,000,000</p>
                          <p class="item__discount-price">
                            <span class="item__total-price">¥<s>18,000,000</s></span>
                            <span class="item__discount-percent">(40%)</span>
                          </p>
                        </div>
                      </div>
                      <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
                        <span>25</span>
                        <span class="like-button__icon"></span>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </li>
          </ul>
          <ul class="header__gnb-utils">
            <li><a href="../community/index.html">커뮤니티</a></li>
            <li><a href="../cs/index.html">고객센터</a></li>
            <li><a href="">구매대행요청</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 알림 -->
<div class="modal-notify side-modal" style="display: none">
  <section class="modal-notify__box">
    <div class="modal-notify__header">
      <div class="modal-notify__title">알림</div>
      <button class="modal__close-button" type="button" onclick="closeModal(this)">
        <span class="blind">모달 닫기</span>
      </button>
    </div>
    <div class="modal-notify__body tabs-container">
      <div class="notify__tabs tabs">
        <button type="button" class="active" data-idx="0">ALL</button>
        <button type="button" data-idx="1">공지·뉴스</button>
        <button type="button" data-idx="2">알림</button>
      </div>
      <ul class="notify__tabs-content tabs-content">
        <!-- ALL -->
        <li data-idx="0">
          <ul class="notify-list">
            <li class="notify-box active">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>방금</p>
                    <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="notify-box active">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>35분전</p>
                    <p class="notify__desc">5월 카드사별 무이자 및 부분무이자 안내</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="notify-box">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>2024.05.05</p>
                    <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="notify-box">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>2024.05.05</p>
                    <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="notify-box">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>2024.05.05</p>
                    <p class="notify__desc">5월 비드바이 코리아 휴무 안내<br />5월 비드바이 코리아 휴무 안내</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="notify-box">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>2024.05.05</p>
                    <p class="notify__desc">5월 비드바이 코리아 휴무 안내<br />5월 비드바이 코리아 휴무 안내</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="notify-box">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>2024.05.05</p>
                    <p class="notify__desc">5월 비드바이 코리아 휴무 안내<br />5월 비드바이 코리아 휴무 안내</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="notify-box">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[알림]</b>2024.05.05</p>
                    <p class="notify__desc">
                      BJP0194029485 해당 주문건 결제가 필요합니다.BJP0194029485 해당 주문건 결제가 필요합니다.
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <!-- 공지·뉴스 -->
        <li data-idx="1" style="display: none">
          <ul class="notify-list">
            <li class="notify-box active">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>방금</p>
                    <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <!-- 알림 -->
        <li data-idx="2" style="display: none">
          <ul class="notify-list">
            <li class="notify-box active">
              <a href="">
                <div class="notify-box-left">
                  <figure class="country-box">
                    <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                  </figure>
                  <div class="notify__info">
                    <p class="notify__title"><b>[공지]</b>방금</p>
                    <p class="notify__desc">
                      5월 비드바이 코리아 휴무 안내월 비드바이 코리아 휴무 안내월 비드바이 코리아 휴무 안내
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</div>

<!-- 카테고리 -->
<nav class="modal-category modal" style="display: none">
  <div class="modal__dim" onclick="closeModal(this)"></div>
  <div class="modal__box">
    <button type="button" class="modal__close-button" onclick="closeModal(this)"></button>
    <div class="category__tab-container tabs-container">
      <div class="category__tabs tabs">
        <button type="button" data-idx="0" class="active">카테고리</button>
        <button type="button" data-idx="1">맞춤쇼핑</button>
        <button type="button" data-idx="2">이용가이드</button>
      </div>
      <ul class="category__tabs-content tabs-content">
        <!-- 카테고리 -->
        <li data-idx="0" class="tabs-content__category">
          <ul>
            <li class="category__list">
              <div class="category__list-inner">
                <!-- 1 depth -->
                <div class="category__one-depth category-depth">
                  <button type="button" class="category__accordion-button toggle-button">
                    <figure class="img-wrap">
                      <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                    </figure>
                    <p>일본야후경매</p>
                  </button>
                  <ul class="category__sub-list">
                    <li><button type="button">컴퓨터</button></li>
                    <li><button type="button">가전, AV, 카메라</button></li>
                    <li><button type="button">음악</button></li>
                    <li><button type="button">책, 잡지</button></li>
                    <li><button type="button">장난감, 게임</button></li>
                    <li><button type="button">취미, 문화</button></li>
                    <li><button type="button">앤틱, 컬렉션</button></li>
                    <li><button type="button">스포츠, 레저</button></li>
                    <li><button type="button">자동차, 오토바이</button></li>
                    <li><button type="button" class="star">패션 액세서리, 시계</button></li>
                    <li><button type="button">뷰티, 건강</button></li>
                    <li><button type="button">컴퓨터</button></li>
                    <li><button type="button">가전, AV, 카메라</button></li>
                    <li><button type="button" class="star">음악</button></li>
                    <li><button type="button">책, 잡지</button></li>
                    <li><button type="button">장난감, 게임</button></li>
                    <li><button type="button">취미, 문화</button></li>
                    <li><button type="button">앤틱, 컬렉션</button></li>
                    <li><button type="button">스포츠, 레저</button></li>
                    <li><button type="button">자동차, 오토바이</button></li>
                    <li><button type="button">패션 액세서리, 시계</button></li>
                    <li><button type="button">뷰티, 건강</button></li>
                  </ul>
                </div>
                <!-- 2 depth -->
                <div class="category__two-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <!-- <button type="button" class="category__sub-button toggle-button star"> -->
                      <p>유아용품</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><button type="button">기저귀,배변용품</button></li>
                    <li><button type="button">유모차,이동수단</button></li>
                    <li><button type="button">식사, 수유용품</button></li>
                    <li><button type="button">목욕용품 . 안전용품</button></li>
                    <li><button type="button">유아가구</button></li>
                    <li><button type="button">기타</button></li>
                    <li><button type="button">행사, 기념품</button></li>
                  </ul>
                </div>
                <!-- 3 depth -->
                <div class="category__three-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <p>유아가구</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><a href="">목욕용품 . 안전용품</a></li>
                    <li><a href="">유아가구</a></li>
                    <li><a href="">기저귀,배변용품</a></li>
                    <li><a href="">유모차,이동수단</a></li>
                    <li><a href="">식사, 수유용품</a></li>
                    <li><a href="">기타</a></li>
                    <li><a href="">행사, 기념품</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="category__list">
              <div class="category__list-inner">
                <!-- 1 depth -->
                <div class="category__one-depth category-depth">
                  <button type="button" class="category__accordion-button toggle-button">
                    <figure class="img-wrap">
                      <img src="../../assets/images/icon/country_usa.png" alt="usa" />
                    </figure>
                    <p>미국이베이경매</p>
                  </button>
                  <ul class="category__sub-list">
                    <li><button type="button">컴퓨터</button></li>
                    <li><button type="button">가전, AV, 카메라</button></li>
                    <li><button type="button">음악</button></li>
                  </ul>
                </div>
                <!-- 2 depth -->
                <div class="category__two-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <!-- <button type="button" class="category__sub-button toggle-button star"> -->
                      <p>유아용품</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><button type="button">기저귀,배변용품</button></li>
                    <li><button type="button">유모차,이동수단</button></li>
                    <li><button type="button">식사, 수유용품</button></li>
                    <li><button type="button">목욕용품 . 안전용품</button></li>
                    <li><button type="button">유아가구</button></li>
                    <li><button type="button">기타</button></li>
                    <li><button type="button">행사, 기념품</button></li>
                  </ul>
                </div>
                <!-- 3 depth -->
                <div class="category__three-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <p>유아가구</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><a href="">목욕용품 . 안전용품</a></li>
                    <li><a href="">유아가구</a></li>
                    <li><a href="">기저귀,배변용품</a></li>
                    <li><a href="">유모차,이동수단</a></li>
                    <li><a href="">식사, 수유용품</a></li>
                    <li><a href="">기타</a></li>
                    <li><a href="">행사, 기념품</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="category__list">
              <div class="category__list-inner">
                <!-- 1 depth -->
                <div class="category__one-depth category-depth">
                  <button type="button" class="category__accordion-button toggle-button">
                    <figure class="img-wrap">
                      <img src="../../assets/images/icon/country_uk.png" alt="uk" />
                    </figure>
                    <p>영국이베이경매</p>
                  </button>
                  <ul class="category__sub-list">
                    <li><button type="button">컴퓨터</button></li>
                    <li><button type="button">가전, AV, 카메라</button></li>
                    <li><button type="button">음악</button></li>
                  </ul>
                </div>
                <!-- 2 depth -->
                <div class="category__two-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <!-- <button type="button" class="category__sub-button toggle-button star"> -->
                      <p>유아용품</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><button type="button">식사, 수유용품</button></li>
                    <li><button type="button">목욕용품 . 안전용품</button></li>
                    <li><button type="button">유아가구</button></li>
                    <li><button type="button">기타</button></li>
                    <li><button type="button">행사, 기념품</button></li>
                  </ul>
                </div>
                <!-- 3 depth -->
                <div class="category__three-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <p>유아가구</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><a href="">목욕용품 . 안전용품</a></li>

                    <li><a href="">기타</a></li>
                    <li><a href="">행사, 기념품</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="category__list">
              <div class="category__list-inner">
                <!-- 1 depth -->
                <div class="category__one-depth category-depth">
                  <button type="button" class="category__accordion-button toggle-button">
                    <figure class="img-wrap">
                      <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                    </figure>
                    <p>일본메루카리</p>
                  </button>
                  <ul class="category__sub-list">
                    <li><button type="button">컴퓨터</button></li>
                    <li><button type="button">가전, AV, 카메라</button></li>
                    <li><button type="button">음악</button></li>
                  </ul>
                </div>
                <!-- 2 depth -->
                <div class="category__two-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <!-- <button type="button" class="category__sub-button toggle-button star"> -->
                      <p>유아용품</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><button type="button">식사, 수유용품</button></li>
                    <li><button type="button">목욕용품 . 안전용품</button></li>
                    <li><button type="button">유아가구</button></li>
                    <li><button type="button">기타</button></li>
                    <li><button type="button">행사, 기념품</button></li>
                  </ul>
                </div>
                <!-- 3 depth -->
                <div class="category__three-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <p>유아가구</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><a href="">목욕용품 . 안전용품</a></li>

                    <li><a href="">기타</a></li>
                    <li><a href="">행사, 기념품</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="category__list">
              <div class="category__list-inner">
                <!-- 1 depth -->
                <div class="category__one-depth category-depth">
                  <button type="button" class="category__accordion-button toggle-button">
                    <figure class="img-wrap">
                      <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                    </figure>
                    <p>일본구매대행</p>
                  </button>
                  <ul class="category__sub-list">
                    <li><button type="button">컴퓨터</button></li>
                    <li><button type="button">가전, AV, 카메라</button></li>
                    <li><button type="button">음악</button></li>
                  </ul>
                </div>
                <!-- 2 depth -->
                <div class="category__two-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <!-- <button type="button" class="category__sub-button toggle-button star"> -->
                      <p>유아용품</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><button type="button">식사, 수유용품</button></li>
                    <li><button type="button">목욕용품 . 안전용품</button></li>
                    <li><button type="button">유아가구</button></li>
                    <li><button type="button">기타</button></li>
                    <li><button type="button">행사, 기념품</button></li>
                  </ul>
                </div>
                <!-- 3 depth -->
                <div class="category__three-depth category-depth">
                  <div class="category__selected-text">
                    <button type="button" class="category__back-button">
                      <span class="blind">메뉴 뒤로가기</span>
                    </button>
                    <button type="button" class="category__sub-button toggle-button active">
                      <p>유아가구</p>
                    </button>
                  </div>
                  <ul class="category__sub-list">
                    <li><a href="">목욕용품 . 안전용품</a></li>

                    <li><a href="">기타</a></li>
                    <li><a href="">행사, 기념품</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <!-- 1 뎁스 별 추천 아이템 정보  -->
          <div class="category__items item-list">
            <a href="" class="item-box simple">
              <figure class="item__img img-wrap">
                <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
              </figure>
              <div class="item-box__inner">
                <div class="item__market line">
                  <figure class="item__country">
                    <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                  </figure>
                  <p>라쿠텐 - Ten past Ten</p>
                </div>
                <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
              </div>
            </a>
            <a href="" class="item-box simple">
              <figure class="item__img img-wrap">
                <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
              </figure>
              <div class="item-box__inner">
                <div class="item__market line">
                  <figure class="item__country">
                    <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                  </figure>
                  <p>라쿠텐 - Ten past Ten</p>
                </div>
                <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
              </div>
            </a>
          </div>
        </li>
        <!-- 맞춤쇼핑 -->
        <li data-idx="1" class="tabs-content__custom-shopping" style="display: none">
          <!-- PUB :: 1.로그인 전 -->
          <article class="in-progress offline">
            <p class="in-progress__desc">
              로그인 하시면<br />
              나만의 맞춤 쇼핑 설정이 가능합니다.
            </p>
            <a href="../auth/index.html" class="basic-button__blue in-progress__button">로그인</a>
          </article>
          <article class="custom-shopping">
            <h3 class="in-progress__title"><b>맞춤 쇼핑 구성</b></h3>
            <div class="custom-shopping__box">
              <ul class="custom-shopping__list">
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="aaa" checked />
                    <label for="aaa">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="bbb" />
                    <label for="bbb">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="ccc" />
                    <label for="ccc">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="dddd" />
                    <label for="dddd">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="eee" />
                    <label for="eee">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="fff" />
                    <label for="fff">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="gggg" />
                    <label for="gggg">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="jjjj" />
                    <label for="jjjj">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="hhhh" />
                    <label for="hhhh">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="eees" />
                    <label for="eees">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
                <li>
                  <div class="basic-checkbox__circle">
                    <input type="checkbox" id="wwww" />
                    <label for="wwww">
                      <span class="basic-checkbox__circle-icon"></span>
                      <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
                    </label>
                  </div>
                  <button type="button" class="custom-shopping__drag-button"></button>
                </li>
              </ul>
            </div>
            <div class="custom-shopping__button-wrap">
              <button type="reset" class="basic-button__gray-line">취소</button>
              <button type="button" class="basic-button__gray">설정 저장</button>
            </div>
          </article>
          -->
          <!-- PUB :: 2.로그인 후 -->
          <article class="in-progress login">
            <h3 class="in-progress__title"><b>나의 진행중 경매</b> <span>(0)</span></h3>
            <!-- 2-1. 로그인 후 :: 진행중 경매가 없을때  -->
            <!-- <p class="in-progress__desc">
            <b>진행 중 경매 입찰 건이 없네요.</b><br />마감 임박한 아이템에서<br />참~ 즐거움을 경험하세요.
          </p>
          <a href="" class="basic-button__blue in-progress__button">Hot 마감임박 경매</a> -->
            <!-- 2-2. 로그인 후 :: 진행중 경매가 있을때 -->
            <div class="swiper in-progress-items-swiper item-list">
              <div class="swiper-wrapper">
                <li class="swiper-slide item-box simple">
                  <a href="../auctions/index.html">
                    <figure class="item__img img-wrap">
                      <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                    </figure>
                    <div class="item-box__inner">
                      <div class="item__market line">
                        <figure class="item__country">
                          <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                        </figure>
                        <p>라쿠텐 - Ten past Ten</p>
                      </div>
                      <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
                    </div></a
                  >
                </li>

                <li class="swiper-slide item-box simple">
                  <a href="../auctions/index.html">
                    <figure class="item__img img-wrap">
                      <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                    </figure>
                    <div class="item-box__inner">
                      <div class="item__market line">
                        <figure class="item__country">
                          <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                        </figure>
                        <p>라쿠텐 - Ten past Ten</p>
                      </div>
                      <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
                    </div></a
                  >
                </li>

                <li class="swiper-slide item-box simple">
                  <a href="">
                    <figure class="item__img img-wrap">
                      <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                    </figure>
                    <div class="item-box__inner">
                      <div class="item__market line">
                        <figure class="item__country">
                          <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                        </figure>
                        <p>라쿠텐 - Ten past Ten</p>
                      </div>
                      <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
                    </div></a
                  >
                </li>

                <li class="swiper-slide item-box simple">
                  <a href="">
                    <figure class="item__img img-wrap">
                      <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
                    </figure>
                    <div class="item-box__inner">
                      <div class="item__market line">
                        <figure class="item__country">
                          <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                        </figure>
                        <p>라쿠텐 - Ten past Ten</p>
                      </div>
                      <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
                    </div></a
                  >
                </li>
              </div>
            </div>

            <!-- <ul class="in-progress__items item-list">
            <li class="item-box simple">
              <figure class="item__img img-wrap">
                <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
              </figure>
              <div class="item-box__inner">
                <div class="item__market line">
                  <figure class="item__country">
                    <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                  </figure>
                  <p>라쿠텐 - Ten past Ten</p>
                </div>
                <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
              </div>
            </li>
            <li class="item-box simple">
              <figure class="item__img img-wrap">
                <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
              </figure>
              <div class="item-box__inner">
                <div class="item__market line">
                  <figure class="item__country">
                    <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                  </figure>
                  <p>라쿠텐 - Ten past Ten</p>
                </div>
                <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
              </div>
            </li>
            <li class="item-box simple">
              <figure class="item__img img-wrap">
                <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
              </figure>
              <div class="item-box__inner">
                <div class="item__market line">
                  <figure class="item__country">
                    <img src="../../assets/images/icon/country_jp.png" alt="jp" />
                  </figure>
                  <p>라쿠텐 - Ten past Ten</p>
                </div>
                <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
              </div>
            </li>
          </ul> -->
            <section class="custom-shopping__tab-wrap">
              <div class="tabs-container">
                <div class="custom-shopping__tabs tabs">
                  <button type="button" class="active" data-idx="0">관심아이템 (3)</button>
                  <button type="button" data-idx="1">최근 본 아이템 (5)</button>
                </div>
                <ul class="custom-shopping__tabs-content tabs-content">
                  <!-- 관심 아이템 -->
                  <li data-idx="0">
                    <!-- <p class="custom-shopping__empty-text">
                    관심 아이템이 없습니다.
                  </p> -->
                    <div class="swiper like-item-swiper">
                      <ul class="swiper-wrapper">
                        <li class="swiper-slide item-list-box">
                          <a href="">
                            <figure class="item-list-box__img img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                            <div class="item-list-box__desc">
                              <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
                              <p class="item-list-box__name p_1">닌텐도 3 DS미스티핀크 닌텐도 Nintend</p>
                              <p class="item-list-box__price">
                                <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
                              </p>
                              <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
                            </div>
                          </a>
                        </li>
                        <li class="swiper-slide item-list-box">
                          <a href="">
                            <figure class="item-list-box__img img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                            <div class="item-list-box__desc">
                              <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
                              <p class="item-list-box__name p_1">
                                닌텐도 3 DS미스티핀크 닌텐도 Nintend닌텐도 3 DS미스티핀크 닌텐도 Nintend닌텐도 3
                                DS미스티핀크 닌텐도 Nintend
                              </p>
                              <p class="item-list-box__price">
                                <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
                              </p>
                              <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
                            </div>
                          </a>
                        </li>
                        <li class="swiper-slide item-list-box">
                          <a href="">
                            <figure class="item-list-box__img img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                            <div class="item-list-box__desc">
                              <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
                              <p class="item-list-box__name p_1">닌텐도 3 DS미스티핀크 닌텐도 Nintend</p>
                              <p class="item-list-box__price">
                                <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
                              </p>
                              <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
                            </div>
                          </a>
                        </li>
                        <li class="swiper-slide item-list-box">
                          <a href="">
                            <figure class="item-list-box__img img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                            <div class="item-list-box__desc">
                              <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
                              <p class="item-list-box__name p_1">닌텐도 3 DS미스티핀크 닌텐도 Nintend</p>
                              <p class="item-list-box__price">
                                <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
                              </p>
                              <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
                            </div>
                          </a>
                        </li>
                        <li class="swiper-slide item-list-box">
                          <a href="">
                            <figure class="item-list-box__img img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                            <div class="item-list-box__desc">
                              <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
                              <p class="item-list-box__name p_1">
                                닌텐도 3 DS미스티핀크 닌텐도 Nintend닌텐도 3 DS미스티핀크 닌텐도 Nintend닌텐도 3
                                DS미스티핀크 닌텐도 Nintend
                              </p>
                              <p class="item-list-box__price">
                                <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
                              </p>
                              <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
                            </div>
                          </a>
                        </li>
                        <li class="swiper-slide item-list-box">
                          <a href="">
                            <figure class="item-list-box__img img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                            <div class="item-list-box__desc">
                              <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
                              <p class="item-list-box__name p_1">닌텐도 3 DS미스티핀크 닌텐도 Nintend</p>
                              <p class="item-list-box__price">
                                <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
                              </p>
                              <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <!-- 최근 본 아이템 -->
                  <li data-idx="1" style="display: none">
                    <!-- <p class="custom-shopping__empty-text">
                    최근 본 아이템이 없습니다.
                  </p> -->
                    <div class="swiper recent-item-swiper">
                      <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                        <li class="swiper-slide">
                          <a href="">
                            <figure class="img-wrap">
                              <img src="../../assets/images/dummy/item_01.jpg" alt="" />
                            </figure>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <ul class="custom-shopping__board-wrap">
              <li class="custom-shopping__board">
                <div class="custom-shopping__board-title">
                  <h3 class="in-progress__title"><b>관심키워드</b> <span>(3건)</span> <a href="">more</a></h3>
                </div>
                <!-- <div class="custom-shopping__board-empty-text">등록된 관심 키워드가 없습니다.</div> -->
                <ul class="custom-shopping__board-list">
                  <li>
                    <a href="">
                      <span class="custom-shopping__board-time">4일전</span>
                      <p class="custom-shopping__board-name">야후경매 - 탤런트 상품</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="custom-shopping__board-time">4일전</span>
                      <p class="custom-shopping__board-name">야후경매 - 탤런트 상품</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="custom-shopping__board-time">124일</span>
                      <p class="custom-shopping__board-name">미국이베이 - 자동차,보트</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="custom-shopping__board">
                <div class="custom-shopping__board-title">
                  <h3 class="in-progress__title"><b>관심판매자</b> <span>(0건)</span> <a href="">more</a></h3>
                </div>

                <div class="custom-shopping__board-empty-text">등록된 관심판매자가 없습니다.</div>
                <!-- <ul class="custom-shopping__board-list">
                <li>
                  <a href="">
                    <span class="custom-shopping__board-time">4일전</span>
                    <p class="custom-shopping__board-name">영국이베이 - bluechadr</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="custom-shopping__board-time">4일전</span>
                    <p class="custom-shopping__board-name">야후경매 - agodoa1003</p>
                  </a>
                </li>
              </ul> -->
              </li>
              <li class="custom-shopping__board">
                <div class="custom-shopping__board-title">
                  <h3 class="in-progress__title"><b>바로가기</b> <span>(3건)</span> <a href="">more</a></h3>
                </div>

                <!-- <div class="custom-shopping__board-empty-text">등록된 바로가기가 없습니다.</div> -->
                <ul class="custom-shopping__board-list">
                  <li>
                    <a href="">
                      <p class="board-title">냉장고 바로가기</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="board__button-wrap">
              <button class="basic-button__dark-gray" type="button">맞춤쇼핑 설정</button>
            </div>
          </article>
        </li>
        <!-- 이용가이드 -->
        <li data-idx="2" class="tabs-content__guide" style="display: none">
          <section class="guide__banner">
            <a href="">
              <figure>
                <img src="../../assets/images/dummy/guide_banner_01.png" alt="비드바이 리뉴얼 기념 고객감사 이벤트" />
              </figure>
            </a>
            <a href="">
              <figure>
                <img src="../../assets/images/dummy/guide_banner_02.png" alt="첫 구매자 혜택 장바구니 할인" />
              </figure>
            </a>
          </section>
          <section class="guide-content">
            <ul class="guide-content__list">
              <li>
                <a href="" class="guide-content__accordion-button">
                  <div class="guide-content__title in-progress__title">
                    비드바이코리아 <b>4대 무료 서비스</b> 안내
                  </div>
                </a>
              </li>
              <li>
                <button type="button" class="guide-content__accordion-button toggle-button">
                  <div class="guide-content__title in-progress__title">경매대행 이용안내</div>
                </button>
                <ul class="guide-content__sub-list">
                  <li><a href="">경매 이용 주의사항</a></li>
                  <li><a href="">경매대행의 보증금 결제 및 정책</a></li>
                  <li><a href="">경매대행 경매신청 방법</a></li>
                  <li><a href="">경매대행 1차 및 2차 결제 안내</a></li>
                  <li><a href="">경매 국제배송, 통관, 배송완료 안내</a></li>
                </ul>
              </li>
              <li>
                <button type="button" class="guide-content__accordion-button toggle-button">
                  <div class="guide-content__title in-progress__title">해외구매대행 이용안내</div>
                </button>
                <ul class="guide-content__sub-list">
                  <li><a href="">해외 구매대행 신청 전 주의 사항</a></li>
                  <li><a href="">해외 구매대행 신청 하기</a></li>
                  <li><a href="">구매대행의 결제 안내 (1차, 2차 결제)</a></li>
                  <li><a href="">구매대행 국제배송, 통관, 배송완료 안내</a></li>
                </ul>
              </li>
              <li>
                <button type="button" class="guide-content__accordion-button toggle-button">
                  <div class="guide-content__title in-progress__title">각종 수수료 및 관세, 비용안내</div>
                </button>
                <ul class="guide-content__sub-list">
                  <li><a href="">각종 대행 수수료 안내</a></li>
                  <li><a href="">대행 결제 관련 수수료 및 비용안내</a></li>
                  <li><a href="">현지 및 국제 배송 안내</a></li>
                  <li><a href="">통관 관련 상세 안내</a></li>
                  <li><a href="">관세 비용 및 정책 안내</a></li>
                </ul>
              </li>
              <li>
                <button type="button" class="guide-content__accordion-button toggle-button">
                  <div class="guide-content__title in-progress__title">취소 · 반품 · 환불 · 교환</div>
                </button>
                <ul class="guide-content__sub-list">
                  <li><a href="">해외 경매 & 구매 취소 안내</a></li>
                  <li><a href="">경매 & 구매 반품/환불/교환 정책</a></li>
                  <li><a href="">해외 경매 및 구매 클레임 안내</a></li>
                </ul>
              </li>
              <li>
                <button type="button" class="guide-content__accordion-button toggle-button">
                  <div class="guide-content__title in-progress__title">파손 · 분실 보상안내</div>
                </button>
                <ul class="guide-content__sub-list">
                  <li><a href="">EMS 배송 정책</a></li>
                  <li><a href="">비드바이 특송 정책</a></li>
                  <li><a href="">운송사 보상불가 규정 안내</a></li>
                </ul>
              </li>
              <li>
                <button type="button" class="guide-content__accordion-button toggle-button">
                  <div class="guide-content__title in-progress__title">회원등급별 혜택 안내</div>
                </button>
                <ul class="guide-content__sub-list">
                  <li><a href="">신규회원 기본 혜택</a></li>
                  <li><a href="">일반회원 혜택</a></li>
                  <li><a href="">우수회원 혜택</a></li>
                  <li><a href="">프리미엄 회원의 혜택</a></li>
                  <li><a href="">VIP 회원의 특별 혜택 확인</a></li>
                </ul>
              </li>
              <li>
                <button type="button" class="guide-content__accordion-button toggle-button">
                  <div class="guide-content__title in-progress__title">경매이용 TIP 안내</div>
                </button>
                <ul class="guide-content__sub-list">
                  <li><a href="">경매이용 TIP 안내</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

`;
// const $HEADER_CONT = `
// <div class="header__simple inner-width flex">
// <a href="../index/index.html" class="header__logo"><span class="blind">Bidbuy</span></a>
// <!-- input에 커서들어가면 스타일이 바뀌도록 css에서 처리함 -->
// <!-- 검색 -->
// <form method="get" action="../search" role="search" class="search-box">
//   <div class="search-input">
//     <input type="search" name="" id="" placeholder="야후일본 경매 초가성비 Top10 보기" />
//     <button type="submit" class="search-input__icon"><span class="blind">검색</span></button>
//   </div>
//   <div class="search-box__info">
//     <ul>
//       <!-- 최근 검색어 -->
//       <li class="search-box__info-list">
//         <p class="search-box__info-title">
//           최근 검색어<button type="button" class="recent-searches__all-delete">전체삭제</button>
//         </p>
//         <ul class="recent-searches__list">
//           <li>
//             <a href="" class="recent-searches__text">야후와인</a
//             ><button type="button" class="recent-searches__delete">
//               <span class="blind">태그삭제</span>
//             </button>
//           </li>
//           <li>
//             <a href="" class="recent-searches__text">레드와인</a
//             ><button type="button" class="recent-searches__delete">
//               <span class="blind">태그삭제</span>
//             </button>
//           </li>
//           <li>
//             <a href="" class="recent-searches__text">명품시계</a
//             ><button type="button" class="recent-searches__delete">
//               <span class="blind">태그삭제</span>
//             </button>
//           </li>
//           <li>
//             <a href="" class="recent-searches__text">토로르피규어</a
//             ><button type="button" class="recent-searches__delete">
//               <span class="blind">태그삭제</span>
//             </button>
//           </li>
//         </ul>
//       </li>
//       <!-- 추천 검색어 -->
//       <li class="search-box__info-list">
//         <p class="search-box__info-title">추천 검색어</p>
//         <ol class="recommended-search__list">
//           <li><a href="" class="recommended-search__text">다이빙 컴퓨터</a></li>
//           <li><a href="" class="recommended-search__text">영국 봉주르 와인</a></li>
//           <li><a href="" class="recommended-search__text">Babysense</a></li>
//           <li>
//             <a href="" class="recommended-search__text"
//               >Binaural Hemi-SyncBinaural Hemi-SyncBinaural Hemi-SyncBinaural Hemi-SyncBinaural
//               Hemi-SyncBinaural Hemi-SyncBinaural Hemi-Sync</a
//             >
//           </li>
//         </ol>
//       </li>
//       <!-- 검색어 배너 -->
//       <li class="search-box__info-list">
//         <ul class="search-banner">
//           <li>
//             <a href="" class="search-banner__text"
//               ><span class="nowrap">야후일본 경매 초가성비 Top10 보기</span></a
//             >
//           </li>
//           <li>
//             <a href="" class="search-banner__text"
//               ><span class="nowrap">2024년 봄시즌 비드바이코리아 특별 할인</span></a
//             >
//           </li>
//           <li>
//             <a href="" class="search-banner__text"><span class="nowrap">포인트 1+1 핵 아이템 이벤트</span></a>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   </div>
// </form>

// <ul class="header__utils">
//   <li>
//     <a href="../auth" class="header__util util-user">
//       <span class="blind">마이페이지</span>
//     </a>
//   </li>
//   <li>
//     <button
//       type="button"
//       class="header__util util-notify modal_button"
//       onclick="openModal(this, event)"
//       data-modal="notify"
//     >
//       <span class="blind">알림</span>
//     </button>
//   </li>
//   <li>
//     <a href="../cart/index.html" class="header__util util-cart">
//       <span class="blind">장바구니</span>
//       <span class="util-card-num"><b>7</b></span>
//     </a>
//   </li>
// </ul>
// </div>

// <!-- GNB -->
// <div class="header__gnb">
// <div class="inner-width flex">
//   <div class="header__gnb-left">
//     <button
//       type="button"
//       class="category-button modal_button"
//       onclick="openModal(this, event)"
//       data-modal="category"
//     >
//       <span class="blind">카테고리 메뉴열기</span>
//     </button>
//     <div class="header__gnb-menu-wrap">
//       <button type="button" class="sticky-header__gnb-menu-button toggle-button">컬렉션</button>
//       <div class="header__gnb-inner">
//         <ul class="header__gnb-menu">
//           <li class="header__gnb-menu-list">
//             <b class="header__gnb-text">컬렉션</b>
//             <!-- GNB DROPDOWN MENU -->
//             <div class="dropdown-menu-box" data-idx="0">
//               <div class="dropdown-menu inner-width flex">
//                 <!-- 1 DEPTH -->
//                 <div class="dropdown-menu__depth_one">
//                   <p><b>컬렉션</b></p>
//                   <p>
//                     해외직구 Hot 컬렉션아이템<br />
//                     이제 비드바이몰에서 ~
//                   </p>
//                   <figure class="dropdown-menu__img">
//                     <img src="../../assets/images/icon/gnb_01.png" alt="" />
//                   </figure>
//                 </div>
//                 <!-- 2 DEPTH -->
//                 <div class="dropdown-menu__depth_two">
//                   <ul class="dropdown-menu__list">
//                     <li><button type="button">비타민/건강1</button></li>
//                     <li><button type="button">명품/악세사리</button></li>
//                     <li><button type="button">골프용품</button></li>
//                     <li><button type="button">스피커/음향</button></li>
//                     <li><button type="button">골동품/소품</button></li>
//                     <li><button type="button">피규어/취미</button></li>
//                     <li><button type="button">와인/주류</button></li>
//                   </ul>
//                 </div>
//                 <!-- 3 DEPTH -->
//                 <div class="dropdown-menu__depth_three" style="display: none">
//                   <ul class="dropdown-menu__list">
//                     <li><a href="">와인</a></li>
//                     <li><a href="">위스키</a></li>
//                     <li><a href="">사케</a></li>
//                     <li><a href="">와인용품</a></li>
//                     <li><a href="">골동품/소품</a></li>
//                     <li><a href="">안주</a></li>
//                     <li><a href="">기타</a></li>
//                   </ul>
//                 </div>
//                 <!-- 추천 아이템 -->
//                 <article class="dropdown-menu__items item-list" style="display: none">
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
//                       <div class="item__price">
//                         <p>¥ 10,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name"
//                         >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料
//                         アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ
//                         350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
//                       >
//                       <div class="item__price">
//                         <p>¥ 10,000,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </li>
//           <li class="header__gnb-menu-list">
//             <b class="header__gnb-text">가전제품</b>
//             <!-- GNB DROPDOWN MENU -->
//             <div class="dropdown-menu-box" data-idx="1">
//               <div class="dropdown-menu inner-width flex">
//                 <!-- 1 DEPTH -->
//                 <div class="dropdown-menu__depth_one">
//                   <p><b>가전제품</b></p>
//                   <p>
//                     해외직구 Hot 가전아이템<br />
//                     이제 비드바이몰에서 ~
//                   </p>
//                   <figure class="dropdown-menu__img">
//                     <img src="../../assets/images/icon/gnb_02.png" alt="" />
//                   </figure>
//                 </div>
//                 <!-- 2 DEPTH -->
//                 <div class="dropdown-menu__depth_two">
//                   <ul class="dropdown-menu__list">
//                     <li><button type="button">비타민/건강2</button></li>
//                     <li><button type="button">명품/악세사리</button></li>
//                     <li><button type="button">골프용품</button></li>
//                     <li><button type="button">스피커/음향</button></li>
//                     <li><button type="button">골동품/소품</button></li>
//                     <li><button type="button">피규어/취미</button></li>
//                     <li><button type="button">와인/주류</button></li>
//                   </ul>
//                 </div>
//                 <!-- 3 DEPTH -->
//                 <div class="dropdown-menu__depth_three" style="display: none">
//                   <ul class="dropdown-menu__list">
//                     <li><a href="">와인</a></li>
//                     <li><a href="">위스키</a></li>
//                     <li><a href="">사케</a></li>
//                     <li><a href="">와인용품</a></li>
//                     <li><a href="">골동품/소품</a></li>
//                     <li><a href="">안주</a></li>
//                     <li><a href="">기타</a></li>
//                   </ul>
//                 </div>
//                 <!-- 추천 아이템 -->
//                 <article class="dropdown-menu__items item-list" style="display: none">
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
//                       <div class="item__price">
//                         <p>¥ 10,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name"
//                         >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料
//                         アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ
//                         350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
//                       >
//                       <div class="item__price">
//                         <p>¥ 10,000,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </li>
//           <li class="header__gnb-menu-list">
//             <b class="header__gnb-text">취미/문화</b>
//             <!-- GNB DROPDOWN MENU -->
//             <div class="dropdown-menu-box">
//               <div class="dropdown-menu inner-width flex">
//                 <!-- 1 DEPTH -->
//                 <div class="dropdown-menu__depth_one">
//                   <p><b>취미/문화</b></p>
//                   <p>
//                     해외직구 Hot 취미/문화 아이템<br />
//                     이제 비드바이몰에서 ~
//                   </p>
//                   <figure class="dropdown-menu__img">
//                     <img src="../../assets/images/icon/gnb_03.png" alt="" />
//                   </figure>
//                 </div>
//                 <!-- 2 DEPTH -->
//                 <div class="dropdown-menu__depth_two">
//                   <ul class="dropdown-menu__list">
//                     <li><button type="button">비타민/건강3</button></li>
//                     <li><button type="button">명품/악세사리</button></li>
//                     <li><button type="button">골프용품</button></li>
//                     <li><button type="button">스피커/음향</button></li>
//                     <li><button type="button">골동품/소품</button></li>
//                     <li><button type="button">피규어/취미</button></li>
//                     <li><button type="button">와인/주류</button></li>
//                   </ul>
//                 </div>
//                 <!-- 3 DEPTH -->
//                 <div class="dropdown-menu__depth_three" style="display: none">
//                   <ul class="dropdown-menu__list">
//                     <li><a href="">와인</a></li>
//                     <li><a href="">위스키</a></li>
//                     <li><a href="">사케</a></li>
//                     <li><a href="">와인용품</a></li>
//                     <li><a href="">골동품/소품</a></li>
//                     <li><a href="">안주</a></li>
//                     <li><a href="">기타</a></li>
//                   </ul>
//                 </div>
//                 <!-- 추천 아이템 -->
//                 <article class="dropdown-menu__items item-list" style="display: none">
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
//                       <div class="item__price">
//                         <p>¥ 10,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name"
//                         >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料
//                         アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ
//                         350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
//                       >
//                       <div class="item__price">
//                         <p>¥ 10,000,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </li>
//           <li class="header__gnb-menu-list">
//             <b class="header__gnb-text">패션</b>
//             <!-- GNB DROPDOWN MENU -->
//             <div class="dropdown-menu-box">
//               <div class="dropdown-menu inner-width flex">
//                 <!-- 1 DEPTH -->
//                 <div class="dropdown-menu__depth_one">
//                   <p><b>패션</b></p>
//                   <p>
//                     해외직구 Hot 패션아이템<br />
//                     이제 비드바이몰에서 ~
//                   </p>
//                   <figure class="dropdown-menu__img">
//                     <img src="../../assets/images/icon/gnb_04.png" alt="" />
//                   </figure>
//                 </div>
//                 <!-- 2 DEPTH -->
//                 <div class="dropdown-menu__depth_two">
//                   <ul class="dropdown-menu__list">
//                     <li><button type="button">비타민/건강</button></li>
//                     <li><button type="button">명품/악세사리</button></li>
//                     <li><button type="button">골프용품</button></li>
//                     <li><button type="button">스피커/음향</button></li>
//                     <li><button type="button">골동품/소품</button></li>
//                     <li><button type="button">피규어/취미</button></li>
//                     <li><button type="button">와인/주류</button></li>
//                   </ul>
//                 </div>
//                 <!-- 3 DEPTH -->
//                 <div class="dropdown-menu__depth_three" style="display: none">
//                   <ul class="dropdown-menu__list">
//                     <li><a href="">와인</a></li>
//                     <li><a href="">위스키</a></li>
//                     <li><a href="">사케</a></li>
//                     <li><a href="">와인용품</a></li>
//                     <li><a href="">골동품/소품</a></li>
//                     <li><a href="">안주</a></li>
//                     <li><a href="">기타</a></li>
//                   </ul>
//                 </div>
//                 <!-- 추천 아이템 -->
//                 <article class="dropdown-menu__items item-list" style="display: none">
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
//                       <div class="item__price">
//                         <p>¥ 10,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name"
//                         >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料
//                         アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ
//                         350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
//                       >
//                       <div class="item__price">
//                         <p>¥ 10,000,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </li>
//           <li class="header__gnb-menu-list">
//             <b class="header__gnb-text">뷰티</b>
//             <!-- GNB DROPDOWN MENU -->
//             <div class="dropdown-menu-box">
//               <div class="dropdown-menu inner-width flex">
//                 <!-- 1 DEPTH -->
//                 <div class="dropdown-menu__depth_one">
//                   <p><b>뷰티</b></p>
//                   <p>
//                     해외직구 Hot 뷰티아이템<br />
//                     이제 비드바이몰에서 ~
//                   </p>
//                   <figure class="dropdown-menu__img">
//                     <img src="../../assets/images/icon/gnb_05.png" alt="" />
//                   </figure>
//                 </div>
//                 <!-- 2 DEPTH -->
//                 <div class="dropdown-menu__depth_two">
//                   <ul class="dropdown-menu__list">
//                     <li><button type="button">비타민/건강</button></li>
//                     <li><button type="button">명품/악세사리</button></li>
//                     <li><button type="button">골프용품</button></li>
//                     <li><button type="button">스피커/음향</button></li>
//                     <li><button type="button">골동품/소품</button></li>
//                     <li><button type="button">피규어/취미</button></li>
//                     <li><button type="button">와인/주류</button></li>
//                   </ul>
//                 </div>
//                 <!-- 3 DEPTH -->
//                 <div class="dropdown-menu__depth_three" style="display: none">
//                   <ul class="dropdown-menu__list">
//                     <li><a href="">와인</a></li>
//                     <li><a href="">위스키</a></li>
//                     <li><a href="">사케</a></li>
//                     <li><a href="">와인용품</a></li>
//                     <li><a href="">골동품/소품</a></li>
//                     <li><a href="">안주</a></li>
//                     <li><a href="">기타</a></li>
//                   </ul>
//                 </div>
//                 <!-- 추천 아이템 -->
//                 <article class="dropdown-menu__items item-list" style="display: none">
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name">あすつく ビール 送料無料 アサヒ</a>
//                       <div class="item__price">
//                         <p>¥ 10,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                   <div class="item-box simple">
//                     <a href="" class="item__img img-wrap">
//                       <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                     </a>
//                     <div class="item__info">
//                       <div class="item__market">
//                         <figure class="item__country">
//                           <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                         </figure>
//                         <p>라쿠텐 - Ten past Ten</p>
//                       </div>
//                       <a href="" class="item__name"
//                         >あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料
//                         アサヒ スーパードライ 350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ
//                         350mlx48本あすつく ビール 送料無料 アサヒ スーパードライ 350mlx48本</a
//                       >
//                       <div class="item__price">
//                         <p>¥ 10,000,000</p>
//                         <p class="item__discount-price">
//                           <span class="item__total-price">¥<s>18,000,000</s></span>
//                           <span class="item__discount-percent">(40%)</span>
//                         </p>
//                       </div>
//                     </div>
//                     <button class="like-button active" type="button" onclick="onClickLikeButton(this)">
//                       <span>25</span>
//                       <span class="like-button__icon"></span>
//                     </button>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </li>
//         </ul>
//         <ul class="header__gnb-utils">
//           <li><a href="../community/index.html">커뮤니티</a></li>
//           <li><a href="../cs/index.html">고객센터</a></li>
//           <li><a href="">구매대행요청</a></li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
// </div>

// <!-- 알림 -->
// <div class="modal-notify side-modal" style="display: none">
// <section class="modal-notify__box">
//   <div class="modal-notify__header">
//     <div class="modal-notify__title">알림</div>
//     <button class="modal__close-button" type="button" onclick="closeModal(this)">
//       <span class="blind">모달 닫기</span>
//     </button>
//   </div>
//   <div class="modal-notify__body tabs-container">
//     <div class="notify__tabs tabs">
//       <button type="button" class="active" data-idx="0">ALL</button>
//       <button type="button" data-idx="1">공지·뉴스</button>
//       <button type="button" data-idx="2">알림</button>
//     </div>
//     <ul class="notify__tabs-content tabs-content">
//       <!-- ALL -->
//       <li data-idx="0">
//         <ul class="notify-list">
//           <li class="notify-box active">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>방금</p>
//                   <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
//                 </div>
//               </div>
//             </a>
//           </li>
//           <li class="notify-box active">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>35분전</p>
//                   <p class="notify__desc">5월 카드사별 무이자 및 부분무이자 안내</p>
//                 </div>
//               </div>
//             </a>
//           </li>
//           <li class="notify-box">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>2024.05.05</p>
//                   <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
//                 </div>
//               </div>
//             </a>
//           </li>
//           <li class="notify-box">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>2024.05.05</p>
//                   <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
//                 </div>
//               </div>
//             </a>
//           </li>
//           <li class="notify-box">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>2024.05.05</p>
//                   <p class="notify__desc">5월 비드바이 코리아 휴무 안내<br />5월 비드바이 코리아 휴무 안내</p>
//                 </div>
//               </div>
//             </a>
//           </li>
//           <li class="notify-box">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>2024.05.05</p>
//                   <p class="notify__desc">5월 비드바이 코리아 휴무 안내<br />5월 비드바이 코리아 휴무 안내</p>
//                 </div>
//               </div>
//             </a>
//           </li>
//           <li class="notify-box">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>2024.05.05</p>
//                   <p class="notify__desc">5월 비드바이 코리아 휴무 안내<br />5월 비드바이 코리아 휴무 안내</p>
//                 </div>
//               </div>
//             </a>
//           </li>
//           <li class="notify-box">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[알림]</b>2024.05.05</p>
//                   <p class="notify__desc">
//                     BJP0194029485 해당 주문건 결제가 필요합니다.BJP0194029485 해당 주문건 결제가 필요합니다.
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </li>
//         </ul>
//       </li>
//       <!-- 공지·뉴스 -->
//       <li data-idx="1" style="display: none">
//         <ul class="notify-list">
//           <li class="notify-box active">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>방금</p>
//                   <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
//                 </div>
//               </div>
//             </a>
//           </li>
//         </ul>
//       </li>
//       <!-- 알림 -->
//       <li data-idx="2" style="display: none">
//         <ul class="notify-list">
//           <li class="notify-box active">
//             <a href="">
//               <div class="notify-box-left">
//                 <figure class="country-box">
//                   <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                 </figure>
//                 <div class="notify__info">
//                   <p class="notify__title"><b>[공지]</b>방금</p>
//                   <p class="notify__desc">
//                     5월 비드바이 코리아 휴무 안내월 비드바이 코리아 휴무 안내월 비드바이 코리아 휴무 안내
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   </div>
// </section>
// </div>

// <!-- 카테고리 -->
// <nav class="modal-category modal" style="display: none">
// <div class="modal__dim" onclick="closeModal(this)"></div>
// <div class="modal__box">
//   <button type="button" class="modal__close-button" onclick="closeModal(this)"></button>
//   <div class="category__tab-container tabs-container">
//     <div class="category__tabs tabs">
//       <button type="button" data-idx="0" class="active">카테고리</button>
//       <button type="button" data-idx="1">맞춤쇼핑</button>
//       <button type="button" data-idx="2">이용가이드</button>
//     </div>
//     <ul class="category__tabs-content tabs-content">
//       <!-- 카테고리 -->
//       <li data-idx="0" class="tabs-content__category">
//         <ul>
//           <li class="category__list">
//             <div class="category__list-inner">
//               <!-- 1 depth -->
//               <div class="category__one-depth category-depth">
//                 <button type="button" class="category__accordion-button toggle-button">
//                   <figure class="img-wrap">
//                     <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                   </figure>
//                   <p>일본야후경매</p>
//                 </button>
//                 <ul class="category__sub-list">
//                   <li><button type="button">컴퓨터</button></li>
//                   <li><button type="button">가전, AV, 카메라</button></li>
//                   <li><button type="button">음악</button></li>
//                   <li><button type="button">책, 잡지</button></li>
//                   <li><button type="button">장난감, 게임</button></li>
//                   <li><button type="button">취미, 문화</button></li>
//                   <li><button type="button">앤틱, 컬렉션</button></li>
//                   <li><button type="button">스포츠, 레저</button></li>
//                   <li><button type="button">자동차, 오토바이</button></li>
//                   <li><button type="button" class="star">패션 액세서리, 시계</button></li>
//                   <li><button type="button">뷰티, 건강</button></li>
//                   <li><button type="button">컴퓨터</button></li>
//                   <li><button type="button">가전, AV, 카메라</button></li>
//                   <li><button type="button" class="star">음악</button></li>
//                   <li><button type="button">책, 잡지</button></li>
//                   <li><button type="button">장난감, 게임</button></li>
//                   <li><button type="button">취미, 문화</button></li>
//                   <li><button type="button">앤틱, 컬렉션</button></li>
//                   <li><button type="button">스포츠, 레저</button></li>
//                   <li><button type="button">자동차, 오토바이</button></li>
//                   <li><button type="button">패션 액세서리, 시계</button></li>
//                   <li><button type="button">뷰티, 건강</button></li>
//                 </ul>
//               </div>
//               <!-- 2 depth -->
//               <div class="category__two-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <!-- <button type="button" class="category__sub-button toggle-button star"> -->
//                     <p>유아용품</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><button type="button">기저귀,배변용품</button></li>
//                   <li><button type="button">유모차,이동수단</button></li>
//                   <li><button type="button">식사, 수유용품</button></li>
//                   <li><button type="button">목욕용품 . 안전용품</button></li>
//                   <li><button type="button">유아가구</button></li>
//                   <li><button type="button">기타</button></li>
//                   <li><button type="button">행사, 기념품</button></li>
//                 </ul>
//               </div>
//               <!-- 3 depth -->
//               <div class="category__three-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <p>유아가구</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><a href="">목욕용품 . 안전용품</a></li>
//                   <li><a href="">유아가구</a></li>
//                   <li><a href="">기저귀,배변용품</a></li>
//                   <li><a href="">유모차,이동수단</a></li>
//                   <li><a href="">식사, 수유용품</a></li>
//                   <li><a href="">기타</a></li>
//                   <li><a href="">행사, 기념품</a></li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//           <li class="category__list">
//             <div class="category__list-inner">
//               <!-- 1 depth -->
//               <div class="category__one-depth category-depth">
//                 <button type="button" class="category__accordion-button toggle-button">
//                   <figure class="img-wrap">
//                     <img src="../../assets/images/icon/country_usa.png" alt="usa" />
//                   </figure>
//                   <p>미국이베이경매</p>
//                 </button>
//                 <ul class="category__sub-list">
//                   <li><button type="button">컴퓨터</button></li>
//                   <li><button type="button">가전, AV, 카메라</button></li>
//                   <li><button type="button">음악</button></li>
//                 </ul>
//               </div>
//               <!-- 2 depth -->
//               <div class="category__two-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <!-- <button type="button" class="category__sub-button toggle-button star"> -->
//                     <p>유아용품</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><button type="button">기저귀,배변용품</button></li>
//                   <li><button type="button">유모차,이동수단</button></li>
//                   <li><button type="button">식사, 수유용품</button></li>
//                   <li><button type="button">목욕용품 . 안전용품</button></li>
//                   <li><button type="button">유아가구</button></li>
//                   <li><button type="button">기타</button></li>
//                   <li><button type="button">행사, 기념품</button></li>
//                 </ul>
//               </div>
//               <!-- 3 depth -->
//               <div class="category__three-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <p>유아가구</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><a href="">목욕용품 . 안전용품</a></li>
//                   <li><a href="">유아가구</a></li>
//                   <li><a href="">기저귀,배변용품</a></li>
//                   <li><a href="">유모차,이동수단</a></li>
//                   <li><a href="">식사, 수유용품</a></li>
//                   <li><a href="">기타</a></li>
//                   <li><a href="">행사, 기념품</a></li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//           <li class="category__list">
//             <div class="category__list-inner">
//               <!-- 1 depth -->
//               <div class="category__one-depth category-depth">
//                 <button type="button" class="category__accordion-button toggle-button">
//                   <figure class="img-wrap">
//                     <img src="../../assets/images/icon/country_uk.png" alt="uk" />
//                   </figure>
//                   <p>영국이베이경매</p>
//                 </button>
//                 <ul class="category__sub-list">
//                   <li><button type="button">컴퓨터</button></li>
//                   <li><button type="button">가전, AV, 카메라</button></li>
//                   <li><button type="button">음악</button></li>
//                 </ul>
//               </div>
//               <!-- 2 depth -->
//               <div class="category__two-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <!-- <button type="button" class="category__sub-button toggle-button star"> -->
//                     <p>유아용품</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><button type="button">식사, 수유용품</button></li>
//                   <li><button type="button">목욕용품 . 안전용품</button></li>
//                   <li><button type="button">유아가구</button></li>
//                   <li><button type="button">기타</button></li>
//                   <li><button type="button">행사, 기념품</button></li>
//                 </ul>
//               </div>
//               <!-- 3 depth -->
//               <div class="category__three-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <p>유아가구</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><a href="">목욕용품 . 안전용품</a></li>

//                   <li><a href="">기타</a></li>
//                   <li><a href="">행사, 기념품</a></li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//           <li class="category__list">
//             <div class="category__list-inner">
//               <!-- 1 depth -->
//               <div class="category__one-depth category-depth">
//                 <button type="button" class="category__accordion-button toggle-button">
//                   <figure class="img-wrap">
//                     <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                   </figure>
//                   <p>일본메루카리</p>
//                 </button>
//                 <ul class="category__sub-list">
//                   <li><button type="button">컴퓨터</button></li>
//                   <li><button type="button">가전, AV, 카메라</button></li>
//                   <li><button type="button">음악</button></li>
//                 </ul>
//               </div>
//               <!-- 2 depth -->
//               <div class="category__two-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <!-- <button type="button" class="category__sub-button toggle-button star"> -->
//                     <p>유아용품</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><button type="button">식사, 수유용품</button></li>
//                   <li><button type="button">목욕용품 . 안전용품</button></li>
//                   <li><button type="button">유아가구</button></li>
//                   <li><button type="button">기타</button></li>
//                   <li><button type="button">행사, 기념품</button></li>
//                 </ul>
//               </div>
//               <!-- 3 depth -->
//               <div class="category__three-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <p>유아가구</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><a href="">목욕용품 . 안전용품</a></li>

//                   <li><a href="">기타</a></li>
//                   <li><a href="">행사, 기념품</a></li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//           <li class="category__list">
//             <div class="category__list-inner">
//               <!-- 1 depth -->
//               <div class="category__one-depth category-depth">
//                 <button type="button" class="category__accordion-button toggle-button">
//                   <figure class="img-wrap">
//                     <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                   </figure>
//                   <p>일본구매대행</p>
//                 </button>
//                 <ul class="category__sub-list">
//                   <li><button type="button">컴퓨터</button></li>
//                   <li><button type="button">가전, AV, 카메라</button></li>
//                   <li><button type="button">음악</button></li>
//                 </ul>
//               </div>
//               <!-- 2 depth -->
//               <div class="category__two-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <!-- <button type="button" class="category__sub-button toggle-button star"> -->
//                     <p>유아용품</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><button type="button">식사, 수유용품</button></li>
//                   <li><button type="button">목욕용품 . 안전용품</button></li>
//                   <li><button type="button">유아가구</button></li>
//                   <li><button type="button">기타</button></li>
//                   <li><button type="button">행사, 기념품</button></li>
//                 </ul>
//               </div>
//               <!-- 3 depth -->
//               <div class="category__three-depth category-depth">
//                 <div class="category__selected-text">
//                   <button type="button" class="category__back-button">
//                     <span class="blind">메뉴 뒤로가기</span>
//                   </button>
//                   <button type="button" class="category__sub-button toggle-button active">
//                     <p>유아가구</p>
//                   </button>
//                 </div>
//                 <ul class="category__sub-list">
//                   <li><a href="">목욕용품 . 안전용품</a></li>

//                   <li><a href="">기타</a></li>
//                   <li><a href="">행사, 기념품</a></li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//         </ul>
//         <!-- 1 뎁스 별 추천 아이템 정보  -->
//         <div class="category__items item-list">
//           <a href="" class="item-box simple">
//             <figure class="item__img img-wrap">
//               <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//             </figure>
//             <div class="item-box__inner">
//               <div class="item__market line">
//                 <figure class="item__country">
//                   <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                 </figure>
//                 <p>라쿠텐 - Ten past Ten</p>
//               </div>
//               <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
//             </div>
//           </a>
//           <a href="" class="item-box simple">
//             <figure class="item__img img-wrap">
//               <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//             </figure>
//             <div class="item-box__inner">
//               <div class="item__market line">
//                 <figure class="item__country">
//                   <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                 </figure>
//                 <p>라쿠텐 - Ten past Ten</p>
//               </div>
//               <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
//             </div>
//           </a>
//         </div>
//       </li>
//       <!-- 맞춤쇼핑 -->
//       <li data-idx="1" class="tabs-content__custom-shopping" style="display: none">
//         <!-- PUB :: 1.로그인 전 -->
//     <article class="in-progress offline">
//         <p class="in-progress__desc">
//           로그인 하시면<br />
//           나만의 맞춤 쇼핑 설정이 가능합니다.
//         </p>
//         <a href="../auth/index.html" class="basic-button__blue in-progress__button">로그인</a>
//       </article>
//       <article class="custom-shopping">
//         <h3 class="in-progress__title"><b>맞춤 쇼핑 구성</b></h3>
//         <div class="custom-shopping__box">
//           <ul class="custom-shopping__list">
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="aaa" checked />
//                 <label for="aaa">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="bbb" />
//                 <label for="bbb">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="ccc" />
//                 <label for="ccc">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="dddd" />
//                 <label for="dddd">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="eee" />
//                 <label for="eee">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="fff" />
//                 <label for="fff">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="gggg" />
//                 <label for="gggg">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="jjjj" />
//                 <label for="jjjj">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="hhhh" />
//                 <label for="hhhh">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="eees" />
//                 <label for="eees">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//             <li>
//               <div class="basic-checkbox__circle">
//                 <input type="checkbox" id="wwww" />
//                 <label for="wwww">
//                   <span class="basic-checkbox__circle-icon"></span>
//                   <span class="basic-checkbox__circle-text">나의 진행중 경매</span>
//                 </label>
//               </div>
//               <button type="button" class="custom-shopping__drag-button"></button>
//             </li>
//           </ul>
//         </div>
//         <div class="custom-shopping__button-wrap">
//           <button type="reset" class="basic-button__gray-line">취소</button>
//           <button type="button" class="basic-button__gray">설정 저장</button>
//         </div>
//       </article> -->
//         <!-- PUB :: 2.로그인 후 -->
//         <article class="in-progress login">
//           <h3 class="in-progress__title"><b>나의 진행중 경매</b> <span>(0)</span></h3>
//           <!-- 2-1. 로그인 후 :: 진행중 경매가 없을때  -->
//           <!-- <p class="in-progress__desc">
//           <b>진행 중 경매 입찰 건이 없네요.</b><br />마감 임박한 아이템에서<br />참~ 즐거움을 경험하세요.
//         </p>
//         <a href="" class="basic-button__blue in-progress__button">Hot 마감임박 경매</a> -->
//           <!-- 2-2. 로그인 후 :: 진행중 경매가 있을때 -->
//           <div class="swiper in-progress-items-swiper item-list">
//             <div class="swiper-wrapper">
//               <li class="swiper-slide item-box simple">
//                 <a href="../auctions/index.html">
//                 <figure class="item__img img-wrap">
//                   <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                 </figure>
//                 <div class="item-box__inner">
//                   <div class="item__market line">
//                     <figure class="item__country">
//                       <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                     </figure>
//                     <p>라쿠텐 - Ten past Ten</p>
//                   </div>
//                   <div class="item__name">
//                     あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ
//                   </div>
//                 </div></a>
//                 </li>

//                 <li class="swiper-slide item-box simple">
//                 <a href="../auctions/index.html">
//                 <figure class="item__img img-wrap">
//                   <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                 </figure>
//                 <div class="item-box__inner">
//                   <div class="item__market line">
//                     <figure class="item__country">
//                       <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                     </figure>
//                     <p>라쿠텐 - Ten past Ten</p>
//                   </div>
//                   <div class="item__name">
//                     あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ
//                   </div>
//                 </div></a>

//                 </li>

//                 <li class="swiper-slide item-box simple">
//                 <a href="">
//                 <figure class="item__img img-wrap">
//                   <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                 </figure>
//                 <div class="item-box__inner">
//                   <div class="item__market line">
//                     <figure class="item__country">
//                       <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                     </figure>
//                     <p>라쿠텐 - Ten past Ten</p>
//                   </div>
//                   <div class="item__name">
//                     あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ
//                   </div>
//                 </div></a>

//                 </li>

//                 <li class="swiper-slide item-box simple">
//                 <a href="">
//                 <figure class="item__img img-wrap">
//                   <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//                 </figure>
//                 <div class="item-box__inner">
//                   <div class="item__market line">
//                     <figure class="item__country">
//                       <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                     </figure>
//                     <p>라쿠텐 - Ten past Ten</p>
//                   </div>
//                   <div class="item__name">
//                     あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ
//                   </div>
//                 </div></a>

//               </li>
//             </div>
//           </div>

//           <!-- <ul class="in-progress__items item-list">
//           <li class="item-box simple">
//             <figure class="item__img img-wrap">
//               <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//             </figure>
//             <div class="item-box__inner">
//               <div class="item__market line">
//                 <figure class="item__country">
//                   <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                 </figure>
//                 <p>라쿠텐 - Ten past Ten</p>
//               </div>
//               <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
//             </div>
//           </li>
//           <li class="item-box simple">
//             <figure class="item__img img-wrap">
//               <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//             </figure>
//             <div class="item-box__inner">
//               <div class="item__market line">
//                 <figure class="item__country">
//                   <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                 </figure>
//                 <p>라쿠텐 - Ten past Ten</p>
//               </div>
//               <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
//             </div>
//           </li>
//           <li class="item-box simple">
//             <figure class="item__img img-wrap">
//               <img src="../../assets/images/dummy/item_01.jpg" alt="item" />
//             </figure>
//             <div class="item-box__inner">
//               <div class="item__market line">
//                 <figure class="item__country">
//                   <img src="../../assets/images/icon/country_jp.png" alt="jp" />
//                 </figure>
//                 <p>라쿠텐 - Ten past Ten</p>
//               </div>
//               <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
//             </div>
//           </li>
//         </ul>

//           <section class="custom-shopping__tab-wrap">
//             <div class="tabs-container">
//               <div class="custom-shopping__tabs tabs">
//                 <button type="button" class="active" data-idx="0">관심아이템 (3)</button>
//                 <button type="button" data-idx="1">최근 본 아이템 (5)</button>
//               </div>
//               <ul class="custom-shopping__tabs-content tabs-content">
//                 <!-- 관심 아이템 -->
//                 <li data-idx="0">
//                   <!-- <p class="custom-shopping__empty-text">
//                   관심 아이템이 없습니다.
//                 </p> -->
//                   <div class="swiper like-item-swiper">
//                     <ul class="swiper-wrapper">
//                       <li class="swiper-slide item-list-box">
//                         <a href="">
//                           <figure class="item-list-box__img img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                           <div class="item-list-box__desc">
//                             <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
//                             <p class="item-list-box__name p_1">닌텐도 3 DS미스티핀크 닌텐도 Nintend</p>
//                             <p class="item-list-box__price">
//                               <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
//                             </p>
//                             <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
//                           </div>
//                         </a>
//                       </li>
//                       <li class="swiper-slide item-list-box">
//                         <a href="">
//                           <figure class="item-list-box__img img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                           <div class="item-list-box__desc">
//                             <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
//                             <p class="item-list-box__name p_1">
//                               닌텐도 3 DS미스티핀크 닌텐도 Nintend닌텐도 3 DS미스티핀크 닌텐도 Nintend닌텐도 3
//                               DS미스티핀크 닌텐도 Nintend
//                             </p>
//                             <p class="item-list-box__price">
//                               <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
//                             </p>
//                             <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
//                           </div>
//                         </a>
//                       </li>
//                       <li class="swiper-slide item-list-box">
//                         <a href="">
//                           <figure class="item-list-box__img img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                           <div class="item-list-box__desc">
//                             <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
//                             <p class="item-list-box__name p_1">닌텐도 3 DS미스티핀크 닌텐도 Nintend</p>
//                             <p class="item-list-box__price">
//                               <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
//                             </p>
//                             <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
//                           </div>
//                         </a>
//                       </li>
//                       <li class="swiper-slide item-list-box">
//                         <a href="">
//                           <figure class="item-list-box__img img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                           <div class="item-list-box__desc">
//                             <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
//                             <p class="item-list-box__name p_1">닌텐도 3 DS미스티핀크 닌텐도 Nintend</p>
//                             <p class="item-list-box__price">
//                               <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
//                             </p>
//                             <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
//                           </div>
//                         </a>
//                       </li>
//                       <li class="swiper-slide item-list-box">
//                         <a href="">
//                           <figure class="item-list-box__img img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                           <div class="item-list-box__desc">
//                             <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
//                             <p class="item-list-box__name p_1">
//                               닌텐도 3 DS미스티핀크 닌텐도 Nintend닌텐도 3 DS미스티핀크 닌텐도 Nintend닌텐도 3
//                               DS미스티핀크 닌텐도 Nintend
//                             </p>
//                             <p class="item-list-box__price">
//                               <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
//                             </p>
//                             <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
//                           </div>
//                         </a>
//                       </li>
//                       <li class="swiper-slide item-list-box">
//                         <a href="">
//                           <figure class="item-list-box__img img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                           <div class="item-list-box__desc">
//                             <p class="item-list-box__market"><span>[YAHOO]</span>j1134177132</p>
//                             <p class="item-list-box__name p_1">닌텐도 3 DS미스티핀크 닌텐도 Nintend</p>
//                             <p class="item-list-box__price">
//                               <b>¥ 15,000</b><span class="item-list-box__num">입찰 34건</span>
//                             </p>
//                             <p class="item-list-box__end-item">종료 : 2024.05.02 15:35:46</p>
//                           </div>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>

//                 <!-- 최근 본 아이템 -->
//                 <li data-idx="1" style="display: none">
//                   <!-- <p class="custom-shopping__empty-text">
//                   최근 본 아이템이 없습니다.
//                 </p> -->
//                   <div class="swiper recent-item-swiper">
//                     <ul class="swiper-wrapper">
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                       <li class="swiper-slide">
//                         <a href="">
//                           <figure class="img-wrap">
//                             <img src="../../assets/images/dummy/item_01.jpg" alt="" />
//                           </figure>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </section>

//           <ul class="custom-shopping__board-wrap">
//             <li class="custom-shopping__board">
//               <div class="custom-shopping__board-title">
//                 <h3 class="in-progress__title"><b>관심키워드</b> <span>(3건)</span> <a href="">more</a></h3>
//               </div>
//               <!-- <div class="custom-shopping__board-empty-text">등록된 관심 키워드가 없습니다.</div> -->
//               <ul class="custom-shopping__board-list">
//                 <li>
//                   <a href="">
//                     <span class="custom-shopping__board-time">4일전</span>
//                     <p class="custom-shopping__board-name">야후경매 - 탤런트 상품</p>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <span class="custom-shopping__board-time">4일전</span>
//                     <p class="custom-shopping__board-name">야후경매 - 탤런트 상품</p>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <span class="custom-shopping__board-time">124일</span>
//                     <p class="custom-shopping__board-name">미국이베이 - 자동차,보트</p>
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li class="custom-shopping__board">
//               <div class="custom-shopping__board-title">
//                 <h3 class="in-progress__title"><b>관심판매자</b> <span>(0건)</span> <a href="">more</a></h3>
//               </div>

//               <div class="custom-shopping__board-empty-text">등록된 관심판매자가 없습니다.</div>
//               <!-- <ul class="custom-shopping__board-list">
//               <li>
//                 <a href="">
//                   <span class="custom-shopping__board-time">4일전</span>
//                   <p class="custom-shopping__board-name">영국이베이 - bluechadr</p>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <span class="custom-shopping__board-time">4일전</span>
//                   <p class="custom-shopping__board-name">야후경매 - agodoa1003</p>
//                 </a>
//               </li>
//             </ul> -->
//             </li>
//             <li class="custom-shopping__board">
//               <div class="custom-shopping__board-title">
//                 <h3 class="in-progress__title"><b>바로가기</b> <span>(3건)</span> <a href="">more</a></h3>
//               </div>

//               <!-- <div class="custom-shopping__board-empty-text">등록된 바로가기가 없습니다.</div> -->
//               <ul class="custom-shopping__board-list">
//                 <li>
//                   <a href="">
//                     <p class="board-title">냉장고 바로가기</p>
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//           <div class="board__button-wrap">
//             <button class="basic-button__dark-gray" type="button">맞춤쇼핑 설정</button>
//           </div>
//         </article>
//       </li>
//       <!-- 이용가이드 -->
//       <li data-idx="2" class="tabs-content__guide" style="display: none">
//         <section class="guide__banner">
//           <a href="">
//             <figure>
//               <img
//                 src="../../assets/images/dummy/guide_banner_01.png"
//                 alt="비드바이 리뉴얼 기념 고객감사 이벤트"
//               />
//             </figure>
//           </a>
//           <a href="">
//             <figure>
//               <img src="../../assets/images/dummy/guide_banner_02.png" alt="첫 구매자 혜택 장바구니 할인" />
//             </figure>
//           </a>
//         </section>
//         <section class="guide-content">
//           <ul class="guide-content__list">
//             <li>
//               <a href="" class="guide-content__accordion-button">
//                 <div class="guide-content__title in-progress__title">
//                   비드바이코리아 <b>4대 무료 서비스</b> 안내
//                 </div>
//               </a>
//             </li>
//             <li>
//               <button type="button" class="guide-content__accordion-button toggle-button">
//                 <div class="guide-content__title in-progress__title">경매대행 이용안내</div>
//               </button>
//               <ul class="guide-content__sub-list">
//                 <li><a href="">경매 이용 주의사항</a></li>
//                 <li><a href="">경매대행의 보증금 결제 및 정책</a></li>
//                 <li><a href="">경매대행 경매신청 방법</a></li>
//                 <li><a href="">경매대행 1차 및 2차 결제 안내</a></li>
//                 <li><a href="">경매 국제배송, 통관, 배송완료 안내</a></li>
//               </ul>
//             </li>
//             <li>
//               <button type="button" class="guide-content__accordion-button toggle-button">
//                 <div class="guide-content__title in-progress__title">해외구매대행 이용안내</div>
//               </button>
//               <ul class="guide-content__sub-list">
//                 <li><a href="">해외 구매대행 신청 전 주의 사항</a></li>
//                 <li><a href="">해외 구매대행 신청 하기</a></li>
//                 <li><a href="">구매대행의 결제 안내 (1차, 2차 결제)</a></li>
//                 <li><a href="">구매대행 국제배송, 통관, 배송완료 안내</a></li>
//               </ul>
//             </li>
//             <li>
//               <button type="button" class="guide-content__accordion-button toggle-button">
//                 <div class="guide-content__title in-progress__title">각종 수수료 및 관세, 비용안내</div>
//               </button>
//               <ul class="guide-content__sub-list">
//                 <li><a href="">각종 대행 수수료 안내</a></li>
//                 <li><a href="">대행 결제 관련 수수료 및 비용안내</a></li>
//                 <li><a href="">현지 및 국제 배송 안내</a></li>
//                 <li><a href="">통관 관련 상세 안내</a></li>
//                 <li><a href="">관세 비용 및 정책 안내</a></li>
//               </ul>
//             </li>
//             <li>
//               <button type="button" class="guide-content__accordion-button toggle-button">
//                 <div class="guide-content__title in-progress__title">취소 · 반품 · 환불 · 교환</div>
//               </button>
//               <ul class="guide-content__sub-list">
//                 <li><a href="">해외 경매 & 구매 취소 안내</a></li>
//                 <li><a href="">경매 & 구매 반품/환불/교환 정책</a></li>
//                 <li><a href="">해외 경매 및 구매 클레임 안내</a></li>
//               </ul>
//             </li>
//             <li>
//               <button type="button" class="guide-content__accordion-button toggle-button">
//                 <div class="guide-content__title in-progress__title">파손 · 분실 보상안내</div>
//               </button>
//               <ul class="guide-content__sub-list">
//                 <li><a href="">EMS 배송 정책</a></li>
//                 <li><a href="">비드바이 특송 정책</a></li>
//                 <li><a href="">운송사 보상불가 규정 안내</a></li>
//               </ul>
//             </li>
//             <li>
//               <button type="button" class="guide-content__accordion-button toggle-button">
//                 <div class="guide-content__title in-progress__title">회원등급별 혜택 안내</div>
//               </button>
//               <ul class="guide-content__sub-list">
//                 <li><a href="">신규회원 기본 혜택</a></li>
//                 <li><a href="">일반회원 혜택</a></li>
//                 <li><a href="">우수회원 혜택</a></li>
//                 <li><a href="">프리미엄 회원의 혜택</a></li>
//                 <li><a href="">VIP 회원의 특별 혜택 확인</a></li>
//               </ul>
//             </li>
//             <li>
//               <button type="button" class="guide-content__accordion-button toggle-button">
//                 <div class="guide-content__title in-progress__title">경매이용 TIP 안내</div>
//               </button>
//               <ul class="guide-content__sub-list">
//                 <li><a href="">경매이용 TIP 안내</a></li>
//               </ul>
//             </li>
//           </ul>
//         </section>
//       </li>
//     </ul>
//   </div>
// </div>
// </nav>
// `;

// 공통 푸터
const $FOOTER_CONT = `
<div>
 <div class="footer__top">
          <div class="inner-width flex">
            <ul class="foot_nav">
              <li>
                <a href="">회사소개</a>
              </li>
              <li>
                <a href=""><b>개인정보처리방침</b></a>
              </li>
              <li>
                <a href="">이용약관</a>
              </li>
              <li>
                <a href="">국제전자상거래피해상담</a>
              </li>
              <li>
                <a href="">이메일무단수집거부</a>
              </li>
            </ul>

            <ul class="footer__sns">
              <li>
                <a href="https://blog.naver.com/bidbuykr" target="_black" class="footer__sns-blog">
                  <span class="blind">Naver</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bidbuykorea/" target="_black" class="footer__sns-instagram">
                  <span class="blind">Instagram</span>
                </a>
              </li>
              <li>
                <a href="" class="footer__sns-youtube">
                  <span class="blind">YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="inner-width flex">
            <h1 class="footer__logo"><span class="blind">Bidbuy</span></h1>
            <div class="footer__info">
              <div class="footer__info-top">
                <div class="footer__info-inner">
                  <dl>
                    <dt class="blind">회사명</dt>
                    <dd>(주)비드바이 코리아</dd>
                  </dl>
                  <dl>
                    <dt>사업자등록번호 :</dt>
                    <dd>107-87-03406</dd>
                  </dl>
                  <dl>
                    <dt>통신판매업신고 :</dt>
                    <dd>제2015-서울영등포-0315호</dd>
                  </dl>
                  <dl>
                    <dt>무역업고유번호 :</dt>
                    <dd>30636624</dd>
                  </dl>
                </div>
                <div class="footer__info-inner">
                  <dl>
                    <dt>구매대행업 등록번호 :</dt>
                    <dd>B-1-22-00009</dd>
                  </dl>
                  <dl>
                    <dt>수입식품등 인터넷구매대행업 등록번호 :</dt>
                    <dd>제 20160002885호</dd>
                  </dl>
                </div>

                <div class="footer__info-inner">
                  <dl>
                    <dt>주소 :</dt>
                    <dd><address>서울특별시 영등포구 경인로 775 에이스하이테크시티 1동 1506호</address></dd>
                  </dl>
                  <dl>
                    <dt>대표자 :</dt>
                    <dd>예창민</dd>
                  </dl>
                  <dl>
                    <dt>Email :</dt>
                    <dd><a href="mailto:korea@bidbuy.co.kr">korea@bidbuy.co.kr</a></dd>
                  </dl>
                </div>
              </div>
              <p class="footer__info-mid">
                비드바이는 해외경매/해외구매 상품의 입찰 및 구매를 중개/대행하는 서비스를 제공하며 그 상품 및 등록내용에 대해서는 일체의 책임을 지지
                않습니다.<br />
                비드바이는 관세법 등 관련규정을 준수하고, 불법물품을 취급하지 아니하며, 분할배송에 의한 가격허위신고(15만원이하로 임의조정)등<br />
                구매자의 불법사항 요청에는 일체 협조하지 않습니다.
              </p>
              <p class="footer__info-bottom">Copyright(C) 2024 BIDBUY KOREA All Rights Reserved.</p>
            </div>
          </div>
        </div>
        </div>
`;

// 공통 마이페이지 대쉬보드
const $MYPAGE_DASHBOARD_CONT = `
<div class="inner-width">
<article class="my-dashboard__profile">
  <div class="my-dashboard-left-box my-box box-shadow">
    <div class="my-dashboard__profile-links">
      <a href="../my/info.html" class="profile-link">개인정보관리</a>
      <a href="" class="profile-link">로그아웃</a>
    </div>
    <div class="my-dashboard__profile-info">
      <div class="my-dashboard__img-wrap img-wrap">
        <img src="../../assets/images/dummy/user.png" alt="프로필이미지" />
      </div>
      <div class="my-dashboard__profile-box">
        <p class="my-dashboard__username"><b>홍길동</b>님</p>
        <div class="my-dashboard-progress">
          <p class="my-dashboard__user-rank">우수회원</p>
          <div class="my-dashboard-progress-bar">
            <progress value="100" max="190"></progress>
          </div>
          <p class="my-dashboard-progress__percentage"><span>80%</span> 진행</p>
          <div class="my-dashboard__membership-status">
            <figure><img src="../../assets/images/icon/rank_premium.png" alt="premium" /></figure>
            프리미엄
          </div>
        </div>
      </div>
    </div>
    <div class="my-dashboard__menu">
      <a href="../cs/qna.html">
        <div class="my-dashboard__menu-icon">
          <span class="my-dashboard__menu-notification">2</span>
        </div>
        <b>1:1문의</b>
      </a>

      <a href="../mypage/index.html">
        <div class="my-dashboard__menu-icon"></div>
        <b>메모알림</b>
      </a>

      <a href="../mypage/wish.html">
        <div class="my-dashboard__menu-icon"></div>
        <b>관심상품</b>
      </a>

      <a href="../mypage/wish.html">
        <div class="my-dashboard__menu-icon"></div>
        <b>최근 본 상품</b>
      </a>

      <a href="../mypage/wish.html">
        <div class="my-dashboard__menu-icon"></div>
        <b>나의 즐겨찾기</b>
      </a>
    </div>
  </div>
  <div class="my-dashboard-side-box my-box box-shadow">
    <a href="../mypage/coupon.html" class="my-dashboard__bid-point">
      <p class="side-title">등급포인트</p>
      <p class="side-value p_1"><b>180</b>점</p>
    </a>
    <a href="../mypage/management.html" class="my-dashboard__coupon">
      <p class="side-title">쿠폰</p>
      <p class="side-value p_1"><b>8</b>장</p>
    </a>
    <a href="../mypage/management.html" class="my-dashboard__ticket">
      <p class="side-title">정액권</p>
      <p class="side-value p_1"><b>1</b>개월 (잔여 20회)</p>
    </a>
    <a href="../mypage/management.html" class="my-dashboard__deposit">
      <p class="side-title">예치금</p>
      <p class="side-value p_1"><b>100</b></p>
    </a>
    <a href="../mypage/management.html" class="my-dashboard__yahoo-point">
      <p class="side-title">야후보증금</p>
      <p class="side-value p_1"><b>3,000,000</b>원</p>
    </a>
    <a href="../mypage/management.html" class="my-dashboard__ebay-point">
      <p class="side-title">이베이보증금</p>
      <p class="side-value p_1"><b>30,000</b></p>
    </a>
  </div>
</article>

<!-- 나의 쇼핑 현황 -->
<article class="shopping-status" >
  <div class="shopping-status__header">
    <h2>나의 쇼핑 현황</h2>
    <div class="shopping-status__utils">
      <a href="" class="shopping-status__utils-button basic-button__light-gray-line"> 전체목록보기 </a>
      <!-- PUB ::  주문상세검색모드 <-> 주문배송절차 모드 토글 -->
      <button
        type="button"
        class="shopping-status__utils-button basic-button__light-gray-line"
        onclick="changModeButton(this)"
      >
        상세검색 모드
      </button>
    </div>
  </div>

  <!-- A ::나의 쇼핑 현황 (주문배송절차 모드) -->
  <div class="shopping-status__summary-box">
    <ul class="shopping-status__list-wrap my-box box-shadow">
      <!-- PUB :: shopping-status__link에 active 클래스 넣으면 active 효과 추가 -->
      <li class="shopping-status__list first-status-list">
        <a href="../mypage/order_bid_list.html" class="shopping-status__link active">
          <span class="status-title">경매 입찰상품</span><span class="status-value"><b>5</b>건</span>
        </a>
        <a href="" class="shopping-status__link">
          <span class="status-title">구매 신청상품</span><span class="status-value"><b>5</b>건</span>
        </a>
      </li>
      <li class="shopping-status__list">
        <a href="../mypage/payment_pending.html" class="shopping-status__link active">
          <span class="status-title"
            >1차<br />
            결제대기</span
          >
          <span class="status-value"><b>5</b>건</span>
        </a>
      </li>
      <li class="shopping-status__list">
        <a href="" class="shopping-status__link">
          <span class="status-title"
            >1차<br />
            완료/현지도착</span
          >
          <span class="status-value"><b>5</b>건</span>
        </a>
      </li>
      <li class="shopping-status__list">
        <a href="" class="shopping-status__link">
          <span class="status-title"
            >2차<br />
            결제대기</span
          >
          <span class="status-value"> <b>5</b>건</span>
        </a>
      </li>
      <li class="shopping-status__list">
        <a href="" class="shopping-status__link">
          <span class="status-title"
            >2차<br />
            완료/국제배송</span
          >
          <span class="status-value"><b>5</b>건</span>
        </a>
      </li>
      <li class="shopping-status__list last-status-list">
        <a href="" class="shopping-status__link">
          <span class="status-title">취소/반품</span><span class="status-value"><b>5</b>건</span>
        </a>
        <a href="" class="shopping-status__link">
          <span class="status-title">거래완료</span><span class="status-value"><b>5</b>건</span>
        </a>
      </li>
    </ul>
    <div class="shopping-status__actions">
      <a href="../mypage/bundle_shipping_management.html" class="shopping-status__action my-box box-shadow">묶음배송 관리</a>
      <a href="../mypage/shipping.html" class="shopping-status__action my-box box-shadow">배송지 관리</a>
    </div>
  </div>

  <!-- B ::나의 쇼핑 현황 (주문내역 상세검색 모드) -->
  <div class="shopping-status__filters my-box box-shadow" style="display: none">
    <a href="../mypage/order.html" class="shopping-status__card">
      나의 쇼핑 목록<br />
      전체 보기
    </a>
    <div class="shopping-status__search">
      <!-- 검색조건 -->
      <p class="shopping-status__search-title">검색 조건<br />상세 검색</p>
      <div class="shopping-status__search-option">
        <div class="shopping-status__filter-row">
          <div class="basic-select-box">
            <select name="" id="">
              <option value="" disabled selected>거래유형</option>
              <option>거래유형1</option>
              <option>거래유형2</option>
              <option>거래유형3</option>
            </select>
          </div>
          <div class="basic-select-box">
            <select name="" id="">
              <option value="" disabled selected>거래 채널</option>
              <option>거래 채널1</option>
              <option>거래 채널2</option>
              <option>거래 채널3</option>
            </select>
          </div>
          <div class="basic-select-box">
            <select name="" id="">
              <option value="" disabled selected>주문 상태</option>
              <option>주문 상태1</option>
              <option>주문 상태2</option>
              <option>주문 상태3</option>
            </select>
          </div>
        </div>
        <div class="shopping-status__filter-row">
          <button type="button" class="recent-filter-button">최근 1개월</button>
          <div class="basic-input date-input">
            <input id="" type="date" data-placeholder="시작날짜" required aria-required="true" />
          </div>
          <span>-</span>
          <div class="basic-input date-input">
            <input id="" type="date" data-placeholder="종료날짜" required aria-required="true" />
          </div>
          <div class="basic-input text-input">
            <input id="text" type="text" placeholder="키워드 검색" />
          </div>
        </div>
      </div>
      <button class="basic-button__blue-bg-line">검색</button>
    </div>
  </div>
</article>
</div>
`;

// 공통 고객센터 대쉬보드
const $CS_DASHBOARD_CONT = `
<div class="inner-width">
<a href="" class="cs-dashboard__card-banner cs-box box-shadow">
  <h2>
    비드바이 4대<br />
    무료서비스안내
  </h2>
</a>

<!-- 쇼핑하기 | 국제배송 | 배송완료 -->
<article class="cs-menu">
  <div class="cs-menu-box cs-box box-shadow">
    <h3 class="cs-menu__title">쇼핑하기</h3>
    <p class="cs-menu__sub-title">입찰참여 & 해외구매</p>
    <div class="cs-menu-list">
      <a href="" class="active">경매입찰<br />안내</a>
      <a href="">해외구매<br />안내</a>
      <a href="">1차-결제<br />안내</a>
      <a href="">각종<br />주의사항</a>
    </div>
  </div>
  <div class="cs-menu-box cs-box box-shadow">
    <h3 class="cs-menu__title">국제배송</h3>
    <p class="cs-menu__sub-title">물품검수 & 2차-결제</p>
    <div class="cs-menu-list">
      <a href="">묶음배송<br />신청</a>
      <a href="">BIDBUY<br />혜택</a>
      <a href="">2차-결제<br />안내</a>
      <a href="">운송스케줄/<br />통관안내</a>
    </div>
  </div>
  <div class="cs-menu-box cs-box box-shadow">
    <h3 class="cs-menu__title">배송완료</h3>
    <p class="cs-menu__sub-title">수입통관 & 물품수령</p>
    <div class="cs-menu-list">
      <a href="">수입통관<br />조회</a>
      <a href="">각종신고<br />납부안내</a>
      <a href="">관부가세<br />안내</a>
      <a href="">후기평가<br />혜택</a>
    </div>
  </div>
</article>
</div>
`;

const $COMMUNITY_CONT = `<div class="inner-width">
<a href="" class="community-dashboard__banner community-box box-shadow">
  <img src="../../assets/images/dummy/community_banner.png" alt="새로운 비드바이몰" />
</a>
<a href="" class="community-dashboard__card-banner community-box box-shadow">
  <h2>
    <b>비바 출석부</b><br />
    화/목 빙고 완성하고 롤렛을 돌리세요! <br />
    월 개근 시 등급포인트 5점 혜택까지
  </h2>
</a>
<a href="../community/global_news.html" class="community-dashboard__card-banner community-box box-shadow">
  <h2>
    <b>비바 특파원</b> <br />
    글로벌 Hot 경매와 <br />
    직구 아이템을 소개
  </h2>
</a>
<div class="community-utils">
  <a href="../community/event.html" class="event-button community-box box-shadow line">이벤트</a>
  <a href="../community/review.html" class="review-button community-box box-shadow line">이용후기</a>
</div>
</div>`;

const $HEADER = document.getElementById("header");
const $FOOTER = document.getElementById("footer");
const $MYPAGE = document.getElementById("myDashBoard");
const $CS = document.getElementById("csDashboard");
const $COMMUNITY = document.getElementById("communityDashboard");

window.addEventListener("DOMContentLoaded", () => {
  if ($HEADER) {
    $HEADER.innerHTML = $HEADER_CONT;
  }
  if ($FOOTER) {
    $FOOTER.innerHTML = $FOOTER_CONT;
  }
  if ($MYPAGE) {
    $MYPAGE.innerHTML = $MYPAGE_DASHBOARD_CONT;
  }
  if ($CS) {
    $CS.innerHTML = $CS_DASHBOARD_CONT;
  }
  if ($COMMUNITY) {
    $COMMUNITY.innerHTML = $COMMUNITY_CONT;
  }
});
