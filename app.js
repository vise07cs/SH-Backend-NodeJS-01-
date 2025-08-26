const http=require("http");
const fs=require("fs");
let server=http.createServer((req,res)=>{

// let url=req.url;

// let method=req.method;


if(req.url=="/"){

  res.setHeader("Content-Type","text/html");

  res.end(`
    <form action="/message" method="POST">
     <label>Username</label>
      <input type="text" name="username"/>
    
      <button type="submit">Submit</button>

    </form>`
  )
}


else if(req.url=="/message"){
  res.setHeader("Content-Type","text/html");
    let body=[];

  req.on("data",(chunk)=>{
    
    console.log(chunk)
    body.push(chunk);


  })

  req.on("end",()=>{
    let combinedBuffer=Buffer.concat(body);
    console.log(combinedBuffer.toString());
    let formVal=combinedBuffer.toString().split("=")[1];
    console.log(formVal);
 
    fs.writeFile("formValues.txt",formVal,(err)=>{
      res.statusCode=302;
      res.setHeader("Location","/");
      return res.end();
    })
  })

}
    
     
})




let port=3007;


server.listen(port,()=>{
  console.log("Server started on port 3007");
});