var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function() {
    let harvesters = _.filter(Game.creeps,(creep)=>creep.memory.role == 'harvester');
    let upgraders = _.filter(Game.creeps,(creep)=>creep.memory.role == 'upgrader');
    let builders = _.filter(Game.creeps,(creep)=>creep.memory.role == 'builder');
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    var tower = Game.getObjectById('5dca1c6f6c41fd66d3a96b7b');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    if(harvesters.length < 2) {
        Game.spawns.Spawn1.spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE],'Harvester'+Game.time,{memory:{role:'harvester',work:true}});
    }
    else if(upgraders.length < 2) {
        Game.spawns.Spawn1.spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE],'Upgrader'+Game.time,{memory:{role:'upgrader',work:true}});
    }
    else if(builders.length < 2) {
        Game.spawns.Spawn1.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'Builder'+Game.time,{memory:{role:'builder',work:true}});
    }
    for(let name in harvesters) {
        let creep = harvesters[name];
        roleHarvester.run(creep);
    }
    for(let name in upgraders) {
        let creep = upgraders[name];
        roleUpgrader.run(creep);
    }
    for(let name in builders) {
        let creep = builders[name];
        roleBuilder.run(creep);
    }
}
//好
