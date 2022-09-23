const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  secondBackBtn = form.querySelector(".backBtn3"),
  allInput = form.querySelectorAll(".first input"),
  allInputSecond = form.querySelectorAll(".second input"),
  totalInput = form.querySelectorAll(".input"),
  secondNextBtn = form.querySelector(".nextBtn2");

const formId = document.getElementById("form-1");
const nextForm = document.getElementById("form-2");
const thirdForm = document.getElementById("form-3");
const applyBtn = document.getElementById("apply");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    console.log(input.value);
    console.log(input.value.length);
    if (input.value.length == 0) {
      input.style.border = "1px solid red";
      formId.classList.add("active");
      nextForm.classList.remove("active");
    } else {
      formId.classList.remove("active");
      nextForm.classList.add("active");
      input.style.border = "1px solid #aaa";
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

applyBtn.addEventListener("click", () => {
  console.log(totalInput);
  totalInput.forEach((input) => {
    console.log(input.value);
  });
});
