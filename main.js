document.querySelector(".form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.querySelector("#output").innerHTML = n00bify(document.querySelector("#input").value);
});
