"use strict";

// 공통 헤더
let $HEADER_CONT = `
<div class="inner-width">

</div>
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

// const $HEADER = document.getElementById("header");
const $FOOTER = document.getElementById("footer");
// if ($HEADER) {
//   $HEADER.innerHTML = $HEADER_CONT;
// }
if ($FOOTER) {
  $FOOTER.innerHTML = $FOOTER_CONT;
}
