// let homeScoreBtnOne = document.getElementById("home-score-btn-1")
// let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
// let homeScoreBtnThree = document.getElementById("home-score-btn-3")

// let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
// let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
// let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

let homeCountEl = document.getElementById("home-count-el")
let guestCountEl = document.getElementById("guest-count-el")

let newGameBtn = document.getElementById("new-game-btn")

let homeScore = 0
let guestScore = 0

function homeScoreOne() {
    homeScore += 1
    homeCountEl.textContent = homeScore
}

function homeScoreTwo() {
    homeScore += 2
    homeCountEl.textContent = homeScore
}

function homeScoreThree() {
    homeScore += 3
    homeCountEl.textContent = homeScore
}

function guestScoreOne() {
    guestScore += 1
    guestCountEl.textContent = guestScore
}

function guestScoreTwo() {
    guestScore += 2
    guestCountEl.textContent = guestScore
}

function guestScoreThree() {
    guestScore += 3
    guestCountEl.textContent = guestScore
}

function resetScore() {
    homeCountEl.textContent = 0
    homeScore = 0
    guestCountEl.textContent = 0
    guestScore = 0
}