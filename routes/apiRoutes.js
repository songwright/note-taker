// LOAD DATA
// Link routes to journal data.
var journalData = require("../data/journalData");
console.log("first time:", journalData)
// ROUTING
module.exports = function (app) {

  // API GET request
  app.get("/api/journals", function (req, res) {
    console.log("GET: ", journalData)
    res.json(journalData);
  });

  // API POST request
  app.post("/api/journals", function (req, res) {
    console.log("POST API")
    journalData.push(req.body);
    console.log("after post:", journalData)
    // re writte the file  fs.write
    res.json("saved")
  });

  app.delete("/api/journals/:index", function (req, res) {
    console.log("DELETE API")
    var elem = parseInt(req.params.index)
    console.log("elem:", elem)
    var tempjournal = []
    for (var i = 0; i < journalData.length; i++) {
      console.log(i, elem)
      if (i !== elem) {
        tempjournal.push(journalData[i])
      }
    }
    console.log(tempjournal)
    journalData = tempjournal

    //
    //  let newarray = journalData(note => {return note.textTitle !== req.body})
    //   journalData = newarry
    // elimate the elemn with the index in the array
    console.log("after delete:", journalData)
    res.json("delete done")
    // re writte the file  fs.write
  });


}


