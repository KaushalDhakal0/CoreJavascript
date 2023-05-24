// given an array of numbers with each number representing the count of games won.
//  e.g [1,1,2,2,2] winner is team 2 with score 2 and if [1,2,1,2] return 2 wiith message draw. 
// write an algorithm in javascript for above problem?

function findWinner(scores) {
    // Create an object to keep track of the number of wins for each team
    const wins = {};
  
    // Loop through the scores array and increment the number of wins for each team
    for (const score of scores) {
      if (wins[score]) {
        wins[score]++;
      } else {
        wins[score] = 1;
      }
    }
  
    // Find the team with the most wins
    let maxWins = 0;
    let maxTeam;
    for (const team in wins) {
      if (wins[team] > maxWins) {
        maxWins = wins[team];
        maxTeam = team;
      }
    }
  
    // Check if there is a draw (i.e. multiple teams have the same number of wins)
    let draw = false;
    for (const team in wins) {
      if (team !== maxTeam && wins[team] === maxWins) {
        draw = true;
        break;
      }
    }
  
    // Return the winner (or draw)
    if (draw) {
      return { winner: 'draw', score: maxWins };
    } else {
      return { winner: maxTeam, score: maxWins };
    }
  }
  

  const result = findWinner([1,1,3,4,1]);
  console.log(result);