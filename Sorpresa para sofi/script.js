boton.addEventListener("click", (e) => {
  const heart = document.createElement("span");
  heart.textContent = "💜";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "20px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "fly 1s ease forwards";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});
