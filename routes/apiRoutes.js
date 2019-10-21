// LOAD DATA
// Link routes to journal data.
var journalData = require("../data/journalData");
// ROUTING
module.exports = function (app) {

  // API GET request
  app.get("/api/journals", function (req, res) {
    res.json(journalData);
  });

  // API POST request
  app.post("/api/journals", function (req, res) {
    journalData.push(req.body);
    res.json("saved");
  });

  // API DELETE request
  // Cycle through the request array and push the
  // elements there into a new array, except for
  // the one with the index of the journal that's
  // being deleted, then make journalData equal
  // to the new array.
  app.delete("/api/journals/:index", function (req, res) {
    var elem = parseInt(req.params.index);
    var tempjournal = [];
    for (var i = 0; i < journalData.length; i++) {
      if (i !== elem) {
        tempjournal.push(journalData[i]);
      }
    }
    journalData = tempjournal;

    res.json("delete done");
  });


}


