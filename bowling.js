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

  exports.newGame = function() {
    var rolls = [],
      isSpare = function(rollIndex) {
        return rolls[rollIndex] + rolls[rollIndex + 1] === 10;
      };
    return {
      roll: function(pins) {
        rolls.push(pins);
      },
      score: function() {
        var score = 0, rollIndex = 0;
        for(; rollIndex < 20; rollIndex += 1) {
          if(isSpare(rollIndex)) {
            score += 10 + rolls[rollIndex + 2];
            rollIndex += 2;
          }
          score += rolls[rollIndex];
        }
        return score;
      }
    };
  };
}());
