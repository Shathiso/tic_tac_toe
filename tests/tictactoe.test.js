import { describe, it, assert, expect } from 'vitest';
import { game } from  '../script.js';


const newGame = new game();

describe('winningPermutations', () => {
  it('Returns winning permutations', () => {
    expect(newGame.winningPermutations()).toBeTruthy();
  });
});