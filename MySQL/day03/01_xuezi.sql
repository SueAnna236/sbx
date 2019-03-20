#创建脚本文件xuezi.sql，用户表user，包含列: uid，uname(用户名)，upwd，email，phone，sex，userName（真实姓名），regTime(注册时间)，isOnline(是否在线)：是-1  否-0，插入5条记录，查询最后结果。
SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(8),
	upwd VARCHAR(16),
	email VARCHAR(16),
	phone VARCHAR(11),
	sex VARCHAR(1),
	userName VARCHAR(16),
	regTime VARCHAR(16),
	isOnline VARCHAR(1)
);
INSERT INTO user VALUES
(1,'Tom','123456','Tom123456@126.com','13123456789',1,'Tom1','2018-1-1',1),
(2,'Jerry','234567','Jerry234567@163.com','13212345678',1,'Jerry2','2018-4-9',0),
(3,'Kate','345678','Kate345678@126.com','13323456789','0','Kate3','2018-2-1',1),
(4,'David','456789','David456789@163.com','13453456789',1,'David4','2018-10-19',1),
(NULL,'Lily','567890','Lily567890@126.com','15823456789',1,'Lily5','2018-11-18',1);
UPDATE user SET upwd='125698',regTime='2004-12-17' WHERE uid='1';
DELETE FROM user WHERE uid='3';
SELECT DISTINCT sex FROM user;
SELECT uname AS 'un',sex FROM user;
SELECT * FROM user;
SELECT uid,uname,upwd,email,phone,sex,username,regTime,isOnline FROM user WHERE uname='Lily';
SELECT * FROM user WHERE uname LIKE '%e%';
SELECT COUNT(*) FROM user;