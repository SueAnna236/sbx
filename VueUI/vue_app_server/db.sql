/*xz_news[id/title/ctime/img_url/point/content]*/
USE xz;
CREATE TABLE xz_news(
   id  INT PRIMARY KEY AUTO_INCREMENT,
   title  VARCHAR(255),
   ctime  DATETIME,
   img_url VARCHAR(255),
   point   INT,
   content VARCHAR(2000)
);
INSERT INTO xz_news VALUES(null,'1231',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1232',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1233',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1234',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1235',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1236',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1237',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1238',now(),
'http://127.0.0.1:3000/1.png',0,'1239');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12310');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12311');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12312');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12313');
INSERT INTO xz_news VALUES(null,'12314',now(),
'http://127.0.0.1:3000/1.png',0,'12314');
INSERT INTO xz_news VALUES(null,'12315',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'12316',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'12317',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12318');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12319');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12320');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12321');
INSERT INTO xz_news VALUES(null,'12322',now(),
'http://127.0.0.1:3000/1.png',0,'123');



/*创建表 xz_comment  评论表*/
CREATE TABLE xz_comment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(2000),
    ctime DATETIME,
    nid INT
);
insert into xz_comment values(1,"1",now(),11);
insert into xz_comment values(null,"2",now(),12);
insert into xz_comment values(null,"3",now(),13);
insert into xz_comment values(null,"4",now(),14);
insert into xz_comment values(null,"5",now(),15);
insert into xz_comment values(null,"6",now(),16);
insert into xz_comment values(null,"7",now(),17);
insert into xz_comment values(null,"8",now(),18);
insert into xz_comment values(null,"9",now(),19);
insert into xz_comment values(null,"10",now(),20);
insert into xz_comment values(null,"11",now(),21);
insert into xz_comment values(null,"12",now(),22);
insert into xz_comment values(null,"13",now(),23);
insert into xz_comment values(null,"14",now(),24);
insert into xz_comment values(null,"15",now(),25);
insert into xz_comment values(null,"16",now(),26);
insert into xz_comment values(null,"17",now(),27);
insert into xz_comment values(null,"18",now(),28);
insert into xz_comment values(null,"19",now(),29);
insert into xz_comment values(null,"20",now(),30);
insert into xz_comment values(null,"21",now(),31);

/*创建商品表*/
CREATE TABLE xz_product(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    img_url VARCHAR(255),
    price DECIMAL(10,2),
    bank INT
);
INSERT INTO xz_product VALUES(NULL,"MACBOOK","http://127.0.0.1:3000/img/1.png",1999.99,1),
(NULL,"MACBOOK","http://127.0.0.1:3000/img/2.png",7999.99,1),
(NULL,"MACBOOK","http://127.0.0.1:3000/img/3.png",5949.99,1),
(NULL,"MACBOOK","http://127.0.0.1:3000/img/4.png",8941.99,1);

CREATE TABLE xz_cart(
    id INT PRIMARY KEY AUTO_INCREMENT,--编号
    uid INT,--用户编号
    pid INT,--商品编号
    price DECIMAL(10,2),--价格
    count INT--数量  
);
INSERT INTO xz_cart VALUES(NULL,1,1,1250,1);
INSERT INTO xz_cart VALUES(NULL,1,2,18920,1);

/*
SELECT c.uid,c.id,c.count,c.price,p.name FROM xz_cart c,xz_product p WHERE c.pid = p.id
*/

-- 用户注册
    -- 用户登录：id name pwd
    -- 用户信息：avatar phone addr
CREATE TABLE xz_login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25),
    pwd VARCHAR(32)
);
INSERT INTO xz_login VALUES(NULL,'tom',md5('123'));
INSERT INTO xz_login VALUES(NULL,'jerry',md5('123'));

-- 用户登录
CREATE TABLE xz_register(
    name VARCHAR(25),
    pwd VARCHAR(32)
);

