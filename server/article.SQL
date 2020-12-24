-- 创建数据库
create database egg_article;

-- 使用数据库
use egg_article;

-- 创建 article 表
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` text COLLATE utf8_unicode_ci COMMENT '缩略图',
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文章标题',
  `summary` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文章简介',
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文章内容',
  `create_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci

-- article 插入一条数据
INSERT INTO article ( title, img, summary, content, create_time )
VALUES ( '编程必备基础知识计算机组成原理+操作系统+计算机网络', 'https://img2.mukewang.com/szimg/5d1032ab08719e0906000338.jpg', '介绍编程必备基础知识', '快速、系统补足必备的计算机系统知识,更快更有趣、更贴近实际工作,让你更快地学到满足实际工作需要的知识,为以后的工作打下良好的基础', '2019-08-10:20:20');