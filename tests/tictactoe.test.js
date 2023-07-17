import { describe, it, assert, expect } from 'vitest';
import { game } from  '../script.js';


const newGame = new game();


describe('initialize', () => {
  it('Sets the player symbol', () => {
    expect(newGame.initialize()).toBeFunction();
  });
});


describe('selectPlayerSymbol', () => {
  it('Sets the player symbol', () => {
    expect(newGame.selectPlayerSymbol()).toBeFunction();
  });
});


describe('selectCell', () => {
  it('Selects a cell on the board', () => {
    expect(newGame.selectCell()).toBeFunction();
  });
});


describe('findCell', () => {
  it('Finds a cell', () => {
    expect(newGame.findCell()).toBeFunction();
  });
});


describe('checkScore', () => {
  it('Checks each players score', () => {
    expect(newGame.checkScore()).toBeFunction();
  });
});


describe('hydrateCell', () => {
  it('Populates a boards cell', () => {
    expect(newGame.hydrateCell()).toBeFunction();
  });
});


describe('checkWinner', () => {
  it('Checks for a winner', () => {
    expect(newGame.checkWinner()).toBeFunction();
  });
});


describe('winningPermutations', () => {
  it('Returns winning permutations', () => {
    expect(newGame.winningPermutations()).toBeTruthy();
  });
});


describe('computersPlay', () => {
  it('Simulates the computers turn', () => {
    expect(selectPlayerSymbol()).toBeFunction();
  });
});


describe('restart', () => {
  it('Restarts the game', () => {
    expect(selectPlayerSymbol()).toBeFunction();
  });
});