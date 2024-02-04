"use strict";

const buttonContainer = document.querySelector(".btn-container");
const buttons = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

const tabbedComponent = function (e) {
  const btn = e.target.closest(".btn");

  if (!btn) return;

  buttons.forEach((button) => button.classList.remove("active-btn"));
  btn.classList.add("active-btn");

  contents.forEach((content) => content.classList.remove("grid"));
  document.querySelector(`.content-${btn.dataset.tab}`).classList.add("grid");
};

buttonContainer.addEventListener("click", tabbedComponent);
