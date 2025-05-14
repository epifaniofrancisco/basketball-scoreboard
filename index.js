const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

function updateScore(team, points) {
    if (team === "home") {
        homeScore.textContent = parseInt(homeScore.textContent) + points;
    } else if (team === "guest") {
        guestScore.textContent = parseInt(guestScore.textContent) + points;
    }

    highlightTeams();
}

function resetScore() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;

    const homeBoard = homeScore.closest(".score-board");
    const guestBoard = guestScore.closest(".score-board");
    
    homeBoard.classList.remove("leading", "losing");
    guestBoard.classList.remove("leading", "losing");
}

function highlightTeams() {
    const homeBoard = homeScore.closest(".score-board");
    const guestBoard = guestScore.closest(".score-board");

    const homePoints = parseInt(homeScore.textContent);
    const guestPoints = parseInt(guestScore.textContent);

    homeBoard.classList.remove("leading", "losing");
    guestBoard.classList.remove("leading", "losing");

    if (homePoints === guestPoints) return;

    if (homePoints > guestPoints) {
        homeBoard.classList.add("leading");
        guestBoard.classList.add("losing");
    } else {
        guestBoard.classList.add("leading");
        homeBoard.classList.add("losing");
    }
}
