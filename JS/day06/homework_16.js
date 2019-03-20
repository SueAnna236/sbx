//创建一个分页对象，属性有上一页prev（<）、下一页next、总页数pcount、当前的页码pno、每页的大小size，使用for-in遍历属性
var page={
	prev:'<上一页',
	next:'下一页>',
	pcount:250,
	pno:1,
	size:10
};
for(var key in page){
	console.log(key+':'+page[key]);
}




