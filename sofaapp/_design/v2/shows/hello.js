/* http://localhost:5984/apiserver/_design/v2/_show/hello */
/* static changes on db update only */
function (doc, req) {

    var moment = require("vendor/moment.min");

    return "Hello Show Func"+moment().format();
}