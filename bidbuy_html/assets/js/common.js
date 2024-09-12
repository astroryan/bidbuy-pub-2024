// 알림
function openModal(button) {
  const modalName = button.dataset.modal;
  const selectedModal = document.querySelector(`.modal-${modalName}`);
  selectedModal.style.display = "block";
  document.removeEventListener("keydown", () => {
    if (e.key === "Escape") {
      selectedModal.style.display = "none";
    }
  });
}

// 모달 닫기
function closeModal(el) {
  const targetEl = el.closest(".modal") || el.closest(".side-modal");
  const handleCloseModal = () => {
    targetEl.style.display = "none";
  };
  handleCloseModal();

  // 이외 영역 클릭시 닫기
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (!(target.closest(".modal") || target.closest(".side-modal") || target.classList.contains("modal_button"))) {
      handleCloseModal();
    }
  });
}

// 탭 버튼 클릭 이벤트
function onClickTab() {
  const tabs = document.querySelectorAll(".tabs > button");
  tabs.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target;
      let selectedIdx = Number(target.dataset.idx);
      const tabsContainer = button.closest(".tabs-container");
      const tab = tabsContainer.querySelectorAll(".tabs > button");
      const contents = tabsContainer.querySelectorAll(".tabs-content > li");

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

// 카테고리
function categoryToggle() {
  const categoryAccordionButtons = document.querySelectorAll(".category__accordion-button");
  const categoryAccordionSubButtons = document.querySelectorAll(".category__sub-button");
  const categoryList = document.querySelectorAll(" .category__sub-list button");
  const backButtons = document.querySelectorAll(".category__back-button");

  const toggleOpenClass = (elements) => {
    elements.forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.toggle("open");
      });
    });
  };

  categoryList.forEach((el) => {
    el.addEventListener("click", () => {
      const currentDepth = el.closest(".category-depth");
      const nextDepth = currentDepth.nextElementSibling;

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

  toggleOpenClass(categoryAccordionButtons);
  toggleOpenClass(categoryAccordionSubButtons);
}
categoryToggle();
// MAIN
const mainVisualSlide = new Swiper(".main-slider", {
  speed: 600,
  a11y: {
    prevSlideMessage: "이전 슬라이드",
    nextSlideMessage: "다음 슬라이드",
    slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
  },
  loop: false, // 슬라이드 반복 여부
  watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
  // autoplay: {
  //   // 자동 슬라이드 설정 , 비 활성화 시 false
  //   delay: 3000, // 시간 설정
  //   disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  // },
  pagination: {
    el: ".main-slider__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".main-slider__button--next",
    prevEl: ".main-slider__button--prev",
  },
});

function SlideAutoplayControl(el) {
  if (el.classList.contains("pause")) {
    el.classList.remove("pause");
    mainVisualSlide.autoplay.start();
    console.log("?");
    return false;
  } else {
    mainVisualSlide.autoplay.stop();
    el.classList.add("pause");
    console.log("!");
    return false;
  }
}
