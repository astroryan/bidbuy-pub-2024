// 알림
function openModal(button) {
  const modalName = button.dataset.modal;
  const selectedModal = document.querySelector(`.modal-${modalName}`);
  console.log(selectedModal);
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
  tabs.forEach((button, index) => {
    button.addEventListener("click", () => {
      const tabsContainer = button.closest(".tabs-container");
      const tab = tabsContainer.querySelectorAll(".tabs > button");
      const contents = tabsContainer.querySelectorAll(".tabs-content > li");
      console.log(index); // 버튼의 인덱스

      // 모든 내용 요소에 대해 active 클래스 제거 또는 추가
      tab.forEach((tabEl, tabIndex) => {
        tabEl.classList.toggle("active", tabIndex === index);
      });

      // 모든 콘텐츠 요소를 숨기고
      contents.forEach((li) => {
        li.style.display = "none";
      });

      // 클릭된 탭에 해당하는 콘텐츠만 표시
      contents[index].style.display = "block";
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
function menuHover() {
  const gnbMenu = document.querySelectorAll(".header__gnb-menu > li");

  gnbMenu.forEach((menuList, index) => {
    menuList.addEventListener("mouse");
  });
}

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
