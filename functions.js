function selectPlayerSymbol(symbol){
 
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

export { selectPlayerSymbol }