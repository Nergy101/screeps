module.exports = {
  create: function () {
    Game.rooms["sim"].createConstructionSite(
      24,
      22,
      STRUCTURE_TOWER,
      "tower-1"
    );
  },

  // var tower = Game.getObjectById('c6a3d0ab3f57c2eb2e3bf47d');
  // if (tower) {
  //     var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
  //         filter: (structure) => structure.hits < structure.hitsMax
  //     });
  //     if (closestDamagedStructure) {
  //         tower.repair(closestDamagedStructure);
  //     }

  //     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  //     if (closestHostile) {
  //         tower.attack(closestHostile);
  //     }
  // }
};