CREATE TABLE xz_yaopin(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    ctime DATE,
    endtime INT,
    month INT,
    sales INT
);
INSERT INTO xz_yaopin VALUES
(null,"西瓜霜","2018-01-01",24,1,100),
(null,"西瓜霜","2018-01-01",24,2,441),
(null,"西瓜霜","2018-01-01",24,3,140),
(null,"西瓜霜","2018-01-01",24,4,400),
(null,"西瓜霜","2018-01-01",24,5,350),
(null,"西瓜霜","2018-01-01",24,6,200),
(null,"西瓜霜","2018-01-01",24,7,158),
(null,"西瓜霜","2018-01-01",24,8,345),
(null,"西瓜霜","2018-01-01",24,9,250),
(null,"西瓜霜","2018-01-01",24,10,160),
(null,"西瓜霜","2018-01-01",24,11,190),
(null,"西瓜霜","2018-01-01",24,12,200),

(null,"西瓜霜","2018-01-01",24,1,100),
(null,"西瓜霜","2018-01-01",24,2,441),
(null,"西瓜霜","2018-01-01",24,3,140),
(null,"西瓜霜","2018-01-01",24,4,400),
(null,"西瓜霜","2018-01-01",24,5,350),
(null,"西瓜霜","2018-01-01",24,6,200),
(null,"西瓜霜","2018-01-01",24,7,158),
(null,"西瓜霜","2018-01-01",24,8,345),
(null,"西瓜霜","2018-01-01",24,9,250),
(null,"西瓜霜","2018-01-01",24,10,160),
(null,"西瓜霜","2018-01-01",24,11,190),
(null,"西瓜霜","2018-01-01",24,12,200);

#创建美食表
CREATE TABLE xz_shoplist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    dname VARCHAR(255), 
    dphone VARCHAR(25),
    daddr VARCHAR(255),
    dtime VARCHAR(25),
    dpoint INT
);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店1","13956425198","万寿路地铁口","9:00~24:00",85);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店2","13956425198","万寿路地铁口","9:00~24:00",87);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店3","13956425198","万寿路地铁口","9:00~24:00",86);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店4","13956425198","万寿路地铁口","9:00~24:00",95);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店5","13956425198","万寿路地铁口","9:00~24:00",65);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店6","13956425198","万寿路地铁口","9:00~24:00",85);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店7","13956425198","万寿路地铁口","9:00~24:00",15);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店8","13956425198","万寿路地铁口","9:00~24:00",93);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店9","13956425198","万寿路地铁口","9:00~24:00",69);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店10","13956425198","万寿路地铁口","9:00~24:00",95);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店11","13956425198","万寿路地铁口","9:00~24:00",86);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店12","13956425198","万寿路地铁口","9:00~24:00",79);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店13","13956425198","万寿路地铁口","9:00~24:00",76);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店14","13956425198","万寿路地铁口","9:00~24:00",64);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店15","13956425198","万寿路地铁口","9:00~24:00",46);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店16","13956425198","万寿路地铁口","9:00~24:00",65);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店17","13956425198","万寿路地铁口","9:00~24:00",47);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店18","13956425198","万寿路地铁口","9:00~24:00",46);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店19","13956425198","万寿路地铁口","9:00~24:00",95);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店20","13956425198","万寿路地铁口","9:00~24:00",45);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店21","13956425198","万寿路地铁口","9:00~24:00",64);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店22","13956425198","万寿路地铁口","9:00~24:00",47);
INSERT INTO xz_shoplist VALUES(NULL,"http://127.0.0.1:3000/img/niu.png","牛排店23","13956425198","万寿路地铁口","9:00~24:00",52);

#小程序---消息列表
CREATE TABLE xz_message(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    ctime DATETIME,
    img_url VARCHAR(255),
    desc2 VARCHAR(255),
    content VARCHAR(2000)
);
INSERT INTO xz_message VALUES(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/niu.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/1.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/2.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/3.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/4.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/niu.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/1.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/2.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/3.png","越努力，越幸运","年终大促"),
(NULL,"标题111","2018-12-22","http://127.0.0.1:3000/img/4.png","越努力，越幸运","年终大促");

