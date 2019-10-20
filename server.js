// DEPENDENCIES
// Require the Express plug-in.
var express = require("express");

// EXPRESS CONFIGURATION
// Create an express server.
var app = express();

// Set an initial port.
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// Point the server to these route files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
// Make the server listen on the port.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
