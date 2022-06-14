/* Sample 1 */

function handleCellClick(sender, rowIndex) {
    const SPECIAL_CELL = 'Special cell';
    const TD_YELLOW = 'td_yellow';
    const TD_BLUE = 'td_blue';
    const TD_GREEN = 'td_green';

    const table = document.getElementById('table');
    if (sender.cellIndex === 0) {
        for (let cell of table.rows[rowIndex].cells) {
            if (cell.className !== TD_YELLOW) {
                cell.setAttribute('class', TD_BLUE);
            }
        }
    } else if (sender.innerText === SPECIAL_CELL) {
          for (let row of table.rows) {
              for (let cell of row.cells) {
                if (!cell.getAttribute('class')) {
                    cell.setAttribute('class', TD_GREEN);
                }
              }
          }   
    } else {
        sender.setAttribute('class', TD_YELLOW);
    }
}

/* Sample 2 */

let teamAScore = 0;
let teamBScore = 0;
let court = document.getElementById('basketball');
 
court.onclick = function(event) {
    let ball = document.getElementById('ball');

    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - court.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - court.clientLeft - ball.clientWidth / 2
      };

      if (ballCoords.top < 0) {
 ballCoords.top = 0; 
}

      if (ballCoords.left < 0) {
 ballCoords.left = 0; 
}


      if (ballCoords.left + ball.clientWidth > court.clientWidth) {
        ballCoords.left = court.clientWidth - ball.clientWidth;
      }

      if (ballCoords.top + ball.clientHeight > court.clientHeight) {
        ballCoords.top = court.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';

      checkGoal(ballCoords);
}

function checkGoal(position) {
    let teamALabel = document.getElementById('teamAScore');
    let teamBLabel = document.getElementById('teamBScore');

    let pos1 = 145.225;
    let range1 = 5;
    let pos2 = 13;
    let range2 = 7;

    if (Math.abs(position.top - pos1) <= range1 && Math.abs(position.left - pos2) <= range2) {
        teamALabel.innerText = ++teamAScore;
    }

    let pos3 = 144.625;
    let pos4 = 544;

    if (Math.abs(position.top - pos3) <= range1 && Math.abs(position.left - pos4) <= range2) {
        teamBLabel.innerText = ++teamBScore;
    }
}
