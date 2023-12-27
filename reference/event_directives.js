const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("anyEvent", (data) => console.log("ON: anyEvent", data));

// Init event
myEmitter.emit("anyEvent", { a: 1 });
myEmitter.emit("anyEvent", { x: 2 });
