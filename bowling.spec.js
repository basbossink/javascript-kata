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
  describe('When scoring a game of bowling', function() {
    var game,
    rollMany = function(pins, numberOfThrows) {
      var i = 0;
      for(; i < numberOfThrows; i += 1) {
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
    it('a spare should result in the next ball being counted as a bonus', function() {
      game.roll(4);
      game.roll(6);
      game.roll(3);
      rollMany(0, 17);
      expect(game.score()).toBe(16);
    });
    it('two balls that sum to ten are not a spare when they are in different frames',
      function() {
        game.roll(3);
        game.roll(6);
        game.roll(4);
        game.roll(4);
        rollMany(0, 16);
        expect(game.score()).toBe(17);
      }
    );
  });
}());
