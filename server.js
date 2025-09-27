const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get ("/main",(req,res)=>{
  res.sendFile("./index.html",{root:__dirname})
})

app.get ("/women",(req,res)=>{
  res.sendFile("./women.html",{root:__dirname})
})

app.get ("/men",(req,res)=>{
  res.sendFile("./men.html",{root:__dirname})
})

app.get ("/kids",(req,res)=>{
  res.sendFile("./kids.html",{root:__dirname})
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

