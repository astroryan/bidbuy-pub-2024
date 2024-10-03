"use strict";

const PROJECT_NAME = "비드바이";

// 공통 헤더 작성
function write_header() {
  const $TARGET = document.querySelector(".guide-head");
  const URL = window.location.href.split("/publishing_guide/")[1].split(".html")[0];
  let $HEADER = ``;
  $HEADER = $HEADER += `<h1><b>${PROJECT_NAME}</b> 퍼블리싱 가이드</h1>`;
  $HEADER = $HEADER += `<div class="guide-tabs">`;
  $HEADER = $HEADER += `<ul>`;
  if (URL.includes("guide_01") === true) {
    $HEADER = $HEADER += `<li><a href="./guide_01.html" class="guide-tab on">기본정책</a></li>`;
  } else {
    $HEADER = $HEADER += `<li><a href="./guide_01.html" class="guide-tab">기본정책</a></li>`;
  }
  if (URL.includes("guide_02") === true) {
    $HEADER = $HEADER += `<li><a href="./guide_02.html" class="guide-tab on">개발 산출물</a></li>`;
  } else {
    $HEADER = $HEADER += `<li><a href="./guide_02.html" class="guide-tab">개발 산출물</a></li>`;
  }
  if (URL.includes("guide_03") === true) {
    $HEADER = $HEADER += `<li><a href="./guide_03.html" class="guide-tab on">공통요소</a></li>`;
  } else {
    $HEADER = $HEADER += `<li><a href="./guide_03.html" class="guide-tab">공통요소</a></li>`;
  }
  if (URL.includes("guide_04") === true) {
    $HEADER = $HEADER += `<li><a href="./guide_04.html" class="guide-tab on">설계 규칙</a></li>`;
  } else {
    $HEADER = $HEADER += `<li><a href="./guide_04.html" class="guide-tab">설계 규칙</a></li>`;
  }
  if (URL.includes("guide_05") === true) {
    $HEADER = $HEADER += `<li><a href="./guide_05.html" class="guide-tab on">라이브러리</a></li>`;
  } else {
    $HEADER = $HEADER += `<li><a href="./guide_05.html" class="guide-tab">라이브러리</a></li>`;
  }
  $HEADER = $HEADER += `</ul>`;
  $HEADER = $HEADER += `</div>`;
  $TARGET.innerHTML = $HEADER;
}

// 공통 푸터 작성
function write_footer() {
  const $TARGET = document.querySelector(".guide-foot");
  const $FOOTER = `<p class="copyright">Published by ⓒ <b>iO Centre</b> 2023 All Rights Reserved.</p>`;
  $TARGET.innerHTML = $FOOTER;
}

// 실행
window.onload = () => {
  write_header();
  write_footer();
};

// 프린터 함수
function print_guide() {
  const objSetting = "width=" + screen.width + ", height=" + screen.height + ", all=no";
  const objWin = window.open("", "print", objSetting);
  objWin.document.write("<html><head><title></title>");
  objWin.document.write('<link rel="stylesheet" type="text/css" href="./inc/style.css" />');
  objWin.document.write('<link rel="stylesheet" type="text/css" href="./inc/guide.css" />');
  objWin.document.write('</head><body style="padding:30px;">');
  objWin.document.write('<h1 style="color:var(--col-bidbuy); font-size:46px;">' + PROJECT_NAME + "</h1><br /><br />");
  objWin.document.write(document.querySelector(".print-area").innerHTML);
  objWin.document.write("</body></html>");
  objWin.document.close();
  objWin.focus();
  setTimeout(function () {
    objWin.print();
    objWin.close();
  }, 100);
  return true;
}
