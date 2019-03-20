#设置客户端连接时，使用编码为utf8
SET NAMES UTF8;
#丢弃数据库xuezi，如果存在
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi，使用UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#进入该数据库
USE xuezi;
#创建数据表
CREATE TABLE user(
	uid INT,
	uname VARCHAR(16),
	upwd VARCHAR(16),
	umail VARCHAR(32),
	phone VARCHAR(11),
	sex VARCHAR(1),
	userName VARCHAR(8),
	regTime VARCHAR(10),
	isOnline INT
);
#插入五条记录
INSERT INTO user VALUES
	('1','aa','1133555','aa@163.com','12345678901','F','Tom','2018-10-01','0'),
	('2','bb','22','bb@163.com','12345678901','M','Jooom','2018-10-01','0'),
	('3','cc','33','cc@163.com','12345678901','M','Rddom','2018-10-01','0'),
	('4','dd','44','dd@163.com','12345678901','F','ddom','2018-10-01','0'),
	('5','ee','55','ee@163.com','12345678901','F','小明','2018-10-01','0')	;
#更改编号为1的用户
UPDATE user SET upwd='654321',regTime='2017-12-25' WHERE uid='1';
#删除编号为3的用户
DELETE FROM user WHERE uid='3';

#查询记录
SELECT * FROM user;