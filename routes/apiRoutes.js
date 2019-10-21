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
    res.json("saved")
  });

  app.delete("/api/journals/:index", function (req, res) {
    var elem = parseInt(req.params.index)
    var tempjournal = []
    for (var i = 0; i < journalData.length; i++) {
      if (i !== elem) {
        tempjournal.push(journalData[i])
      }
    }
    journalData = tempjournal

    //
    //  let newarray = journalData(note => {return note.textTitle !== req.body})
    //   journalData = newarry
    // elimate the elemn with the index in the array
    res.json("delete done")
    // re writte the file  fs.write
  });


}


