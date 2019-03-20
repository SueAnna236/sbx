#设置客户端连接时的编码
SET NAMES UTF8;
#丢弃数据库xuezi，如果存在
DROP DATABASE IF EXISTS xuezi;
#创建该数据库，设置编码为utf8
CREATE DATABASE xuezi CHARSET=UTF8;
#打开该数据库
USE xuezi;
#创建信息表laptop
CREATE TABLE laptop(
	lid INT,
	title VARCHAR(64),
	price DECIMAL(8,2),
	stockCount SMALLINT,
	shelfTime DATE,
	isOnline BOOL
);
#插入记录
INSERT INTO laptop VALUES
	(1,'戴尔1320',5678.23,5555,'2018-9-23',0),
	(2,'戴尔1320',5678.23,5555,'2018-9-23',1),
	(3,'戴尔1320',5678.23,5555,'2018-9-23',1),
	(4,'戴尔1320',5678.23,5555,'2018-9-23',1),
	(5,'戴尔1320',5678.23,5555,'2018-9-23',1),
	(6,'戴尔1320',5678.23,5555,'2018-9-23',1);
#修改第2条记录
UPDATE laptop SET title='惠普超薄',price='6542.788',stockCount='1256',shelfTime='2015-6-7' WHERE lid=2;
#删除第6条记录
DELETE FROM laptop WHERE lid=6;
#插入1条记录
INSERT INTO laptop VALUES
	(7,'Mac',7985.66,458,'2018-10-1',0);
UPDATE laptop SET title='联想564',price='3335.44',stockCount='7942',isOnline='0' WHERE lid=3;
INSERT INTO laptop VALUES
(6,'DELL燃7000',7400,300,'2017-5-8',1);
DELETE FROM laptop WHERE lid=7; 
INSERT INTO laptop VALUES(8,'Mac',7985.66,555458,'2018-10-1',0);
INSERT INTO laptop VALUES(7,'Mac',7985.66,458,'2018-10-1',TRUE);
INSERT INTO laptop VALUES(8,'Mac',7985.66,458,'2018-10-1',0);
DELETE FROM laptop WHERE lid=8;
SELECT * FROM laptop;