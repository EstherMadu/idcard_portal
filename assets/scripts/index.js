const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  nextBtnSecond = form.querySelector(".nextBtnSecond"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input"),
  allInputSecond = form.querySelectorAll(".second input");

// const element = document.getElementById("form-1");
// const formId = element.getAttribute("data-id");
// console.log(formId);

nextBtn.addEventListener("click", function () {
  const formId = document.getElementById("form-1");
  const nextForm = document.getElementById("form-2");
  allInput.forEach((input) => {
    if (input.value != "") {
      formId.classList.remove("active");
      nextForm.classList.add("active");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("active"));
