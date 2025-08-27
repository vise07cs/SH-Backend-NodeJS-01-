const http=require("http");
const routes=require("./routes");

let server=http.createServer(routes.requestHandler);


routes.f1();

let port=3007;


server.listen(port,()=>{
  console.log("Server started on port 3007");
});