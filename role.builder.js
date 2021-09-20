var roleBuilder = {
    run:function(creep) {
        let to = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(to[0] != undefined) {
            let from = Game.getObjectById('5bbcab5b9099fc012e63358f');
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
            if(creep.build(to[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(to[0]);
            }
        }
        }
    }
};

module.exports = roleBuilder;