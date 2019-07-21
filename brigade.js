const { events } = require("brigadier");

events.on("simpleevent", (e, p) => {  // handler for a SimpleEvent
  console.log("received push for project " + p.name )
})


