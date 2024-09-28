// category Sort
const ulEl = document.querySelector(".custom-shopping__list");
if (ulEl) {
  new Sortable(ulEl, {
    animation: 200, // 이동 속도를 약간 더 느리게 설정
    ghostClass: "active",
    forceFallback: true, // 미지원 브라우저나 상황에서도 강제로 드래그 동작을 적용
    handle: ".custom-shopping__drag-button", // 클래스를 가진 요소에서만 드래그 가능
    preventOnFilter: false, // 필터된 요소에서 기본 동작을 막지 않음
    // swapThreshold: 0.5, // 요소가 중간에 도달했을 때 스와핑
    // invertSwap: true, // 스와핑을 반전하여 좀 더 직관적인 느낌 제공
  });
}
