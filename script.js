let score = 0;
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("gameArea");

function moveBox() {
	const maxX = gameArea.clientWidth - box.clientWidth;
	const maxY = gameArea.clientHeight - box.clientHeight;
	const randomX = Math.random() * maxX;
	const randomY = Math.random() * maxY;

	box.style.top = randomX + "px";
	box.style.left = randomY + "px";
}

box.addEventListener("click", () => {
	// score++;
	// score = score + 5; //post increment
	score += 5;
	scoreDisplay.textContent = score;
	moveBox();
});
moveBox();
setInterval(moveBox, 1000);

// 1 sec = 1000 ms
