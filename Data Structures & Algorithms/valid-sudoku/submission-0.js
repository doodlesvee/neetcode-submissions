class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         let row = {};
  let col = {};
  let cube = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const elem = board[i][j];

      if (row.hasOwnProperty(elem)) return false;
      else if (elem !== ".") row[elem] = true;
    }

    row = {};
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const elem = board[j][i];

      if (col.hasOwnProperty(elem)) return false;
      else if (elem !== ".") col[elem] = true;
    }

    col = {};
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === ".") continue;

      const r = Math.floor(i / 3);
      const c = Math.floor(j / 3);

      const key = `${r}-${c}`;

      if (!cube[key]) cube[key] = {};

      if (cube[key].hasOwnProperty(board[i][j])) return false;
      else cube[key][board[i][j]] = true;
    }

  }

  return true;
    }
}
