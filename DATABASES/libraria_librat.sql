-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: libraria
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `librat`
--

DROP TABLE IF EXISTS `librat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `librat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulli` varchar(70) NOT NULL,
  `isbn` bigint NOT NULL,
  `autori` varchar(70) NOT NULL,
  `viti_botimit` varchar(4) DEFAULT NULL,
  `cmimi` float DEFAULT NULL,
  `zhanri` int NOT NULL,
  `is_visible` tinyint(1) NOT NULL,
  `pdf_link` varchar(255) DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  `pershkrimi_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn` (`isbn`),
  KEY `zhanri` (`zhanri`),
  KEY `image_id` (`image_id`),
  KEY `pershkrimi_id` (`pershkrimi_id`),
  CONSTRAINT `librat_ibfk_1` FOREIGN KEY (`zhanri`) REFERENCES `zhanri` (`id`),
  CONSTRAINT `librat_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`id`),
  CONSTRAINT `librat_ibfk_3` FOREIGN KEY (`pershkrimi_id`) REFERENCES `pershkrimi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `librat`
--

LOCK TABLES `librat` WRITE;
/*!40000 ALTER TABLE `librat` DISABLE KEYS */;
INSERT INTO `librat` VALUES (12,'Plaku dhe Deti',67890321,'Ernest Heminguej','1951',19.99,1,1,NULL,1,1),(13,'Vdekja Aniles',51685986,'Ibrahim Kadriu','2020',22.5,2,1,NULL,2,2),(14,'Fletorja Romance',802541,'Danielle Steel','1996',13.5,3,1,NULL,3,3),(15,'I dashur Xhon',8324516,'Nicholas Sparks','2006',15.99,3,1,NULL,4,4),(16,'Prilli i thyer',61310654,'Ismail Kadare','1978',33.99,2,1,NULL,5,5),(17,'Gjenerali i ushtrise se vdekur',173531,'Ismail Kadare','1963',9.99,4,1,NULL,6,6),(18,'Sikur te isha djale',49877530,'Haki Stermilli','1936',13.5,4,1,NULL,7,7),(19,'Histori e Skenderbeut',72499775,'Naim Frasheri','1898',13.99,5,1,NULL,8,8),(20,'Bageti e Bujqesi',10377816,'Naim Frasheri','1886',17.5,5,1,NULL,9,9),(21,'Shkëlqimi dhe rënia e shokut Zylo',38901802,'Dritero Agolli','1973',19.99,4,1,NULL,10,10),(22,'Komisari Memo',6970123,'Dritero Agolli','1967',15.59,4,1,NULL,11,11);
/*!40000 ALTER TABLE `librat` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-02 21:34:41
