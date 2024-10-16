document.addEventListener("DOMContentLoaded", () => {
  console.log("Completed stage: " + localStorage.getItem("completedStage"));
  const completedStage = localStorage.getItem("completedStage");
  if (completedStage !== null) {
    if (completedStage === "1") {
      window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
    }
    if (completedStage === "2") {
      window.location.href = "http://127.0.0.1:5501/src/signup/offer.html";
    }
  }
});
