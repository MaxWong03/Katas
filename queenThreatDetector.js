const generateBoard = (wQueen, bQueen) => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push([]);
    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }
  board[wQueen[0]][wQueen[1]] = 1;
  board[bQueen[0]][bQueen[1]] = 1;
  return board;
}

const verticalThreat = (position) => {
  let [positionX, positionY] = [position[0], position[1]];
  let threats = [];
  //up
  for (let i = positionX - 1; i >= 0; i--) {
    threats.push([i, positionY]);
  }
  //down
  for (let i = positionX + 1; i < 8; i++) {
    threats.push([i, positionY]);
  }
  return threats;
}

const horizontalThreat = (position) => {
  let [positionX, positionY] = [position[0], position[1]];
  let threats = [];
  //left
  for (let i = positionY - 1; i >= 0; i--){
    threats.push([positionX, i]);
  }
  //right
  for (let i = positionY + 1; i < 8; i++){
    threats.push([positionX, i]);
  }
  return threats;
}

const diagonalThreat = (position) => {
  let [positionX, positionY] = [position[0], position[1]];
  let threats = [];
  //left up
  {
    let xUp = positionX - 1;
    for (let i = positionY - 1; i >= 0; i--) {
      if (xUp >= 0) {
        threats.push([xUp, i]);
        xUp--;
      }
    }

  }
  //right up
  {
    let xUp = positionX - 1;
    for (let i = positionY + 1; i < 8; i++) {
      if (xUp >= 0) {
        threats.push([xUp, i]);
        xUp--;
      }
    }
  }
  //left down
  {
    let yDown = positionY - 1;
    for (let i = positionX + 1; i < 8; i++) {
      if (yDown >= 0) {
        threats.push([i, yDown]);
        yDown--;
      }

    }
  }
  //right down
  {
    let yDown = positionY + 1;
    for (let i = positionX + 1; i < 8; i++) {
      if (yDown <= 8) {
        threats.push([i, yDown]);
        yDown++;
      }
    }
  }
  return threats;
}

const queenThreat = (board) => {
  let conflict = false;
  let wQueenX,wQueenY, threats, wQueenPos, vThreats, hThreats, dThreats,bQueenX, bQueenY, bQueenPos;
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
      if (board[i][j]){
        wQueenX === undefined? [wQueenX, wQueenY] = [i,j] : [bQueenX, bQueenY] = [i,j];
      }
    }
  }
  wQueenPos = [wQueenX, wQueenY];
  bQueenPos = [bQueenX, bQueenY];
  [vThreats, hThreats, dThreats] = [verticalThreat(wQueenPos), horizontalThreat(wQueenPos),diagonalThreat(wQueenPos)];
  threats = vThreats.concat(hThreats).concat(dThreats);
  threats.forEach((t) => {
    if (t[0] === bQueenPos[0] && t[1] === bQueenPos[1]){
      conflict = true;
    }

  })
  return conflict;

}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let board = generateBoard(whiteQueen, blackQueen);
console.log(board);
console.log(queenThreat(board));