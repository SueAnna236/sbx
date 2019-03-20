//使用连接池连接mysql
const mysql=require('mysql');
//创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20 //设置连接池中的数量
});

/*
//直接执行SQl语句，自动从连接池中取1个连接
pool.query('SELECT * FROM emp',(err,result)=>{
	if (err) throw err;
	console.log(result);
});


//练习：通过连接池删除员工编号为5 的员工，查看执行结果
//返回一个删除成功的对象
pool.query('DELETE FROM emp WHERE eid=6',(err,result)=>{
	if (err)
	{
		throw err;
	}
	console.log(result);
});
*/

/*
//练习：插入一条员工记录
pool.query(`INSERT INTO emp VALUES(15,'Tom',1,'1988-5-10',8000,20)`,(err,result)=>{
	if (err)
	{
		throw err;
	}
	console.log(result);
});
*/

/*
//SQL注入
//?占位符，防止SQL注入
pool.query(`INSERT INTO emp VALUES(?,?,?,?,?,?)`,[null,'leo',0,'1998-10-25',7500,30],(err,result)=>{
	if (err)
	{
	//	throw err;
	}
	console.log(result);
});



//使用对象形式的数据直接插入
var emp={
	eid:null,
	ename:'leo2',
	sex:1,
	birthday:'1997-2-10',
	salary:6000,
	deptId:10
};
pool.query('INSERT INTO emp SET ?',[emp],(err,result)=>{
	if (err)
	{
		throw err;
	}
	console.log(result);
});
*/
/**/
pool.query('UPDATE emp SET salary=? WHERE eid=?',[7000,7],(err,result)=>{
	if (err)
	{
		throw err;
	}
	console.log(result);
});
