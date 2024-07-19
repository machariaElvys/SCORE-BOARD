function loadScoresFromServer() {
    fetch('http://localhost:3000/scores')
        .then(response => response.json())
        .then(data => {
            scoreA = data.teamA;
            scoreB = data.teamB;
            updateScoreDisplays();
        })
        .catch(error => {
            console.error('Error loading scores:', error);
        });
}

function updateScoresOnServer(scores) {
    fetch('http://localhost:3000/scores/teamA', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: scores.teamA }),
    })
    .then(response => {
        console.log('Score A updated successfully:', response);
    })
    .catch(error => {
        console.error('Error updating score A:', error);
    });

    fetch('http://localhost:3000/scores/teamB', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: scores.teamB }),
    })
    .then(response => {
        console.log('Score B updated successfully:', response);
    })
    .catch(error => {
        console.error('Error updating score B:', error);
    });
}

function incrementPoint(team) {
    if (team === 'teamA') {
        scoreA++;
    } else if (team === 'teamB') {
        scoreB++;
    }
    updateScoresOnServer({ teamA: scoreA, teamB: scoreB });
    updateScoreDisplays();
}

function decrementPoint(team) {
    if (team === 'teamA' && scoreA > 0) {
        scoreA--;
    } else if (team === 'teamB' && scoreB > 0) {
        scoreB--;
    }
    updateScoresOnServer({ teamA: scoreA, teamB: scoreB });
    updateScoreDisplays();
}


function resetScores() {
    scoreA = 0;
    scoreB = 0;
    updateScoresOnServer({ teamA: scoreA, teamB: scoreB });
    updateScoreDisplays();
}


function updateScoreDisplays() {
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}


document.addEventListener('DOMContentLoaded', function() {
    loadScoresFromServer();
});
