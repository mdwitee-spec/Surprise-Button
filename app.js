const surprises = [
  { type: "text", value: "You're doing better than you think. 🌟" },
  { type: "text", value: "Why did the scarecrow win an award? He was outstanding in his field. 🌾" },
  { type: "text", value: "Fun fact: Octopuses have three hearts. You're basically one heart away from being an octopus. 🐙" },
  { type: "text", value: "Challenge: do 10 jumping jacks right now. I'll wait. 🏃" },
  { type: "text", value: "Your vibe today: 11/10. Unauthorized levels of awesome. ✨" },
  { type: "text", value: "What do you call a fake noodle? An impasta. 🍝" },
  { type: "text", value: "Reminder: you've survived 100% of your bad days so far. 💪" },
  { type: "text", value: "Mini quest: send someone a nice message in the next 5 minutes. 📬" },
  { type: "text", value: "Bananas are berries. Strawberries are not. The universe is weird. 🍌" },
  { type: "text", value: "Plot twist: you're the main character today. Act accordingly. 🎬" },
  { type: "color", value: "Mood shift activated! 🎨" },
  { type: "confetti", value: "Party mode! 🎉" },
];

const btn = document.getElementById("surpriseBtn");
const result = document.getElementById("result");
const hint = document.getElementById("hint");

const moodColors = [
  ["#1a1033", "#7c5cff"],
  ["#0d2b2b", "#2dd4bf"],
  ["#2b1020", "#ff6b9d"],
  ["#1f1a0a", "#fbbf24"],
  ["#0a1f2b", "#38bdf8"],
  ["#1a0f2e", "#c084fc"],
];

let lastIndex = -1;

function pickSurprise() {
  let index;
  do {
    index = Math.floor(Math.random() * surprises.length);
  } while (index === lastIndex && surprises.length > 1);
  lastIndex = index;
  return surprises[index];
}

function showConfetti() {
  const colors = ["#7c5cff", "#ff6b9d", "#fbbf24", "#2dd4bf", "#38bdf8", "#fff"];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${1.2 + Math.random() * 1.5}s`;
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

function shiftMood() {
  const [bg, accent] = moodColors[Math.floor(Math.random() * moodColors.length)];
  document.body.style.background = `radial-gradient(circle at top, ${accent}33 0%, ${bg} 55%)`;
  document.documentElement.style.setProperty("--btn", accent);
  document.documentElement.style.setProperty("--glow", `${accent}73`);
}

function reveal(message) {
  result.hidden = false;
  result.classList.remove("show");
  result.textContent = message;
  requestAnimationFrame(() => result.classList.add("show"));
}

btn.addEventListener("click", () => {
  btn.classList.remove("pop");
  void btn.offsetWidth;
  btn.classList.add("pop");

  hint.textContent = "Again? You know you want to.";

  const surprise = pickSurprise();

  if (surprise.type === "confetti") {
    showConfetti();
  } else if (surprise.type === "color") {
    shiftMood();
  }

  reveal(surprise.value);
});
