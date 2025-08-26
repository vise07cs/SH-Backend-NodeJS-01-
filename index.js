
let http=require("http");

let fs=require("fs");

let port=3003;

let server=http.createServer((req,res)=>{



  if(req.url=="/"){
    res.end("<h1>Welcome to Default Page</h1>")
  }

    else if(req.url=="/home"){
    res.end("<h1>Welcome to Home Page</h1>")
  }

    else if(req.url=="/about"){
    res.end("<h1>Welcome to About Us Page</h1>")
  }


    else if(req.url=="/node"){
    res.end("<h1>Welcome to NodeJS project</h1>")
  }

 else {
    res.writeHead(404, { "Content-Type": "text/html" }); // <-- set 404 status
    res.end("<h1>404 Page Not Found</h1>");
  }

 


})







server.listen(port,()=>{
    console.log("Server started on port 3003");
});  


