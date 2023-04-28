const wrapperCard = document.getElementById("wrapper-card");
const wrapperThanks = document.getElementById("wrapper-thanks");
const submit = document.getElementById("submit");
const btn = document.querySelectorAll(".btn");
console.log("btn");
const actualRating = document.getElementById("rating");

submit.addEventListener("click", () => {
  wrapperThanks.classList.remove("visibility");
  wrapperCard.style.display = "none";
});

btn.forEach((ratings) => {
  ratings.addEventListener("click", () => {
    actualRating.innerHTML = ratings.innerHTML;
  });
});
