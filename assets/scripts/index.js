const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  // nextBtnSecond = form.querySelector(".nextBtnSecond"),
  backBtn = form.querySelector(".backBtn"),
  secondBackBtn = form.querySelector(".backBtn3");
(allInput = form.querySelectorAll(".first input")),
  (allInputSecond = form.querySelectorAll(".second input")),
  (secondNextBtn = form.querySelector(".nextBtn2"));
const formId = document.getElementById("form-1");
const nextForm = document.getElementById("form-2");
const thirdForm = document.getElementById("form-3");

nextBtn.addEventListener("click", function () {
  allInput.forEach((input) => {
    if (input.value != "") {
      formId.classList.remove("active");
      nextForm.classList.add("active");
    }
  });
});

backBtn.addEventListener("click", () => {
  nextForm.classList.remove("active");
  formId.classList.add("active");
});

secondNextBtn.addEventListener("click", () => {
  nextForm.classList.remove("active");
  thirdForm.classList.add("active");
});

secondBackBtn.addEventListener("click", () => {
  thirdForm.classList.remove("active");
  nextForm.classList.add("active");
});
