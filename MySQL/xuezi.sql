SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE xz_laptop_family(
	fid SMALLINT PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR(8) UNIQUE,
	laptopCount INT DEFAULT 5
);
INSERT INTO xz_laptop_family VALUES(10,'苹果',3),(20,'戴尔',2),(30,'华硕',2),(40,'小米',DEFAULT);
INSERT INTO xz_laptop_family(fid,fname) VALUES(50,'联想');
CREATE TABLE xz_laptop(
	lid INT,
	title VARCHAR(128),
	price DECIMAL(6,2) DEFAULT 4999,#设置默认价格4999，两种方式插入数据
	detail VARCHAR(800),
	shelfTime DATE,
	isOnsale BOOL,
	familyId SMALlINT,
	FOREIGN KEY (familyId) REFERENCES xz_laptop_family(fid)
);
INSERT INTO xz_laptop VALUES
(1,'苹果Mac2018',7568.24,'新平上市，价格更优，性能更好','2017-7-4',1,10),
(2,'戴尔2018',7568,'新平上市，价格更优，性能更好','2017-7-4',1,20),
(3,'华硕44',7568,'新平上市，价格更优，性能更好','2017-7-4',1,30),
(4,'苹果Mac',4458.88,'新平上市，价格更优，性能更好','2017-7-4',1,10),
(5,'苹果Mac2018',7568,'新平上市，价格更优，性能更好','2017-7-4',1,10),
(6,'苹果Mac2018',7568,'新平上市，价格更优，性能更好','2017-7-4',1,10),
(7,'联想44',DEFAULT,'详细嘻嘻信息','2018-4-4',1,50);
INSERT INTO xz_laptop(lid,title,shelfTime,isOnsale,familyId) VALUES(8,'小米','2017-5-5',0,40);
SELECT * FROM xz_laptop_family;
SELECT * FROM xz_laptop;