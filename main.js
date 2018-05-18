document.querySelector(".form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.querySelector("#output").textContent += n00bify(document.querySelector("#input").value);
});
