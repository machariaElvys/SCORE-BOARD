


let scoreA = 0;
let scoreB = 0;


function incrementPoint(team) {
    if (team === 'teamA') {
        scoreA++;
        document.getElementById('scoreA').textContent = scoreA;
    } else if (team === 'teamB') {
        scoreB++;
        document.getElementById('scoreB').textContent = scoreB;
    }
}


function decrementPoint(team) {
    if (team === 'teamA' && scoreA > 0) {
        scoreA--;
        document.getElementById('scoreA').textContent = scoreA;
    } else if (team === 'teamB' && scoreB > 0) {
        scoreB--;
        document.getElementById('scoreB').textContent = scoreB;
    }
}

function resetScores() {
    scoreA = 0;
    scoreB = 0;
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}

