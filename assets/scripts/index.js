const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  // nextBtnSecond = form.querySelector(".nextBtnSecond"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input"),
  allInputSecond = form.querySelectorAll(".second input"),
  secondNext = form.querySelector(".nextBtn2");
const formId = document.getElementById("form-1");
const nextForm = document.getElementById("form-2");
const thirdForm = document.getElementById("form-3");

nextBtn.addEventListener("click", function () {
  allInput.forEach((input) => {
    if (input.value == "") {
      formId.classList.remove("active");
      nextForm.classList.add("active");
    }
  });
});

backBtn.addEventListener("click", () => {
  nextForm.classList.remove("active");
  formId.classList.add("active");
});

secondNext.addEventListener("click", () => {
  allInputSecond.forEach((input) => {
    if (input.value == "") {
      nextForm.classList.remove("active");
      thirdForm.classList.add("active");
    }
  });
});
