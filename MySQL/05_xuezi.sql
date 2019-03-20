SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE user(
	uid INT PRIMARY KEY,
	uname VARCHAR(8) UNIQUE NOT NULL,
	upwd VARCHAR(16),
	email VARCHAR(32),
	phone CHAR(11),
	userName VARCHAR(16),
	isOnline BOOL
);
INSERT INTO user VALUES
	(1,'及hihihi语言','123456','derere','123456789012','规范和计划',1),
	(2,'JHJ方法','123456','derere','123456789012','就hi胡矛',1),
	(5,'发放人','123456','derere','123456789012','就hi胡矛',1),
	(3,'jhkjhk','123456','derere','123456789012','就hi胡矛',1);
SELECT * FROM user;