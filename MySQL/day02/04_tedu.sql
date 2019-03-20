#练习：编写一个新的脚本文件04_tedu.sql，重新创建(先丢弃再创建)一个数据库tedu，进入该数据库。——执行该脚本
SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE emp(
	eid INT,
	ename VARCHAR(8),
	addr VARCHAR(16),
	phone VARCHAR(11)
);

