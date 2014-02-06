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
  describe('When calculating the score of a bowling game;', function() {
    var game;
    var rollMany = function(pins, numberOfTimes) {
      var i = 0;
      for(; i < numberOfTimes; i++) {
        game.roll(pins); 
      }
      return game;
    }
    beforeEach(function() {
      game = newGame();
    })
    it('a gutter game should score zero', function() {
      expect(rollMany(0,20).score()).toBe(0);
    });
    it('a game with only ones should score 20', function() {
      expect(rollMany(1, 20).score()).toBe(20);
    });
    it('when a spare is rolled the next ball should counted as a bonus', function() {
      game.roll(8);
      game.roll(2);
      game.roll(8);
      expect(rollMany(0, 17).score()).toBe(26);
    });
    it('two consecutive rolls that add up to 10 are not always a spare', function() {
      game.roll(0);
      game.roll(2);
      game.roll(8);
      game.roll(1)
      expect(rollMany(0, 16).score()).toBe(11);
    });
    it('when a strike is rolled the next two balls should counted as a bonus', function() {
      game.roll(10);
      game.roll(2);
      game.roll(4);
      expect(rollMany(0, 16).score()).toBe(22);
    });
  });
}());
