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
  describe('When calculating the score for a game of bowling', function() {
    var game,
    rollMany = function(pins, numberOfTimes) {
      var i = 0;
      for(; i < numberOfTimes; i += 1) {
        game.roll(pins);
      }
    };
    beforeEach(function() {
      game = newGame();
    });
    it('a gutter game should score zero', function() {
      rollMany(0, 20);
      expect(game.score()).toBe(0);
    });
    it('a game of ones should score twenty', function() {
      rollMany(1, 20);
      expect(game.score()).toBe(20);
    });
    it('when throwing a spare the next ball should count as a bonus', function() {
      game.roll(4);
      game.roll(6);
      game.roll(3);
      rollMany(0, 17);
      expect(game.score()).toBe(16);
    });
    it('when two consecutive balls from a different frame sum to ten' +
        'they should not be counted as a spare', function() {
      game.roll(4);
      game.roll(3);
      game.roll(7);
      rollMany(0, 17);
      expect(game.score()).toBe(14);
    });
  });
}());
