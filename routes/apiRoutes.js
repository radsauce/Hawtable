// tabledata displays current reservations
const tableData = require("../data/reservations");


module.exports = function (app) {
    app.get("/api/reservations", function (req, res) {
        res.json(tableData)
    });


    app.post("/api/reservations", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        tableData.addReservation(req.body);
        res.sendStatus(200);
    });

};