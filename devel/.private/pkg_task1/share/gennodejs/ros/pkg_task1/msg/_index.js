
"use strict";

let msgTurtleAction = require('./msgTurtleAction.js');
let msgTurtleGoal = require('./msgTurtleGoal.js');
let msgTurtleActionGoal = require('./msgTurtleActionGoal.js');
let msgTurtleFeedback = require('./msgTurtleFeedback.js');
let msgTurtleActionFeedback = require('./msgTurtleActionFeedback.js');
let msgTurtleActionResult = require('./msgTurtleActionResult.js');
let msgTurtleResult = require('./msgTurtleResult.js');

module.exports = {
  msgTurtleAction: msgTurtleAction,
  msgTurtleGoal: msgTurtleGoal,
  msgTurtleActionGoal: msgTurtleActionGoal,
  msgTurtleFeedback: msgTurtleFeedback,
  msgTurtleActionFeedback: msgTurtleActionFeedback,
  msgTurtleActionResult: msgTurtleActionResult,
  msgTurtleResult: msgTurtleResult,
};
