# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.1.25-MariaDB)
# Base de datos: racks
# Tiempo de Generación: 2018-03-03 16:45:25 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla level
# ------------------------------------------------------------

DROP TABLE IF EXISTS `level`;

CREATE TABLE `level` (
  `idlevel` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idrack` int(10) unsigned NOT NULL,
  `created` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idlevel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `level` WRITE;
/*!40000 ALTER TABLE `level` DISABLE KEYS */;

INSERT INTO `level` (`idlevel`, `idrack`, `created`)
VALUES
	(1,1,'2018-03-03 10:44:11'),
	(2,1,'2018-03-03 10:44:11'),
	(3,1,'2018-03-03 10:44:11'),
	(4,1,'2018-03-03 10:44:11');

/*!40000 ALTER TABLE `level` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla location
# ------------------------------------------------------------

DROP TABLE IF EXISTS `location`;

CREATE TABLE `location` (
  `idlocation` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idlevel` int(10) unsigned NOT NULL,
  `idproduct` int(10) unsigned NOT NULL,
  `quantity` double(8,2) NOT NULL,
  `created` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idlocation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;

INSERT INTO `location` (`idlocation`, `idlevel`, `idproduct`, `quantity`, `created`)
VALUES
	(1,1,1,0.00,'2018-03-03 10:44:11'),
	(2,1,1,0.00,'2018-03-03 10:44:11'),
	(3,1,1,0.00,'2018-03-03 10:44:11'),
	(4,1,1,0.00,'2018-03-03 10:44:11'),
	(5,2,1,0.00,'2018-03-03 10:44:11'),
	(6,2,1,0.00,'2018-03-03 10:44:11'),
	(7,2,1,100.00,'2018-03-03 10:44:33'),
	(8,2,1,0.00,'2018-03-03 10:44:11'),
	(9,3,1,100.00,'2018-03-03 10:44:39'),
	(10,3,1,0.00,'2018-03-03 10:44:11'),
	(11,3,1,0.00,'2018-03-03 10:44:11'),
	(12,3,1,0.00,'2018-03-03 10:44:11'),
	(13,4,1,0.00,'2018-03-03 10:44:11'),
	(14,4,1,0.00,'2018-03-03 10:44:11'),
	(15,4,1,80.00,'2018-03-03 10:44:17'),
	(16,4,1,0.00,'2018-03-03 10:44:11');

/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `idproduct` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sku` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `unit` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idproduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;

INSERT INTO `product` (`idproduct`, `sku`, `name`, `price`, `unit`, `image`, `active`, `created`)
VALUES
	(1,'H0Qd8Y0gOn','Coca Cola',29.50,'Pieza','/images/product.jpg',1,'2018-03-02 12:42:24'),
	(2,'SsdgpmvIhf','Iphone X',26000.00,'Pieza','/images/product.jpg',1,'2018-03-02 12:42:24'),
	(3,'YLMWTiwBxM','IMac 21 In.',34000.00,'Pieza','/images/product.jpg',1,'2018-03-02 12:42:24');

/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla rack
# ------------------------------------------------------------

DROP TABLE IF EXISTS `rack`;

CREATE TABLE `rack` (
  `idrack` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idrack`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rack` WRITE;
/*!40000 ALTER TABLE `rack` DISABLE KEYS */;

INSERT INTO `rack` (`idrack`, `name`, `created`)
VALUES
	(1,'rack-5a9ad0db8b798','2018-03-03 10:44:11');

/*!40000 ALTER TABLE `rack` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
