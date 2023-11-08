var _ = require("lodash");

module.exports = {
  spawn: function () {
    const harvesterCount = _.filter(Game.creeps, (value, key) =>
      _.startsWith(value.memory.role, "harvester")
    ).length;
    const builderCount = _.filter(Game.creeps, (value, key) =>
      _.startsWith(value.memory.role, "builder")
    ).length;
    const upgraderCount = _.filter(Game.creeps, (value, key) =>
      _.startsWith(value.memory.role, "upgrader")
    ).length;
    const soldierCount = _.filter(Game.creeps, (value, key) =>
      _.startsWith(value.memory.role, "soldier")
    ).length;

    if (harvesterCount < 1) {
      this.createIfLessThan(1, "harvester");
      return;
    }
    console.log(
      `harvester: ${harvesterCount}, builder: ${builderCount}, upgrader: ${upgraderCount}, soldier: ${soldierCount}`
    );

    this.createIfLessThan(3, "harvester");
    this.createIfLessThan(3, "builder");
    this.createIfLessThan(3, "upgrader");
    this.createIfLessThan(3, "soldier");
  },

  createIfLessThan: function (lessThan, role) {
    const amountOfCreeps = _.filter(Game.creeps, (value, key) =>
      _.startsWith(value.memory.role, role)
    ).length;

    if (amountOfCreeps < lessThan) {
      if (
        Game.spawns["Spawn1"].spawnCreep(
          [WORK, CARRY, CARRY, MOVE],
          `${role}-${Game.time}`,
          {
            memory: { role },
            dryRun: true,
          }
        ) == 0
      ) {
        console.log("spawning", role);
        Game.spawns["Spawn1"].spawnCreep(
          [WORK, CARRY, CARRY, MOVE],
          `${role}-${Game.time}`,
          {
            memory: { role },
          }
        );
      }
    } else {
      const creeps = _.filter(Game.creeps, (value, key) =>
        _.startsWith(value.memory.role, role)
      );
      for (let index = 0; index < creeps.length; index++) {
        if (index + 1 > lessThan) {
          const creep = creeps[index];
          creep.suicide();
        }
      }
    }
  },
};
