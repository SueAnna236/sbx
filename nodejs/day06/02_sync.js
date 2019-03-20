const fs=require('fs');
//异步
fs.stat('./1_homework.js',(err,stats)=>{
	if (err)
	{
		throw err;
	}
	console.log(stats);
});
//同步
var rr=fs.statSync('./1_homework.js');
console.log(rr);
console.log(1);