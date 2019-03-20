const express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(3000);
const pool = require("./pool")

app.get("/sales",(req,res)=>{
  var rows = [];
  rows.push({id:1,name:"东城",value:120});
  rows.push({id:2,name:"南城",value:110});
  rows.push({id:3,name:"西城",value:200});
  rows.push({id:4,name:"北城",value:109});
  rows.push({id:5,name:"中城",value:199});
  res.send(rows);
});

// app.get("/hospital",(req,res)=>{
//   var rows = [];
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.1,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.2,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.3,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.4,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.5,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.6,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.7,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.8,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.9,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.10,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.11,psave:36});
//   rows.push({id:1,count:100,pname:"西瓜霜",year:2018,ptime:2018.12,psave:36});
//   rows.push({id:2,count:150,pname:"南瓜霜",year:2018,pyear:2017,psave:36});
//   rows.push({id:1,count:200,pname:"地画完",year:2018,pyear:2019,psave:36});
//   rows.push({id:1,count:162,pname:"感冒颗粒",year:2018,pyear:2018,psave:36});
//   rows.push({id:1,count:181,pname:"白加黑",year:2018,pyear:2016,psave:36});
//   rows.push({id:1,count:360,pname:"大力丸",year:2018,pyear:2017,psave:36});
//   res.send(rows)
// })


// 功能一
app.get("/hospital",(req,res)=>{
  var name = req.query.name;
  var sql = "SELECT id,name,month,sales FROM xz_yaopin WHERE name = ?";
  pool.query(sql,[name],(err,result)=>{
    if(err){throw err}
    res.send({code:1,data:result})
  })
})