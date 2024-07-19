
// let scoreA = 0;
// let scoreB = 0;

// document.addEventListener('DOMContentLoaded',function () {
//     let scoreA = 0;
//     let scoreB = 0;
    
//     // Initialize scores from JSON if available
//     document.addEventListener('DOMContentLoaded', function() {
//         loadScoresFromJSON();
//     });
    
//     // Function to load scores from JSON (assuming scores.json exists and contains {"scoreA": 0, "scoreB": 0})
//     function loadScoresFromJSON() {
//         fetch('scores.json')
//             .then(response => response.json())
//             .then(data => {
//                 scoreA = data.scoreA;
//                 scoreB = data.scoreB;
//                 updateScoreDisplays();
//             })
//             .catch(error => {
//                 console.error('Error loading scores:', error);
//             });
//     }
    
//     // Function to update score displays on the webpage
//     function updateScoreDisplays() {
//         document.getElementById('scoreA').textContent = scoreA;
//         document.getElementById('scoreB').textContent = scoreB;
//     }
    
//     // Function to save scores to JSON
//     function saveScoresToJSON() {
//         const scores = { scoreA, scoreB };
//         fetch('scores.json', {
//             method: 'PUT', // Adjust this based on your backend setup (e.g., PUT or POST)
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(scores),
//         })
//         .then(response => {
//             console.log('Scores saved successfully:', response);
//         })
//         .catch(error => {
//             console.error('Error saving scores:', error);
//         });
//     }
    
// })
// function incrementPoint(team) {
//     if (team === 'teamA') {
//         scoreA++;
//         document.getElementById('scoreA').textContent = scoreA;
//     } else if (team === 'teamB') {
//         scoreB++;
//         document.getElementById('scoreB').textContent = scoreB;
//     }
// }


// function decrementPoint(team) {
//     if (team === 'teamA' && scoreA > 0) {
//         scoreA--;
//         document.getElementById('scoreA').textContent = scoreA;
//     } else if (team === 'teamB' && scoreB > 0) {
//         scoreB--;
//         document.getElementById('scoreB').textContent = scoreB;
//     }
// }

// function resetScores() {
//     scoreA = 0;
//     scoreB = 0;
//     // document.getElementById('scoreA').textContent = scoreA;
//     // document.getElementById('scoreB').textContent = scoreB;
//     updateScoreDisplays();
//     saveScoresToJSON(); 
// }
 
// Function to load scores from JSON Server
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

// Function to update scores on JSON Server
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

// Function to increment points and update server
function incrementPoint(team) {
    if (team === 'teamA') {
        scoreA++;
    } else if (team === 'teamB') {
        scoreB++;
    }
    updateScoresOnServer({ teamA: scoreA, teamB: scoreB });
    updateScoreDisplays();
}

// Function to decrement points and update server
function decrementPoint(team) {
    if (team === 'teamA' && scoreA > 0) {
        scoreA--;
    } else if (team === 'teamB' && scoreB > 0) {
        scoreB--;
    }
    updateScoresOnServer({ teamA: scoreA, teamB: scoreB });
    updateScoreDisplays();
}

// Function to reset scores and update server
function resetScores() {
    scoreA = 0;
    scoreB = 0;
    updateScoresOnServer({ teamA: scoreA, teamB: scoreB });
    updateScoreDisplays();
}

// Function to update score displays on the webpage
function updateScoreDisplays() {
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}

// Load scores from server when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadScoresFromServer();
});
