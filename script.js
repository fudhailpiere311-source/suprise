const birthday = new Date("2025-11-28");

setInterval(() => {
  const now = new Date();
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    days > 0 ? `🎉 ${days} days to your birthday!` : "🎂 Today is your birthday!";
}, 1000);

function showSurprise() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
