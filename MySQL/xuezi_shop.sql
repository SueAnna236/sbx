#设置客户端语言
SET NAMES UTF8;
#丢弃数据库xz_shop，如果存在
DROP DATABASE IF EXISTS xz_shop;
#创建数据库xz，并设置服务器语言
CREATE DATABASE xz_shop CHARSET=UTF8;
#进入数据库xz_shop
USE xz_shop;

#创建用户表xz_user
CREATE TABLE xz_user(
#用户的ID，为用户的唯一标识，由系统自动生成
	uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
#手机号码
	phone VARCHAR(16) NOT NULL,
#头像图片路径
	avatar VARCHAR(128),
#用户名，如王小明
	user_name VARCHAR(32),
#性别 0-女 1-男
	gender INT
);
#查看表xz_user
SELECT * FROM xz_user;


#创建用户地址表xz0_receiver_address
CREATE TABLE xz_receiver_address(
	aid INT PRIMARY KEY AUTO_INCREMENT,
#用户编码
	user_id INT,
#接收人姓名
	receiver VARCHAR(16),
#省
	province VARCHAR(16),
#市
	city VARCHAR(16),
#县
	country VARCHAR(16),
#详细地址
	address VARCHAR(128),
#手机
	cellphone VARCHAR(16),
#固定电话
	fixedphone VARCHAR(16),
#邮编
	postcode CHAR(6),
#标签名
	tag VARCHAR(16),
#是否为当前用户的默认收货地址
	is_default BOOLEAN
);
#查看表xz_receiver_address
SELECT * FROM xz_receiver_address;

#创建用户购物车表xz_shopping_cart
CREATE TABLE xz_shopping_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
#用户编号
	user_id INT,
#商品编号
	product_id INT,
#购买数量
	count INT
);

#创建用户订单表xz_order
CREATE TABLE xz_order(
	aid INT PRIMARY KEY AUTO_INCREMENT,
#用户编号
	user_id INT,
	address_id INT,
#订单状态 1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消
	status INT,
#下单时间
	order_time BIGINT,
#付款时间
	pay_time BIGINT,
#发货时间
	deliver_time BIGINT,
#签收时间
	received_time BIGINT
);

#创建用户订单详情表xz_order_detail
CREATE TABLE xz_order_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
#订单编号
	order_id INT,
#产品编号
	product_id INT,
#购买数量
	count INT
);

#创建商品类别表xz_laptop
CREATE TABLE xz_laptop(
	lid INT PRIMARY KEY AUTO_INCREMENT,
#所属型号家族编号
	family_id INT,
#产品编号
	product_id INT,
#主标题
	title VARCHAR(128),
#副标题
	subtitle VARCHAR(128),
#价格
	price DECIMAL(10,2),
#服务承诺
	promise VARCHAR(64),
#规格/颜色
	spec VARCHAR(64),
#商品名称
	name VARCHAR(32),
#操作系统
	os VARCHAR(32),
#内存容量
	memory VARCHAR(32),
#分辨率
	resolution VARCHAR(32),
#显卡型号
	video_card VARCHAR(32),
#处理器
	cpu VARCHAR(32),
#显存容量
	video_memory VARCHAR(32),
#所属分类
	category VARCHAR(32),
#硬盘容量及类型
	disk VARCHAR(32),
#产品详细说明
	details VARCHAR(1024),
#上架时间
	shelf_time BIGINT,
#已售出的数量
	sold_count INT,
#是否促销中
	is_insale BOOLEAN
);

#创建商品详情图表xz_laptop_pic
CREATE TABLE xz_laptop_pic(
	pid INT PRIMARY KEY AUTO_INCREMENT,
#笔记本电脑编号
	laptop_id INT,
#小图片路径
	sm VARCHAR(128),
#中图片路径
	md VARCHAR(128),
#大图片路径
	lg VARCHAR(128)
);

#创建首页轮播图表xz_index_carousel
CREATE TABLE xz_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
#图片路径
	img VARCHAR(128),
#图片描述
	title VARCHAR(64),
#图片链接
	href VARCHAR(128)
);

#创建首页商品；栏目表xz_index_product
CREATE TABLE xz_index_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
#商品标题
	title VARCHAR(64),
#详细描述
	detail VARCHAR(128),
#图片
	pic VARCHAR(128),
#商品价格
	price DECIMAL(10,2),
	href VARCHAR(128),
	seq_recommended TINYINT,
	seq_new_arrival TINYINT,
	seq_top_sale TINYINT
);