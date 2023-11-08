var roleHarvester = require("./roles/role.harvester");
var roleUpgrader = require("./roles/role.upgrader");
var roleBuilder = require("./roles/role.builder");
var roleSoldier = require("./roles/role.soldier");
var spawner = require("./structures/spawner");

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
