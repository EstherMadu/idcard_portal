const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  nextBtnSecond = form.querySelector(".nextBtnSecond"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input"),
  allInputSecond = form.querySelectorAll(".second input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
      //alert("input is not empty");
    }
  });
});

nextBtnSecond.addEventListener("click", () => {
  allInputSecond.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
      //alert("input is not empty");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));
