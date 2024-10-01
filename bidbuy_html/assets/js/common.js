// HEADER
const onClickGnbMenu = () => {
  const twoDepthMenu = document.querySelectorAll(".dropdown-menu__depth_two button");
  const threeDepthMenuBox = document.querySelectorAll(".dropdown-menu__depth_three");
  const recommendItems = document.querySelectorAll(".dropdown-menu__items");

  twoDepthMenu.forEach((menuEl) => {
    menuEl.addEventListener("click", (e) => {
      const targetBox = menuEl.closest(".header__gnb-menu-list");
      const targetThreeDepthMenuBox = targetBox.querySelector(".dropdown-menu__depth_three");
      const targetRecommendItems = targetBox.querySelector(".dropdown-menu__items");

      function init() {
        twoDepthMenu.forEach((li) => {
          li.classList.remove("active");
        });
        threeDepthMenuBox.forEach((el) => {
          el.style.display = "none";
        });
        recommendItems.forEach((el) => {
          el.style.display = "none";
        });
      }
      e.preventDefault();

      init();

      menuEl.classList.add("active");
      targetThreeDepthMenuBox.style.display = "block";
      targetRecommendItems.style.display = "flex";
    });
  });
};

const stickyHeader = () => {
  const header = document.getElementById("header"); // header 섹션
  const headerHeight = header.getBoundingClientRect().height; // navigation bar 높이

  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  });
};
// 카테고리
const categoryToggle = () => {
  const categoryList = document.querySelectorAll(" .category__sub-list button");
  const backButtons = document.querySelectorAll(".category__back-button");

  categoryList.forEach((el) => {
    el.addEventListener("click", () => {
      const currentDepth = el.closest(".category-depth");
      const nextDepth = currentDepth.nextElementSibling;
      console.log(nextDepth, "?");

      currentDepth.style.display = "none";
      nextDepth.style.display = "block";
    });
  });

  backButtons.forEach((el) => {
    el.addEventListener("click", () => {
      const currentDepth = el.closest(".category-depth");
      const prevDepth = currentDepth.previousElementSibling;

      currentDepth.style.display = "none";
      prevDepth.style.display = "block";
    });
  });
};
// 기본 탭 버튼 클릭 이벤트
const onClickTab = () => {
  const tabs = document.querySelectorAll(".tabs > button");
  tabs.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.currentTarget;
      let selectedIdx = Number(target.dataset.idx);
      const tabsContainer = button.closest(".tabs-container");
      const tabsElement = tabsContainer.querySelector(".tabs");
      const tab = tabsElement ? Array.from(tabsElement.children).filter((child) => child.tagName === "BUTTON") : [];

      const tabsContentElement = tabsContainer.querySelector(".tabs-content");
      const contents = tabsContentElement
        ? Array.from(tabsContentElement.children).filter((child) => child.tagName === "LI")
        : [];

      // 탭 활성화
      tab.forEach((tabEl, tabIndex) => {
        tabEl.classList.toggle("active", tabIndex === selectedIdx);
      });

      // 클릭된 탭 컨텐츠 활성화
      contents.forEach((li, index) => {
        li.style.display = index === selectedIdx ? "block" : "none";
      });

      // 모든 콘텐츠 요소를 숨기고
      // contents.forEach((li) => {
      //   li.style.display = "none";
      // });

      // 클릭된 탭에 해당하는 콘텐츠만 표시
      // contents[selectedIdx].style.display = "block";
    });
  });
};
// 기본 토글 버튼
const toggleButton = () => {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("active");
    });
  });
};

// 모달 열기
function openModal(button, event) {
  event.preventDefault();
  const modalName = button.dataset.modal;
  const selectedModal = document.querySelector(`.modal-${modalName}`);
  selectedModal.style.display = "block";
  if (selectedModal.classList.contains("bid-modal")) {
    initializeModalDepths(selectedModal);
  }

  // 알림모달은 스크롤 블럭제거
  if (!selectedModal.classList.contains("side-modal")) {
    blockBodyScroll();
  }
  document.removeEventListener("keydown", () => {
    if (e.key === "Escape") {
      selectedModal.style.display = "none";
      unblockBodyScroll();
    }
  });
}

