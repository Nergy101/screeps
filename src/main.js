var roleHarvester = require("./role.harvester");
var roleUpgrader = require("./role.upgrader");
var roleBuilder = require("./role.builder");
var roleSoldier = require("./role.soldier");
var spawner = require("./spawner");

module.exports.loop = function () {
  spawner.spawn();

  console.log("test");

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == "harvester") {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == "upgrader") {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == "builder") {
      roleBuilder.run(creep);
    }
    if (creep.memory.role == "soldier") {
      roleSoldier.run(creep);
    }
  }
};
