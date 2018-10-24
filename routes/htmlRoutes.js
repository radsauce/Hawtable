const path = require('path')


module.exports = function(app) {
    app.get("/reserve", function(req, res) {
        res.render(//insert reserve page here);
    });

    app.get("*", function(req, res) {
        res.render(//insert home/index page here);
      });
    
    app.get("/reservationspage", function(req, res) {
        res.render(//insert existing reservations page here);
    })

}

