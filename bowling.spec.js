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

  var newGame = require('./bowling').newGame;
  describe('When calculating the score for a game of bowling;', function() {
      var game;
      beforeEach(function() {
        game = newGame();
      });
      var rollMany = function(game, pins, numberOfTimes) {
        var i = 0;
        for(; i < numberOfTimes; i++) {
          game.roll(pins);
        }
        return game;
    };
    it('it should score zero for a gutter game', function() {
      expect(rollMany(game,0,20).score()).toBe(0);
    });
    it('it should score 20 for a game of all ones', function() {
      expect(rollMany(game,1,20).score()).toBe(20);
    });
    it('when a spare is thrown it should add the next ball as a bonus', function() {
      game.roll(4);
      game.roll(6);
      game.roll(1);
      expect(rollMany(game,0,18).score()).toBe(12);
    });
    it('when a strike is thrown it should add the next two balls as a bonus', function() {
      game.roll(10);
      game.roll(6);
      game.roll(1);
      expect(rollMany(game,0,16).score()).toBe(24);
    });
    it('it should score 300 for a perfect game', function() {
      expect(rollMany(game,10,12).score()).toBe(300);
    });
  });
}());
