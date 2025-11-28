const birthdayMonth = 10; // November
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
  startConfetti();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function startConfetti() {
  pieces = [];
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10
    });
  }
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff4d6d";
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(draw);
}
