const path = require('path')


module.exports = function(app) {
    app.get("/reserve", function(req, res) {
        res.render("reserve");
    });

    app.get("*", function(req, res) {
        res.render("index");
      });
    
    app.get("/reservationspage", function(req, res) {
        res.render("tables");
    })

}

