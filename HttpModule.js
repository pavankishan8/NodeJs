const http = require("http");

http.createServer(function(req, res){
    console.log(req.url);
    if(req.url == "/Employees")
        res.write("Employees Page of App");
    else if(req.url == "/Customers")
        res.write("Customers Page of App");
    else
        res.write("Default Page of App");    
    res.end();
}).listen(1234);
