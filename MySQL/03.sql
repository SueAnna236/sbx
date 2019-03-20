#丢弃数据库jd，如果存在
DROP DATABASE IF EXISTS jd;
#创建数据库jd
CREATE DATABASE jd;
#进入该数据库
USE jd;
#创建数据表
CREATE TABLE student(
  sid INT,	#interger，整数
  name VARCHAR(8),	#variable character，可变的字符
  sex VARCHAR(1),	#M-male F-female
  score INT
);
#插入数据
INSERT INTO student VALUES('1','Tom','M','79');
#插入5行记录
INSERT INTO student VALUES('2','Lily','F','88'),
  ('3','Mike','M','29'),
  ('4','Anna','F','59'),
  ('5','Lucy','F','72'),
  ('6','Nacy','F','99');
#查询数据
SELECT * FROM student;