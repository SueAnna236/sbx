SET NAMES UTF8;
DROP DATABASE IF EXISTS cby;
CREATE DATABASE cby CHARSET=UTF8;
USE cby;

/**网站信息表**/
CREATE TABLE site_info(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	site_name VARCHAR(16),
	logo VARCHAR(128), #logo存储路径
	copyright VARCHAR(128)
);

/**网站导航**/
CREATE TABLE navbar_item(
	nid INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(16),
	url VARCHAR(128),
	title VARCHAR(64)
);

/**网站侧边栏导航**/
CREATE TABLE aside_item(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	aname VARCHAR(16),
	aurl VARCHAR(128),
	atitle VARCHAR(64)
);

/**首页轮播广告图**/
CREATE TABLE cby_index_carourel(
	cid INT PRIMARY KEY AUTO_INCEMENT,
	img VARCHAR(128),  #图片路径
	title VARCHAR(64),
	href VARCHAR(128)  #图片指向的网址
);

/**注册信息表**/
CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,  #uid主键自动增长
	uname VARCHAR(16),  
	upwd VARCHAR(32),
	phone VARCHAR(16),
	email VARCHAR(64),
	avatar VARCHAR(128),  #头像图片路径
	user_name VARCHAR(32),  #用户名
	gender INT  #性别，0-女，1-男
);





