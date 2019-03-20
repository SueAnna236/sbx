//练习：计算当前系统时间距离2018年圣诞节还有多久。格式：距离2018年圣诞节还有60天8小时23分钟15秒
//计算两个Date对象距离计算机元年毫秒数差
var merr=new Date(2018,11,25);
var today=new Date();
merr=merr.getTime();
today=today.getTime();
//两个对象相减返回的是相差的毫秒数
d=(merr-today)/1000;
var day=Math.floor(d/(60*60*24));
var hour=Math.floor(d%(60*60*24)/(60*60));
var minute=Math.floor(d%(60*60)/60);
var second=Math.floor(d%60);
console.log('距离2018年圣诞节还有'+day+'天'+hour+'小时'+minute+'分钟'+second+'秒');
