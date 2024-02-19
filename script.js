document.querySelectorAll(".scrollButton").forEach(button => {
  button.addEventListener("click", function() {
      const amount = parseInt(this.getAttribute("data-amount"));
      window.scrollBy(0, amount);
  });
});
