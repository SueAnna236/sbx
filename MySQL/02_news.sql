#设置客户端连接时，编码
SET NAMES UTF8;
#丢弃数据库sina，如果存在
DROP DATABASE IF EXISTS sina;
#创建数据库库,使用utf8编码
CREATE DATABASE sina CHARSET=UTF8;
#进入该数据库
USE sina;
#创建数据表news
CREATE TABLE news(
	nid INT,
	title VARCHAR(64),
	author VARCHAR(8),
	content VARCHAR(5000),
	pubTime VARCHAR(10)
);
#添加记录
INSERT INTO news VALUES
	('1','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10'),
	('2','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10'),
	('3','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10'),
	('4','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10'),
	('5','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10'),
	('6','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10'),
	('7','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10'),
	('8','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10'),
	('9','你好','了的','拮抗剂为哦UI偶偶为','2018-9-10');
#更改编号为2的记录
UPDATE news SET author='金海湖',content='看见快乐建立',pubTime='2014-55-5' WHERE nid='2';
#删除编号为4的记录
DELETE FROM news WHERE nid='4';
#查看表单
SELECT * FROM news;