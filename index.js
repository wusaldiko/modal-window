let modal = document.querySelector(".modal");
let modalForm = modal.firstElementChild;
let sendBtn = document.querySelector("#sendBtn");

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
let arr = [];

function selectedCheckbox(checkbox) {
  let isSelected = !!Number(checkbox.dataset.selected);
  
  if (!isSelected) {
    arr.push(isSelected);
    arr.length && (sendBtn.disabled = false);
    checkbox.dataset.selected = 1;
  } else {
    arr.pop();
    !arr.length && (sendBtn.disabled = true);
    checkbox.dataset.selected = 0;
  }
}

    