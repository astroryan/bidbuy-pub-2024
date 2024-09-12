"use strict";

// 공통 헤더
let $HEADER_CONT = `   <div class="header__simple inner-width flex">
          <a href="index.html" class="header__logo"><span class="blind">Bidbuy</span></a>
          <!-- input에 커서들어가면 스타일이 바뀌도록 css에서 처리함 -->
          <!-- 검색 -->
          <form method="get" action="/search" role="search" class="search-box">
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
                        >Binaural Hemi-SyncBinaural Hemi-SyncBinaural Hemi-SyncBinaural Hemi-SyncBinaural
                        Hemi-SyncBinaural Hemi-SyncBinaural Hemi-Sync</a
                      >
                    </li>
                  </ol>
                </li>
                <!-- 검색어 배너 -->
                <li class="search-box__info-list">
                  <ul class="search-banner">
                    <li>
                      <a href="" class="search-banner__text"
                        ><span class="nowrap">야후일본 경매 초가성비 Top10 보기</span></a
                      >
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
              <a href="" class="header__util util-user">
                <span class="blind">마이페이지</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                class="header__util util-notify modal_button"
                onclick="openModal(this)"
                data-modal="notify"
              >
                <span class="blind">알림</span>
              </button>
            </li>
            <li>
              <a href="" class="header__util util-cart">
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
              <button type="button" class="category-button">
                <span class="blind">카테고리 메뉴열기</span>
              </button>
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
                          <img src="../assets/images/dummy/gnb_01.png" alt="" />
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
                            <img src="https://i.ebayimg.com/images/g/VqIAAOSwjSlmzPFE/s-l1200.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button" type="button" onClick="onClickLikeButton(this)">
                            <span>25</span>
                            <span class="like-button__icon"></span>
                          </button>
                        </div>
                        <div class="item-box simple">
                          <a href="" class="item__img img-wrap">
                            <img src="../assets/images/dummy/item_01.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button active" type="button" onClick="onClickLikeButton(this)">
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
                          <img src="../assets/images/dummy/gnb_01.png" alt="" />
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
                            <img src="https://i.ebayimg.com/images/g/VqIAAOSwjSlmzPFE/s-l1200.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button" type="button" onClick="onClickLikeButton(this)">
                            <span>25</span>
                            <span class="like-button__icon"></span>
                          </button>
                        </div>
                        <div class="item-box simple">
                          <a href="" class="item__img img-wrap">
                            <img src="../assets/images/dummy/item_01.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button active" type="button" onClick="onClickLikeButton(this)">
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
                          <img src="../assets/images/dummy/gnb_01.png" alt="" />
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
                            <img src="https://i.ebayimg.com/images/g/VqIAAOSwjSlmzPFE/s-l1200.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button" type="button" onClick="onClickLikeButton(this)">
                            <span>25</span>
                            <span class="like-button__icon"></span>
                          </button>
                        </div>
                        <div class="item-box simple">
                          <a href="" class="item__img img-wrap">
                            <img src="../assets/images/dummy/item_01.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button active" type="button" onClick="onClickLikeButton(this)">
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
                          <img src="../assets/images/dummy/gnb_01.png" alt="" />
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
                            <img src="https://i.ebayimg.com/images/g/VqIAAOSwjSlmzPFE/s-l1200.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button" type="button" onClick="onClickLikeButton(this)">
                            <span>25</span>
                            <span class="like-button__icon"></span>
                          </button>
                        </div>
                        <div class="item-box simple">
                          <a href="" class="item__img img-wrap">
                            <img src="../assets/images/dummy/item_01.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button active" type="button" onClick="onClickLikeButton(this)">
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
                          <img src="../assets/images/dummy/gnb_01.png" alt="" />
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
                            <img src="https://i.ebayimg.com/images/g/VqIAAOSwjSlmzPFE/s-l1200.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button" type="button" onClick="onClickLikeButton(this)">
                            <span>25</span>
                            <span class="like-button__icon"></span>
                          </button>
                        </div>
                        <div class="item-box simple">
                          <a href="" class="item__img img-wrap">
                            <img src="../assets/images/dummy/item_01.jpg" alt="item" />
                          </a>
                          <div class="item__info">
                            <div class="item__market">
                              <figure class="item__country">
                                <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                          <button class="like-button active" type="button" onClick="onClickLikeButton(this)">
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
                <li><a href="">커뮤니티</a></li>
                <li><a href="">고객센터</a></li>
                <li><a href="">구매대행요청</a></li>
              </ul>
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
                <li data-ids="0">
                  <ul class="notify-list">
                    <li class="notify-box active">
                      <a href="">
                        <div class="notify-box-left">
                          <figure class="country-box">
                            <img src="../assets/images/icon/country_usa.png" alt="usa" />
                          </figure>
                          <div class="notify__info">
                            <p class="notify__title"><b>[공지]</b>방금</p>
                            <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
                          </div>
                        </div>
                        <figure class="notify-box-right">
                          <img src="../assets/images/icon/arrow_notify.svg" alt=">" />
                        </figure>
                      </a>
                    </li>
                    <li class="notify-box active">
                      <a href="">
                        <div class="notify-box-left">
                          <figure class="country-box">
                            <img src="../assets/images/icon/country_usa.png" alt="usa" />
                          </figure>
                          <div class="notify__info">
                            <p class="notify__title"><b>[공지]</b>35분전</p>
                            <p class="notify__desc">5월 카드사별 무이자 및 부분무이자 안내</p>
                          </div>
                        </div>
                        <figure class="notify-box-right">
                          <img src="../assets/images/icon/arrow_notify.svg" alt=">" />
                        </figure>
                      </a>
                    </li>
                    <li class="notify-box">
                      <a href="">
                        <div class="notify-box-left">
                          <figure class="country-box">
                            <img src="../assets/images/icon/country_usa.png" alt="usa" />
                          </figure>
                          <div class="notify__info">
                            <p class="notify__title"><b>[공지]</b>2024.05.05</p>
                            <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
                          </div>
                        </div>
                        <figure class="notify-box-right">
                          <img src="../assets/images/icon/arrow_notify.svg" alt=">" />
                        </figure>
                      </a>
                    </li>
                    <li class="notify-box">
                      <a href="">
                        <div class="notify-box-left">
                          <figure class="country-box">
                            <img src="../assets/images/icon/country_usa.png" alt="usa" />
                          </figure>
                          <div class="notify__info">
                            <p class="notify__title"><b>[알림]</b>2024.05.05</p>
                            <p class="notify__desc">BJP0194029485 해당 주문건 결제가 필요합니다.</p>
                          </div>
                        </div>
                        <figure class="notify-box-right">
                          <img src="../assets/images/icon/arrow_notify.svg" alt=">" />
                        </figure>
                      </a>
                    </li>
                  </ul>
                  <div class="notify__button-wrap">
                    <button class="notify__more-button">More</button>
                  </div>
                </li>
                <!-- 공지·뉴스 -->
                <li data-ids="1" style="display: none">
                  <ul>
                    <li class="notify-box active">
                      <a href="">
                        <div class="notify-box-left">
                          <figure class="country-box">
                            <img src="../assets/images/icon/country_usa.png" alt="usa" />
                          </figure>
                          <div class="notify__info">
                            <p class="notify__title"><b>[공지]</b>방금</p>
                            <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
                          </div>
                        </div>
                        <figure class="notify-box-right">
                          <img src="../assets/images/icon/arrow_notify.svg" alt=">" />
                        </figure>
                      </a>
                    </li>
                  </ul>
                  <div class="notify__button-wrap">
                    <button class="notify__more-button">More</button>
                  </div>
                </li>
                <!-- 알림 -->
                <li data-ids="2" style="display: none">
                  <ul>
                    <li class="notify-box active">
                      <a href="">
                        <div class="notify-box-left">
                          <figure class="country-box">
                            <img src="../assets/images/icon/country_usa.png" alt="usa" />
                          </figure>
                          <div class="notify__info">
                            <p class="notify__title"><b>[공지]</b>방금</p>
                            <p class="notify__desc">5월 비드바이 코리아 휴무 안내</p>
                          </div>
                        </div>
                        <figure class="notify-box-right">
                          <img src="../assets/images/icon/arrow_notify.svg" alt=">" />
                        </figure>
                      </a>
                    </li>
                  </ul>
                  <div class="notify__button-wrap">
                    <button class="notify__more-button">More</button>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <!-- 카테고리 -->
        <nav class="category modal" style="display: none">
          <div class="modal__dim"></div>
          <div class="modal__box">
            <button type="button" class="modal__close-button"></button>
            <div class="tabs-container">
              <div class="category__tabs tabs">
                <button type="button" class="active" data-idx="0">카테고리</button>
                <button type="button" data-idx="1">맞춤쇼핑</button>
                <button type="button" data-idx="2">이용가이드</button>
              </div>
              <ul class="category__tabs-content tabs-content">
                <!-- 카테고리 -->
                <li data-ids="0">
                  <ul>
                    <li class="category__list">
                      <div class="category__list-inner">
                        <!-- 1 depth -->
                        <div class="category__one-depth category-depth">
                          <button type="button" class="category__accordion-button">
                            <figure class="img-wrap">
                              <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open">
                              <!-- <button type="button" class="category__sub-button open star" "> -->
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open" onClick="">
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
                          <button type="button" class="category__accordion-button">
                            <figure class="img-wrap">
                              <img src="../assets/images/icon/country_usa.png" alt="usa" />
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open">
                              <!-- <button type="button" class="category__sub-button open star" "> -->
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open" onClick="">
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
                          <button type="button" class="category__accordion-button">
                            <figure class="img-wrap">
                              <img src="../assets/images/icon/country_uk.png" alt="uk" />
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open">
                              <!-- <button type="button" class="category__sub-button open star" "> -->
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open" onClick="">
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
                          <button type="button" class="category__accordion-button">
                            <figure class="img-wrap">
                              <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open">
                              <!-- <button type="button" class="category__sub-button open star" "> -->
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open" onClick="">
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
                          <button type="button" class="category__accordion-button">
                            <figure class="img-wrap">
                              <img src="../assets/images/icon/country_jp.png" alt="jp" />
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open">
                              <!-- <button type="button" class="category__sub-button open star" "> -->
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
                            <button type="button" class="category__back-button"></button>
                            <button type="button" class="category__sub-button open" onClick="">
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
                  <ul class="category__items item-list">
                    <li class="item-box simple">
                      <figure class="item__img img-wrap">
                        <img src="../assets/images/dummy/item_01.jpg" alt="item" />
                      </figure>
                      <div class="item-box__inner">
                        <div class="item__market line">
                          <figure class="item__country">
                            <img src="../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
                      </div>
                    </li>
                    <li class="item-box simple">
                      <figure class="item__img img-wrap">
                        <img src="../assets/images/dummy/item_01.jpg" alt="item" />
                      </figure>
                      <div class="item-box__inner">
                        <div class="item__market line">
                          <figure class="item__country">
                            <img src="../assets/images/icon/country_jp.png" alt="jp" />
                          </figure>
                          <p>라쿠텐 - Ten past Ten</p>
                        </div>
                        <div class="item__name">あすつく ビール 送料無料 アサヒ スーパル 送料無料 アサヒ スーパ</div>
                      </div>
                    </li>
                  </ul>
                </li>
                <!-- 맞춤쇼핑 -->
                <li data-ids="1"></li>
                <!-- 이용가이드 -->
                <li data-ids="2"></li>
              </ul>
            </div>
          </div>
        </nav>
`;

// 공통 푸터
let $FOOTER_CONT = `
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

const $HEADER = document.getElementById("header");
const $FOOTER = document.getElementById("footer");
if ($HEADER) {
  $HEADER.innerHTML = $HEADER_CONT;
}
if ($FOOTER) {
  $FOOTER.innerHTML = $FOOTER_CONT;
}
