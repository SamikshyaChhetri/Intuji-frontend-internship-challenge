const displayContent = document.getElementById("innerContent");
document.getElementById("displayIcon").addEventListener("click", () => {
  if (displayContent.style.display == "none")
    displayContent.style.display = "flex";
  else {
    displayContent.style.display = "none";
  }
});
