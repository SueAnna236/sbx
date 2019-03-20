/*
//遍历关联数组
var book=[];
book['bid']=3001;
book['title']='三国演义';
book['author']='罗贯中';
book['price']=89;
book['pubTime']='1998-10-4';
//console.log(book);
for(var key in book){
	//key要遍历的数组元素的下标
	console.log(key+'---'+book[key]);//book[key]通过下标找到对应的元素值
};


//练习：遍历员工的数组
var emp=new Array();
emp['eid']=1;
emp['ename']='Tom';
emp['sex']='男';
emp['birthday']='1989-4-5';
emp['salary']=8000;
emp['phone']='1851111112';
for (var key in emp)
{
	console.log(key+'----'+emp[key]);
}


//创建关联数组city，包含多个城市，使用for-in遍历数组
var city=['北京','上海','天津','深圳','广州','武汉','重庆'];
for (var key in city)
{
	console.log(key+'---'+city[key]);
}

//使用for循环遍历数组元素
for (var i=0;i<city.length;i++)
{
	console.log(i+'--'+city[i]);
}

var j=0;
while (j<city.length)
{
	console.log(j+'、'+city[j]);
	j++;
}


//练习：创建数组
var menu=['推荐','热点','娱乐','科技','汽车','体育','军事','国际','时尚'];
for (var key in menu)
{
	console.log(key+'----'+menu[key]);
}

for (var i=0;i<menu.length;i++)
{
	console.log(i+'--'+menu[i]);
}

var j=0;
while (j<menu.length)
{
	console.log(j+'、'+menu[j]);
	j++;
}
*/


