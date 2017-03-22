var compression = require("compression");

module.exports = compression({filter: function(req) {
  
  var acceptEncoding = req.header("accept-encoding");

  return acceptEncoding && acceptEncoding.indexOf("gzip") !== -1;

}});