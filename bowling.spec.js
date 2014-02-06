/*
This file is part of javascript-kata.

javascript-kata is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

javascript-kata is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with javascript-kata.  If not, see <http://www.gnu.org/licenses/>.
*/
(function() {
  'use strict';

  var rollMany = function(game, numberOfPins, numberOfTimes) {
    var i;
    for(i = 0; i < numberOfTimes; i++) {
      game.roll(numberOfPins);
    }
    return game;
  };
  var rollSpare = function(game) {
    game.roll(5);
    game.roll(5);
    return game;
  };
  var rollStrike = function(game) {
    game.roll(10);
    return game;
  };
  var newGame = require('./bowling').newGame;
  describe('Scoring a bowling game', function() {
    it('A gutter game should score zero', function() {
      expect(rollMany(newGame(), 0, 20).score()).toBe(0);
    });
    it('A game of ones should score 20', function() {
      expect(rollMany(newGame(), 1, 20).score()).toBe(20);
    });
    it('A spare should get the bonus of the next throw', function() {
      var game = rollSpare(newGame());
      game.roll(3);
      rollMany(game, 0, 17);
      expect(game.score()).toBe(16);
    });
    it('A strike should get the bonus of the next two throws', function() {
      var game = rollStrike(newGame());
      game.roll(3);
      game.roll(2);
      rollMany(game, 0, 16);
      expect(game.score()).toBe(20);
    });
    it('A perfect game should score 300', function() {
      expect(rollMany(newGame(), 10, 20).score()).toBe(300);
    });
    it('A game with a strike in last frame should score two extra balls', function() {
      var game = rollMany(newGame(),0,18);
      game.roll(10);
      game.roll(2);
      game.roll(4);
      expect(game.score()).toBe(16);
    });
    it('A game with a spare in last frame should score an extra ball', function() {
      var game = rollMany(newGame(),0,19);
      game.roll(10);
      game.roll(2);
      expect(game.score()).toBe(12);
    });
  });
}());
