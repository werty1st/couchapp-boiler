/* http://localhost:5984/apiserver/_design/v2/_list/hello/recent-items */
/* dynamic changes on every request (but can be cached) etag stays the same but content changes*/

function (head, req) {

    var moment = require("vendor/moment.min");

    start({code: 200, headers: {
            'Content-Type': 'text/html; charset=utf-8'
            }});

    send("Hello Show Func"+moment().format());
}



