let modal = document.querySelector(".modal");
let modalForm = modal.firstElementChild;
const $checkboxs = document.querySelectorAll(".modal__item-check")
let btn = document.querySelector("#sendBtn");

modalForm.addEventListener("click", (e) => {
  e.stopPropagation();
});

function showModal() {
  modal.classList.add("active");
}

function hideModal() {
  modal.classList.remove("active");
}

// ============================================
window.name = "";

$checkboxs.forEach((el) =>
  el.addEventListener("click", (_) => {
    btn.disabled = !(el.checked ? window.name += "1": window.name = window.name.slice(1));
  })
);
    