// 모달 닫기
function closeModal(el) {
  console.log(el);
  const targetEl = el.closest(".modal") || el.closest(".side-modal");
  const handleCloseModal = () => {
    targetEl.style.display = "none";
  };
  handleCloseModal();
  unblockBodyScroll();
  // 이외 영역 클릭시 닫기
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (!(target.closest(".modal") || target.closest(".side-modal") || target.classList.contains("modal_button"))) {
      handleCloseModal();
      unblockBodyScroll();
    }
  });
}

// 모달 depth 초기화 함수
function initializeModalDepths(modal) {
  const depths = modal.querySelectorAll(".bid-modal__depth-list > li");
  depths.forEach((depth, index) => {
    depth.style.display = index === 0 ? "block" : "none";
  });
}

function getBodyScrollbarWidth() {
  return window.innerWidth - document.documentElement.offsetWidth;
}

function blockBodyScroll(className = "overflow-hidden") {
  const isBlocked = document.body.classList.contains(className);
  console.log("blockBodyScroll");

  if (isBlocked) return;

  document.body.style.setProperty("--scrollbar-width", `${getBodyScrollbarWidth()}px`);
  document.body.classList.add(className);
}

function unblockBodyScroll(className = "overflow-hidden") {
  const isBlocked = document.body.classList.contains(className);
  console.log("unblockBodyScroll");

  if (!isBlocked) return;

  document.body.style.removeProperty("--scrollbar-width");
  document.body.classList.remove(className);
}

// 좋아요 버튼
function onClickLikeButton(button) {
  button.classList.toggle("active");
}

// list Page
function toggleKeyword(button, event) {
  event.preventDefault(); // 기본 동작 방지

  const checkbox = button.querySelector('input[type="checkbox"]');
  const wasChecked = checkbox.checked;

  checkbox.checked = !checkbox.checked; // 상태 변경

  // 체크된 상태로 변경될 때만 알림창
  if (!wasChecked && checkbox.checked) {
    const keyword = button.closest(".top-content")?.querySelector(".top-content__main-text");
    const keywordValue = keyword ? keyword.innerText : "키워드 없음";
    alert(keywordValue + " 관심키워드 목록에 등록되었습니다.");
  }
}

// 상세페이지 문의 답변 보기 / 닫기
function openAnswer(button) {
  const listEl = button.closest(".inquiry-list");
  const answer = listEl.querySelector(".inquiry-answer");

  if (answer) {
    if (answer.style.display === "none") {
      answer.style.display = "flex"; // 답변 열기
    }
  }
}
function closeAnswer(button) {
  const listEl = button.closest(".inquiry-list");
  const answer = listEl.querySelector(".inquiry-answer");

  if (answer) {
    if (answer.style.display === "flex") {
      answer.style.display = "none"; // 답변 닫기
    }
  }
}

// 상세페이지 문의 답변 보기 / 닫기 + 텍스트 변경
function openPublicAnswer(button) {
  const listEl = button.closest(".inquiry-list");
  const answer = listEl.querySelector(".inquiry-answer");

  if (answer) {
    if (answer.style.display === "flex") {
      answer.style.display = "none"; // 답변 닫기
      button.classList.remove("basic-button__blue-bg-line");
      button.classList.add("basic-button__gray-line");
      button.innerText = "답변 보기";
    } else {
      answer.style.display = "flex"; // 답변 보기
      button.classList.remove("basic-button__gray-line");
      button.classList.add("basic-button__blue-bg-line");
      button.innerText = "답변 닫기";
    }
  }
}

// 경매 상세페이지 모달 다음 버튼 이벤트
function onClickNextModal(button) {
  const modal = button.closest(".bid-modal");
  const currentDepth = button.closest("li");
  const nextDepth = currentDepth.nextElementSibling;

  if (nextDepth) {
    currentDepth.style.display = "none";
    nextDepth.style.display = "block";
  }
}

