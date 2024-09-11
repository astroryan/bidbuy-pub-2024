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
