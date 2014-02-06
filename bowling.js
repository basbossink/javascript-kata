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
    var rolls = [];
    var sumConsecutiveBalls = function(index) {
      return rolls[index] + rolls[index+1];
    }
    var isStrike = function(index) {
      return rolls[index] == 10;
    }
    var isSpare = function(index) {
      return sumConsecutiveBalls(index) == 10;
    }
    var scoreNonStrike = function(rollIndex) {
      return isSpare(rollIndex) ? 
        10 + rolls[rollIndex+2] : 
        sumConsecutiveBalls(rollIndex);
    };
    var scoreFrame = function(rollIndex) {
      return isStrike(rollIndex) ?
        10 + sumConsecutiveBalls(rollIndex+1) :
        scoreNonStrike(rollIndex);
    }
    return {
      roll: function(pins) {
        rolls.push(pins);
      },
      score: function() {
        var frame = 0, score = 0, rollIndex = 0;
        for(; frame < 10; frame++) {
          score += scoreFrame(rollIndex);
          rollIndex += isStrike(rollIndex) ? 1 : 2;
        }
        return score;
      }
    }
  };
}());
