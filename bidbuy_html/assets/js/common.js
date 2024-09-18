// 모달 열기
function openModal(button) {
  const modalName = button.dataset.modal;
  const selectedModal = document.querySelector(`.modal-${modalName}`);
  selectedModal.style.display = "block";
  if (selectedModal.classList.contains("bid-modal")) {
    initializeModalDepths(selectedModal);
  }
  blockBodyScroll();
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

// 탭 버튼 클릭 이벤트
function onClickTab() {
  const tabs = document.querySelectorAll(".tabs > button");
  tabs.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.currentTarget;
      let selectedIdx = Number(target.dataset.idx);
      const tabsContainer = button.closest(".tabs-container");
      // '>' 선택자 기능 구현
      const tabsElement = tabsContainer.querySelector(".tabs");
      const tab = tabsElement ? Array.from(tabsElement.children).filter((child) => child.tagName === "BUTTON") : [];

      const tabsContentElement = tabsContainer.querySelector(".tabs-content");
      const contents = tabsContentElement
        ? Array.from(tabsContentElement.children).filter((child) => child.tagName === "LI")
        : [];

      // const tab = tabsContainer.querySelectorAll("> .tabs > button");
      // const contents = tabsContainer.querySelectorAll("> .tabs-content > li");

      // 모든 내용 요소에 대해 active 클래스 제거 또는 추가
      tab.forEach((tabEl, tabIndex) => {
        tabEl.classList.toggle("active", tabIndex === selectedIdx);
      });

      // 모든 콘텐츠 요소를 숨기고
      contents.forEach((li) => {
        li.style.display = "none";
      });
      // 클릭된 탭에 해당하는 콘텐츠만 표시
      contents[selectedIdx].style.display = "block";
    });
  });
}
// function onClickTab() {
//   const tabs = document.querySelectorAll(".tabs > button");
//   tabs.forEach((button) => {
//     const currentIdx = button.dataset("idx");
//     const contents = button.closest(".tabs-container").querySelectorAll(".tabs-content > li");
//     console.log(currentIdx);

//     contents.forEach((li) => {
//       li.classList.toggle("active", li.dataset.idx === currentIdx);
//     });
//   });
// }
onClickTab();

function onClickLikeButton(button) {
  button.classList.toggle("active");
}

// HEADER
function onClickGnbMenu() {
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
}
onClickGnbMenu();

function headerScroll() {
  const header = document.getElementById("header"); // header 섹션
  const headerHeight = header.getBoundingClientRect().height; // navigation bar 높이
  let lastScrollTop = 8;

  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
      header.classList.add("header-sticky");

      // header.style.transform = "translateY(-68px)";
    } else {
      header.classList.remove("header-sticky");
      // header.style.transform = "translateY(0px)";
    }

    if (scrollTop > 0) {
      // header.style.backgroundColor = "#fff";
    } else {
      // header.style.backgroundColor = "transparent";
      scrollTop = 8;
    }

    lastScrollTop = scrollTop;
  });
}

headerScroll();

function accordionToggleEvent() {
  const accordionButton = document.querySelectorAll(".toggle-button");

  accordionButton.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("active");
    });
  });
}
accordionToggleEvent();

// 카테고리
function categoryToggle() {
  // const categoryAccordionButtons = document.querySelectorAll(".category__accordion-button");
  // const categoryAccordionSubButtons = document.querySelectorAll(".category__sub-button");
  const categoryList = document.querySelectorAll(" .category__sub-list button");
  const backButtons = document.querySelectorAll(".category__back-button");

  // const toggleOpenClass = (elements) => {
  //   elements.forEach((el) => {
  //     el.addEventListener("click", () => {
  //       el.classList.toggle("open");
  //     });
  //   });
  // };

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

  // toggleOpenClass(categoryAccordionButtons);
  // toggleOpenClass(categoryAccordionSubButtons);
}
categoryToggle();

// MAIN

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
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
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
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
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
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
      slidesPerView: 1,
      grid: {
        rows: 3,
      },
      spaceBetween: 10,
    });
  }
}

function recentItemSlide() {
  if (document.querySelector(".recent-item-swiper")) {
    const recentItemSwiper = new Swiper(".recent-item-swiper", {
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 8,
    });
  }
}
window.addEventListener("DOMContentLoaded", () => {
  mainSlide();
  inProgressItemSlide();
  likeItemSlide();
  recentItemSlide();
});

// DETAIL
function ItemDetailSlide() {
  if (document.querySelector(".bigImgSlide")) {
    const thumbsSlide = new Swiper(".thumbsSlide", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".thumbs-button-next",
        prevEl: ".thumbs-button-prev",
      },
    });
    const swiper2 = new Swiper(".bigImgSlide", {
      thumbs: {
        swiper: thumbsSlide,
      },
    });
  }
}

ItemDetailSlide();

// list Page
// function showKeywordAlert(button) {
//   e.preventDefault();
//   // 가장 가까운 부모 요소에서 .tag-list를 찾고, 그 안의 input 값을 가져옵니다.
//   const keyword = button.closest(".top-content").querySelector(".top-content__main-text");
//   const keywordValue = keyword.innerText;

//   alert(keywordValue + " 관심키워드 목록에 등록되었습니다.");
// }

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

// 상세페이지 문의 답변 보기 / 닫기 텍스트도 변경
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
