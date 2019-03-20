const express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(3000);

app.get("/sales",(req,res)=>{
  var rows = [];
  rows.push({id:1,name:"东城",value:120});
  rows.push({id:2,name:"南城",value:110});
  rows.push({id:3,name:"西城",value:200});
  rows.push({id:4,name:"北城",value:109});
  rows.push({id:5,name:"中城",value:199});
  res.send(rows);
})