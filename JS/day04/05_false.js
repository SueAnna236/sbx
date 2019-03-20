//''和数字比较的时候，转成数字0
console.log(''==0);

//null和数字比较的时候，转成数字0;和0比较，不会转换
console.log(null==0);

//undefined和任何数字比较的时候，转成NaN，结果都是false
console.log(undefined<-10);

//NaN和任何数据比较都是false
console.log(NaN<002);