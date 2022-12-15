const cancelBtn = document.querySelector(".cancel-btn");
const watchBtn = document.querySelector(".watch-btn");
const pickBtn = document.querySelector(".pick-btn");
const cancelSection = document.querySelector(".cancel");
const watchSection = document.querySelector(".watch");
const pickSection = document.querySelector(".pick");

document.addEventListener("DOMContentLoaded", function () {
  watchSection.classList.add("gone");
  pickSection.classList.add("gone");
});

watchBtn.addEventListener("click", function () {
  watchBtn.classList.add("current");
  if (!cancelSection.classList.contains("gone")) {
    cancelSection.classList.add("gone");
  }
  if (!pickSection.classList.contains("gone")) {
    pickSection.classList.add("gone");
  }
  if (watchSection.classList.contains("gone")) {
    watchSection.classList.remove("gone");
  }
  pickBtn.classList.forEach(function (x) {
    if (x == "current") {
      pickBtn.classList.remove(x);
    }
  });
  cancelBtn.classList.forEach(function (x) {
    if (x == "current") {
      cancelBtn.classList.remove(x);
    }
  });
});
cancelBtn.addEventListener("click", function () {
  cancelBtn.classList.add("current");
  if (!watchSection.classList.contains("gone")) {
    watchSection.classList.add("gone");
  }
  if (!pickSection.classList.contains("gone")) {
    pickSection.classList.add("gone");
  }
  if (cancelSection.classList.contains("gone")) {
    cancelSection.classList.remove("gone");
  }
  pickBtn.classList.forEach(function (x) {
    if (x == "current") {
      pickBtn.classList.remove(x);
    }
  });
  watchBtn.classList.forEach(function (x) {
    if (x == "current") {
      watchBtn.classList.remove(x);
    }
  });
});
pickBtn.addEventListener("click", function () {
  pickBtn.classList.add("current");
  if (!cancelSection.classList.contains("gone")) {
    cancelSection.classList.add("gone");
  }
  if (!watchSection.classList.contains("gone")) {
    watchSection.classList.add("gone");
  }
  if (pickSection.classList.contains("gone")) {
    pickSection.classList.remove("gone");
  }
  cancelBtn.classList.forEach(function (x) {
    if (x == "current") {
      cancelBtn.classList.remove(x);
    }
  });
  watchBtn.classList.forEach(function (x) {
    if (x == "current") {
      watchBtn.classList.remove(x);
    }
  });
});
