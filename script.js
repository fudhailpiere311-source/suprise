const birthdayMonth = 10; // November (0 = Jan)
const birthdayDay = 28;

function updateCountdown() {
  const now = new Date();
  let birthday = new Date(now.getFullYear(), birthdayMonth, birthdayDay);

  if (now > birthday) {
    birthday = new Date(now.getFullYear() + 1, birthdayMonth, birthdayDay);
  }

  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerText =
    days === 0 ? "🎉 Today is your birthday, Amisya! 🎂" :
    `🎉 ${days} days to your birthday, sayang!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function showSurprise() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}
