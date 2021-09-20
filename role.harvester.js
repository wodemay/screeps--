var roleHarvester = {
    run:function(creep) {
        let to = creep.room.find(FIND_STRUCTURES).filter((structure)=>structure.energy < structure.energyCapacity);
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
            if(creep.transfer(to[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(to[0]);
            }
        }
    }
};

module.exports = roleHarvester;