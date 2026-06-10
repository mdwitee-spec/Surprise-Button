// Menyimpan kumpulan data surprise dalam bentuk array of object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
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
// Mengambil elemen HTML
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
const btn = document.getElementById("surpriseBtn");
const result = document.getElementById("result");
const hint = document.getElementById("hint");
// memetakan berbagai emosi ke warna
// https://www.google.com/search?q=const+moodColors+%3D+&sxsrf=ANbL-n5buQ4TwSPV3QYivu46hQ6D_ZKM1A%3A1781103185770
const moodColors = [
  ["#1a1033", "#7c5cff"],
  ["#0d2b2b", "#2dd4bf"],
  ["#2b1020", "#ff6b9d"],  
  ["#1f1a0a", "#fbbf24"],
  ["#0a1f2b", "#38bdf8"],
  ["#1a0f2e", "#c084fc"],
];

let lastIndex = -1;
// floating-point pseudo-acak yang lebih besar dari nilai tertentu.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function pickSurprise() {
  let index;
  do {
    index = Math.floor(Math.random() * surprises.length);
  } while (index === lastIndex && surprises.length > 1);
  lastIndex = index;
  return surprises[index];
}
// mendefinisikan array warna dan memanggil metode confetti
// https://www.google.com/search?q=function+showConfetti%28%29+%7B+const+colors&ie=UTF-8
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
// menambahkan kode yang menerapkan warna-warna yang dipilih secara acak ini ke elemen-elemen halaman web
// 
function shiftMood() {
  const [bg, accent] = moodColors[Math.floor(Math.random() * moodColors.length)];
  document.body.style.background = `radial-gradient(circle at top, ${accent}33 0%, ${bg} 55%)`;
  document.documentElement.style.setProperty("--btn", accent);
  document.documentElement.style.setProperty("--glow", `${accent}73`);
}
// menangani tampilan elemen tersembunyi atau pesan rahasia pada halaman web
// https://www.google.com/search?q=function+reveal%28message%29+%7B&ie=UTF-8
function reveal(message) {
  result.hidden = false;
  result.classList.remove("show");
  result.textContent = message;
  requestAnimationFrame(() => result.classList.add("show"));
}
// berfungsi sebagai fungsi panggilan balik.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
btn.addEventListener("click", () => {
  btn.classList.remove("pop");   // Removes the "pop" class  
  // https://www.google.com/search?q=btn.classList.remove%28%22pop%22%29%3B&ie=UTF-8
  void btn.offsetWidth;  // melakukan reflow (penghitungan ulang tata letak). 
  // https://www.google.com/search?q=void+btn.offsetWidth%3B&sxsrf=ANbL-n7HPu_vVTHKA0HHIeb_zVj0W3qaVw%3A1781104151232
  btn.classList.add("pop");

  hint.textContent = "Again? You know you want to.";

  const surprise = pickSurprise();

  if (surprise.type === "confetti") {
    showConfetti();
  } else if (surprise.type === "color") {
    shiftMood();
  }
// memberi tahu browser untuk mengambil kode dari `app.js` dan mengeksekusinya.
  // https://share.google/z2wnq5J1d34YPOfA3
  reveal(surprise.value);
});
