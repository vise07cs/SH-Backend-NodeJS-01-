const fs=require("fs");


const requestHandler  =(req,res)=>{
  
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

else if(req.url=="/read"){
  fs.readFile("formValues.txt",(err,data)=>{
    console.log("my data value is "+data.toString());
    res.end(`<h1>${data.toString()}</h1>`);
  })
}

    

}


function f1(){
  console.log("f1 called");
}



module.exports={requestHandler,f1};