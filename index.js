const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

function updateScore(team, points) {
	if (team === "home") {
		homeScore.textContent = parseInt(homeScore.textContent) + points;
	} else if (team === "guest") {
		guestScore.textContent = parseInt(guestScore.textContent) + points;
	}

	highlightLeader();
}

function resetScore() {
	homeScore.textContent = 0;
	guestScore.textContent = 0;

	homeScore.parentElement.classList.remove("leading");
	guestScore.parentElement.classList.remove("leading");
}

function highlightLeader() {
	const homeBoard = homeScore.closest(".score-board");
	const guestBoard = guestScore.closest(".score-board");

	const homePoints = parseInt(homeScore.textContent);
	const guestPoints = parseInt(guestScore.textContent);

	homeBoard.classList.remove("leading");
	guestBoard.classList.remove("leading");

	if (homePoints > guestPoints) {
		homeBoard.classList.add("leading");
	} else if (guestPoints > homePoints) {
		guestBoard.classList.add("leading");
	}
}
