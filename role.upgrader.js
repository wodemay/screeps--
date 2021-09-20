var roleUpgrader = {
    run:function(creep) {
        let to = creep.room.controller;
        if(to != undefined) {
            let from = Game.getObjectById('5bbcab5b9099fc012e633590');
        if(creep.carry.energy == creep.carryCapacity) {
            creep.memory.work = false;
        }
        else if(creep.carry.energy == 0){
            creep.memory.work = true;
        }
        if(creep.memory.work == true) {
            if(creep.harvest(from) == ERR_NOT_IN_RANGE) {
                creep.moveTo(from);
            }
        }
        else {
            if(creep.transfer(to,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(to);
            }
        }
        }
    }
};

module.exports = roleUpgrader;