module.exports = {
  run: function (creep) {
    if (creep.room.name == creep.memory.target) {
      target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
      if (!target) {
        target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES);
      }
      if (target) {
        creep.say("⚔ Attacking");
        result = creep.attack(target);
        if (result == OK) {
        } else if (result == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
        }
      } else {
        creep.say("🔍 Roam");
        creep.move(
          _.sample([
            TOP,
            TOP_RIGHT,
            RIGHT,
            BOTTOM_RIGHT,
            BOTTOM,
            BOTTOM_LEFT,
            LEFT,
            TOP_LEFT,
          ])
        );
      }
    } else {
      // creep.say('Waiting for enemy');
      var route = Game.map.findRoute(creep.room, creep.memory.target);
      if (route.length > 0) {
        creep.moveTo(creep.pos.findClosestByRange(route[0].exit));
      } else {
        // creep.say('🔍 Roam');
        creep.move(
          _.sample([
            TOP,
            TOP_RIGHT,
            RIGHT,
            BOTTOM_RIGHT,
            BOTTOM,
            BOTTOM_LEFT,
            LEFT,
            TOP_LEFT,
          ])
        );
      }
    }
  },
};
