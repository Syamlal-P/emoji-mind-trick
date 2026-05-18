const emojis = [
    "😀", "😎", "🤖", "🐧", "🌟", "🔥", "🍀", "🍎", "🐱",
    "🚀", "💎", "😍", "😆", "😴", "👻", "🐶", "🐵", "🌈"
];

// Pick ONE magic emoji for multiples of 9
const magicEmoji = emojis[Math.floor(Math.random() * emojis.length)];

const grid = document.getElementById("grid");
const result = document.getElementById("result");
const revealBtn = document.getElementById("revealBtn");

// Build emoji chart
for (let num = 1; num < 100; num++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    let emoji;
    if (num % 9 === 0) {
        emoji = magicEmoji;
    } else {
        emoji = emojis[Math.floor(Math.random() * emojis.length)];
    }

    cell.innerHTML = `<span>${num}</span><span>${emoji}</span>`;
    grid.appendChild(cell);
}

// Reveal magic emoji
revealBtn.addEventListener("click", () => {
    result.textContent = magicEmoji;
    result.classList.remove("hidden");
});
