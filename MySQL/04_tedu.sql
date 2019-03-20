#设置了连接服务器使用的编码
SET NAMES UTF8;
#丢弃数据库tedu，如果存在
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE dept(
	did TINYINT PRIMARY KEY,
	dname VARCHAR(8) UNIQUE NOT NULL,
	empCount INT
);
INSERT INTO dept VALUES
(10,'研发部',3),
(20,'市场部',1),
(30,'运营部',2),

(50,NULL,2);
CREATE TABLE emp(
	eid INT PRIMARY KEY,
	ename VARCHAR(8),
	sex BOOL,
	birthday DATE,
	salary DECIMAL(7,2),
	deptId TINYINT
);
INSERT INTO emp VALUES
	(1,'来武汉',1,'1982-5-8',18888,10),
	(7,'利润达到',0,'1988-8-8',16645,10),
	(3,'就看见',0,'1988-8-8',16645,20),
	(5,'利润达到',1,'1988-8-8',16645,10),
	(4,'利润达到',1,'1988-8-8',16115,30),
	(6,'利润达到',0,'1988-8-8',16645,10),
	(2,'利润达到',1,'1988-8-8',16645,30),
	(8,'利润达到',0,'1988-8-8',17584,10),
	(9,'利润达到',1,'1988-8-8',16115,20),
	(10,'利润达到',0,'1988-8-8',16645,10),
	(NULL,'利润达到',0,'1988-8-8',16645,20),
	(12,'利润达到',0,'1988-8-8',16645,20);
SELECT * FROM dept;
SELECT * FROM emp;