#丢弃数据库dangdang，如果存在
DROP DATABASE IF EXISTS dangdang;
#创建数据库dangdang
CREATE DATABASE dangdang;
#进入数据库dangdang
USE dangdang;
#创建数据表book
CREATE TABLE book(
  bid INT,
  title VARCHAR(20),
  author VARCHAR(8),
  pubTime VARCHAR(10),
  price INT
);
#向数据表中插入5条记录
INSERT INTO book VALUES('1','The wall','Adfd','1978-01-22','56'),
  ('2','The wall','Adfd','1978-01-22','56'),
  ('3','The wall','Adfd','1978-01-22','56'),
  ('4','The wall','Adfd','1978-01-22','56'),
  ('5','The wall','Adfd','1978-01-22','56');
#查询所有记录
SELECT * FROM book;