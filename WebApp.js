const http = require("http");

const fs = require("fs");

const httpParse = require("url").parse;

const dir = __dirname;

function displayPage(res, url) {
    const file = dir + url + ".html";
    fs.createReadStream(file).pipe(res);
}

function errorPage(res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write("<h1 style='color:red'>OOPS! Something went Wrong</h1>")
    res.write("<hr>")
    res.write("<h2>The Page you have requested is not available with us!</h2>")
}

http.createServer((req, res) => {

    if (req.method == "GET") {
        const query = httpParse(req.url).query;

        if (query != null) {
            let obj = httpParse(req.url, true).query;
            const msg = `Thanks Mr.${obj.txtName} for registering with Us! Your Email ${obj.txtEmail} is registered and will be contacted`;
            res.write(msg);
            res.end();
            return;
        }
    }
    else if(req.method == "POST"){
        req.on("data", function(inputs){
            res.write(inputs);
            res.end();
            return;
        })
    }

    switch (req.url) {
        case "/favicon.ico":
            res.end();
            break;
        case "/Registration":
            displayPage(res, req.url);
            break;
        case "/Home":
            displayPage(res, req.url);
            break;
        default: errorPage(res);
            // res.end();
            break;
    }

}).listen(2022);