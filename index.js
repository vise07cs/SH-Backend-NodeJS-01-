let http=require("http");

let server=http.createServer((req,res)=>{

  if(req.url=="/")
    {

          res.end(`<h1>Hello from NodeJS</h1>
            <h2>Sharpener task 17</h2>

            <h3>Using nodemon to restart server automatically</h3>

           <p> nvjdnkjdfnjkfndkjfnjdkf  </p>

                       <h3>testing nodemon</h3>

            
            
            `);

    }

   
  


});


 server.listen(3005,()=>{

      console.log("Server started on port 3005");

    })