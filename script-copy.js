import { selectPlayerSymbol } from "./functions";

export class game{

  plays = 0;
  playerSymbol = '';
  computersSymbol = '';
  player = 'user';
  playersSelectedCells = [];
  computersSelectedCells = [];

  // Grab the two selection buttons & the restart button
  xButton = document.getElementById("playX");
  oButton = document.getElementById("playO");
  restartButton = document.getElementById("restart");

  resultLabel = document.getElementById("resultLabel");

  boardCells = [
    {
      'name':'cell-1',
      'symbol': '',
      'player': ''
    },
    {
      'name':'cell-2',
      'symbol': '',
      'player': ''
    },
    {
      'name':'cell-3',
      'symbol': '',
      'player': ''
    },
    {
      'name':'cell-4',
      'symbol': '',
      'player': ''
    },
    {
      'name':'cell-5',
      'symbol': '',
      'player': ''
    },
    {
      'name':'cell-6',
      'symbol': '',
      'player': ''
    },
    {
      'name':'cell-7',
      'symbol': '',
      'player': ''
    },
    {
      'name':'cell-8',
      'symbol': '',
      'player': ''
    },
    {
      'name':'cell-9',
      'symbol': '',
      'player': ''
    }
  ];

  initialize(){
    const me = this;

    // Add event listeners to the buttons
    me.xButton.addEventListener("click", function(event) { me.selectPlayerSymbol("X") }, false);
    me.oButton.addEventListener("click", function(event) { me.selectPlayerSymbol("O") }, false);
    me.restartButton.addEventListener("click", function(event) { me.restart(); }, false);

    // Add event listeners to the cells
    me.boardCells.forEach((cell) => {
      document.getElementById(cell.name).addEventListener("click", function(event) { me.selectCell(cell.name) }, false);
    });
  }

  selectPlayerSymbol(symbol){

    const me = this;
 
    // Assign symbols to each player
    if(symbol == 'O'){
      me.oButton.setAttribute("style", "background-color: #8bc34a;");
      me.playerSymbol = "O";
      me.computersSymbol = "X";
    } 
    if(symbol == 'X'){
       me.xButton.setAttribute("style", "background-color: #8bc34a;");
       me.playerSymbol = "X";
       me.computersSymbol = "O";
    }
  }

  selectCell(cell){
    const me = this;

    // Assign whose turn it 
    me.player = 'user';

    me.checkScore(cell)

  }

  findCell(cellName){
    const me = this;

    // find the selected cell in the board array
    return me.boardCells.find( (cell) => cell.name == cellName)
  }

  checkScore(cellName){
    const me = this;
    
    let selectedCell = me.findCell(cellName)

    // if the cell has not been assigned a value
    if(!selectedCell.player){
      me.hydrateCell(selectedCell, me.player)
    }
  }

  hydrateCell(selectedCell, player){
    const me = this;
    let symbol = (player == "user") ? me.playerSymbol : me.computersSymbol;

    // increase the plays tally
    me.plays++;

    /*--- Populate the board array --- */

    // calculate the index from the cell name
    const index = selectedCell.name.split('-')[1] - 1;

    // Get the appropriate cell
    let cell = me.boardCells[index];
    cell.player = me.player;
    cell.symbol = me.playerSymbol;

    let playerCell = {'name': cell.name};

    // add the selected cell to the appropriate players array 
    (player == "user") ? me.playersSelectedCells.push(playerCell) : me.computersSelectedCells.push(playerCell)

    // Populate the cell with the symbol
    document.getElementById(selectedCell.name).innerHTML = symbol;

    // Check if someone won the game
    let winner = me.checkWinner();

    // Play as the computer 
    if(!winner && me.player != "computer" && me.plays < 9) me.computersPlay();
  }

  checkWinner(){
    const me = this;

    const userPlays = me.playersSelectedCells;
    const computerPlays = me.computersSelectedCells;
    const winningPermutations = me.winningPermutations();

    let winner = false;


    // Check for a winner only after each player has had atleast 3 turns
    if( me.plays >= 5){

      winningPermutations.forEach((perm) => {
        if(JSON.stringify(perm) === JSON.stringify(userPlays)){
          resultLabel.innerHTML = "You Win!!";
          winner = true
        }
  
        if(JSON.stringify(perm) === JSON.stringify(computerPlays)){
          resultLabel.innerHTML = "I Win!!";
          winner = true
        }
      })
    }
    

    // Checking for a draw
    if(me.plays == 9) {
      resultLabel.innerHTML = "Draw";
      winner = true;
    }

    return winner;
  
  }

  winningPermutations(){
    return [
              // Rows
              [{'name':'cell-1'}, {'name':'cell-2'}, {'name':'cell-3'}], [{'name':'cell-4'}, {'name':'cell-5'}, {'name':'cell-6'}], [{'name':'cell-7'}, {'name':'cell-8'}, {'name':'cell-9'}], 
                   
              // Columns
              [{'name':'cell-1'}, {'name':'cell-4'}, {'name':'cell-7'}], [{'name':'cell-2'}, {'name':'cell-5'}, {'name':'cell-8'}], [{'name':'cell-3'}, {'name':'cell-6'}, {'name':'cell-9'}],

              // Diagonal
              [{'name':'cell-1'}, {'name':'cell-5'}, {'name':'cell-9'}], [{'name':'cell-3'}, {'name':'cell-5'}, {'name':'cell-7'}]
           ]
  }

  computersPlay(){
    const me = this;

    // Assign whose turn it 
    me.player = 'computer';

    // Find the empty cells
    let emptyCells = me.boardCells.filter( (cell) => cell.player == '')
    let index = emptyCells.length - 1;

    // Grabbing the last cell, should be random
    let cell = emptyCells[index];

    // Hydrate the cell
    me.hydrateCell(cell, me.player);

  }

  restart(){
    const me = this;

    // Clear the buttons
    me.xButton.setAttribute("style", "background-color: gray;");
    me.oButton.setAttribute("style", "background-color: gray;");

    // Clear the cells
    me.boardCells.forEach((cell) => {
      document.getElementById(cell.name).innerHTML = "";
    });

  }

}

const newGame = new game()
//newGame.initialize();