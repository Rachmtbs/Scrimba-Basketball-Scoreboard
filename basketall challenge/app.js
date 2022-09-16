let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let HomeScoreBtnThree= document.getElementById("add-three-btn-3")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestcoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree= document.getElementById("guest-three-btn-3")
let questStoreEl =document.getElementById("guest-score")

let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0

function HomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function HomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function HomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function guestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function guestScoreTwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function guestScoreThree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