// 마이페이지 :: "주문 상세검색 모드"
function changModeButton(button) {
  const searchModeContent = document.querySelector(".shopping-status__summary-box");
  const deliveryModeContent = document.querySelector(".shopping-status__filters");

  if (button.classList.contains("show-search-mode")) {
    button.innerText = "상세검색 모드";
    button.classList.remove("show-search-mode");
    searchModeContent.style.display = "flex";
    deliveryModeContent.style.display = "none";
  } else {
    button.innerText = "주문배송절차 모드";
    button.classList.add("show-search-mode");
    searchModeContent.style.display = "none";
    deliveryModeContent.style.display = "flex";
  }
}

// 마이페이지 :: 쿠폰 탭
function couponTab(button) {
  const currentIdx = button.dataset.idx;

  const container = button.closest(".my-coupon__rank-benefit");
  const tabs = container.querySelectorAll(".rank-list > button");
  const tabContents = container.querySelectorAll(".rank-content__list");

  if (button.classList.contains("active")) return;

  tabs.forEach((tab) => tab.classList.remove("active"));
  button.classList.add("active");

  tabContents.forEach((content) => {
    content.style.display = content.dataset.idx === currentIdx ? "block" : "none";
  });
}

// ::::::::::: SWIPER :::::::::::
function mainSlide() {
  if (document.querySelector(".main-slider")) {
    const mainVisualSlide = new Swiper(".main-slider", {
      speed: 600,
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정,
      a11y: {
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
        slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
      },
      loop: false, // 슬라이드 반복 여부
      autoplay: {
        // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      },
      pagination: {
        el: ".main-slider__pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".main-slider__button--next",
        prevEl: ".main-slider__button--prev",
      },
    });

    const autoplayControlButton = document.querySelector(".main-slider__autoplay-controls");

    autoplayControlButton.addEventListener("click", () => {
      if (autoplayControlButton.classList.contains("pause")) {
        autoplayControlButton.classList.remove("pause");
        mainVisualSlide.autoplay.start();
      } else {
        mainVisualSlide.autoplay.stop();
        autoplayControlButton.classList.add("pause");
      }
    });
  }
}

function inProgressItemSlide() {
  if (document.querySelector(".in-progress-items-swiper")) {
    const inProgressItemSwiper = new Swiper(".in-progress-items-swiper", {
      slidesPerView: 2,
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정,
      a11y: {
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
        slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
      },
      centeredSlides: false,
      freeMode: true,
      spaceBetween: 13,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
    });
  }
}

function likeItemSlide() {
  if (document.querySelector(".like-item-swiper")) {
    const likeItemSwiper = new Swiper(".like-item-swiper", {
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정,
      a11y: {
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
        slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
      },
      slidesPerView: 1,
      grid: {
        rows: 3,
      },
      spaceBetween: 10,
    });
  }
}

function reviewSlide() {
  if (document.querySelector(".review-swiper")) {
    const reviewSwiper = new Swiper(".review-swiper", {
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정,
      a11y: {
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
        slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
      },
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: ".review-swiper-button-next",
        prevEl: ".review-swiper-button-prev",
      },
    });
  }
}

function recentItemSlide() {
  if (document.querySelector(".recent-item-swiper")) {
    const recentItemSwiper = new Swiper(".recent-item-swiper", {
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정,
      a11y: {
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
        slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 8,
    });
  }
}

// DETAIL
function ItemDetailSlide() {
  if (document.querySelector(".bigImgSlide")) {
    const thumbsSwiper = new Swiper(".thumbsSlide", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정,
      a11y: {
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
        slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
      },
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".thumbs-button-next",
        prevEl: ".thumbs-button-prev",
      },
    });
    const bigImgSwiper = new Swiper(".bigImgSlide", {
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // HEADER
  onClickGnbMenu();
  stickyHeader();
  categoryToggle();
  // 클릭이벤트
  onClickTab();
  toggleButton();

  // SWIPER
  mainSlide(); // 매인배너
  inProgressItemSlide();
  likeItemSlide();
  recentItemSlide();
  ItemDetailSlide();
  reviewSlide();
});
