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
    it('a gutter game should score zero', function() {
      var game = newGame();
      var i = 0;
      for(; i < 20; i++) {
        game.roll(0); 
      }
      expect(game.score()).toBe(0);
    });
    it('a game with only ones should score 20', function() {
      var game = newGame();
      var i = 0;
      for(; i < 20; i++) {
        game.roll(1); 
      }
      expect(game.score()).toBe(20);
    });
  });
}());
