#设置服务器编码
SET NAMES UTF8;
#丢弃数据库jd，如果存在的话
DROP DATABASE IF EXISTS jd ;
#创建数据库jd
CREATE DATABASE jd CHARSET=UTF8;
#进入该数据库
USE jd;
#创建数据表
CREATE TABLE student(
sid INT,  # integer
name VARCHAR(8),      #variable character
sex VARCHAR(1),   #M-male  F-female
score INT
);
#插入数据 
INSERT INTO student VALUES(1,'Tom','M',89);
#插入5行记录
INSERT INTO student VALUES
(2,'Jerry','M',56),
(3,'Kate','F',99),
(4,'David','M',78),
(5,'Merry','F',88),
(6,'Lily','F',67);
#查询数据
SELECT * FROM student;





