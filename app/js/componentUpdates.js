var updateQueue = [];

let lastTick = new Date;
let ticksPerSecond = 0;

let pauseSimulation = false;
let stepSimulation = false;
let updates;
let debug = false;


function tick() {
    const start = new Date;
    updates = 0;

    while(updateQueue.length > 0 && updates < 10000 && (!pauseSimulation || stepSimulation)) {
        updateQueue.splice(0,1)[0]();
        ++updates;
        stepSimulation = false;
    }

    if (stepSimulation) {
        notifications.push("Debug: No more updates!");
        stepSimulation = false;
    }

    ticksPerSecond = 1000 / (new Date - lastTick);
    lastTick = new Date;
}

setInterval(tick);


// 500ms : 1:39
// 250ms : 56
