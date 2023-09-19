-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: libraria
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `blerjet`
--

DROP TABLE IF EXISTS `blerjet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blerjet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userat_id` int DEFAULT NULL,
  `librat_id` int DEFAULT NULL,
  `data_e_blerjes` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userat_id` (`userat_id`),
  KEY `librat_id` (`librat_id`),
  CONSTRAINT `blerjet_ibfk_1` FOREIGN KEY (`userat_id`) REFERENCES `userat` (`id`),
  CONSTRAINT `blerjet_ibfk_2` FOREIGN KEY (`librat_id`) REFERENCES `librat` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blerjet`
--

LOCK TABLES `blerjet` WRITE;
/*!40000 ALTER TABLE `blerjet` DISABLE KEYS */;
/*!40000 ALTER TABLE `blerjet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `linku` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'/img/img1.jpg'),(2,'/img/img1.jpg'),(3,'/img/img1.jpg'),(4,'/img/img1.jpg'),(5,'/img/img1.jpg'),(6,'/img/img1.jpg'),(7,'/img/img1.jpg'),(8,'/img/img1.jpg'),(9,'/img/img1.jpg'),(10,'/img/img1.jpg'),(11,'/img/img1.jpg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `koleksioni`
--

DROP TABLE IF EXISTS `koleksioni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `koleksioni` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userat_id` int DEFAULT NULL,
  `librat_id` int DEFAULT NULL,
  `data_e_blerjes` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userat_id` (`userat_id`),
  KEY `librat_id` (`librat_id`),
  CONSTRAINT `koleksioni_ibfk_1` FOREIGN KEY (`userat_id`) REFERENCES `userat` (`id`),
  CONSTRAINT `koleksioni_ibfk_2` FOREIGN KEY (`librat_id`) REFERENCES `librat` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `koleksioni`
--

LOCK TABLES `koleksioni` WRITE;
/*!40000 ALTER TABLE `koleksioni` DISABLE KEYS */;
/*!40000 ALTER TABLE `koleksioni` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `librat`
--

LOCK TABLES `librat` WRITE;
/*!40000 ALTER TABLE `librat` DISABLE KEYS */;
INSERT INTO `librat` VALUES (35,'hello',312312,'Bini','4321',20,1,1,'1',1,35),(49,'hello',213124234,'dasd','1993',1,1,1,'1',1,50),(60,'sdasd',123123,'Une','1',20,1,1,'1',1,60),(157,'Plaku dhe Deti',67890321,'Ernest Heminguej','1951',19.99,1,1,'1',1,90),(158,'Vdekja Aniles',51685986,'Ibrahim Kadriu','2020',22.5,1,1,'1',1,91),(159,'Fletorja Romance',802541,'Danielle Steel','1996',13.5,1,1,'11',1,92),(160,'I dashur Xhon',8324516,'Nicholas Sparks','2006',15.99,4,1,'1',1,93),(161,'Prilli i thyer',61310654,'Ismail Kadare','1978',33.99,5,1,'1',1,94),(162,'Gjenerali i ushtrise se vdekur',173531,'Ismail Kadare','1963',9.99,2,1,'1',1,95),(163,'Sikur te isha djale',49877530,'Haki Stermilli','1936',13.5,2,1,'1',1,96),(166,'Lamsh',0,'Albin Abazi','2022',16,1,1,'1',1,99);
/*!40000 ALTER TABLE `librat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pershkrimi`
--

DROP TABLE IF EXISTS `pershkrimi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pershkrimi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `texti` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pershkrimi`
--

LOCK TABLES `pershkrimi` WRITE;
/*!40000 ALTER TABLE `pershkrimi` DISABLE KEYS */;
INSERT INTO `pershkrimi` VALUES (1,'\"Plaku dhe Deti\" nga Hemingway është një roman emocionues për Santiago, një plak peshkatar që përballet me sfida të mëdha në det. Duke treguar guxim dhe vendosmëri për të fituar, ai shfaq mesazhin e rezistencës dhe besimit në ndeshjen me fatkeqësitë e jetës.'),(2,'\"Vdekja Aniles\" nga Ismail Kadare është një roman që ndjek historinë e Aniles, një vajzë e re që përjeton një dashuri të ndaluar dhe sfida të mëdha në shoqërinë e saj të kufizuar nga ligjet dhe traditat.'),(3,'\"Fletorja Romance\" nga Nicholas Sparks është një roman romantik që rrëfen historinë e dy personazheve që përballen me pengesa dhe sfida në dashurinë e tyre, duke ndërtuar një lidhje të fuqishme emocionale.'),(4,'\"I dashur Xhon\" nga Jane Austen është një roman klasik që përshkruan historinë e një vajze të ri të quajtur Xhon, e cila përjeton aventurat dhe konfuzionet e dashurisë dhe martesës në shoqërinë e kohës së saj.'),(5,'\"Prilli i thyer\" nga F. Scott Fitzgerald është një roman simbolik që ndjek historinë e Jay Gatsby, një personazh misterioz që përpiqet të rikthejë dashurinë e humbur dhe të arrin suksesin në shoqërinë e pasluftës.'),(6,'\"Gjenerali i ushtrisë së vdekur\" nga Ismail Kadare është një roman historik që rrëfen historinë e një gjenerali të vdekur që kthehet për të udhëhequr një ushtri të vdekur në betejën e fundit të tij, përballë çlirimit të vendit.'),(7,'\"Sikur të isha djale\" nga Gjergj Fishta është një roman epik që tregon historinë e Skënderbeut, heroit kombëtar shqiptar, duke e shfaqur atë nëpërmjet aventurave dhe betejave të tij heroike kundër pushtuesve osmanë.'),(8,'\"Histori e Skënderbeut\" nga Marin Barleti është një roman historik që paraqet historinë e jetës dhe luftës së heroit shqiptar Gjergj Kastrioti Skënderbeu, duke treguar rëndësinë e tij në mbrojtjen e vendit dhe kulturës shqiptare.'),(9,'\"Bagëti e Bujqësi\" nga George Orwell është një roman satirik që rrëfen historinë e një fermeri të quajtur Jones, i cili përjeton ndryshime politike dhe ndërlikime në fermën e tij, përfaqësuar nga personazhet e kafshëve antropomorfike.'),(10,'\"Shkëlqimi dhe rënia e shokut Zylo\" nga Gabriel García Márquez është një roman magjikorealist që përshkruan historinë e shokut Zylo, një personazh misterioz që udhëton nëpër kohë dhe hapësirë, duke përjetuar aventura fantastike.'),(11,'\"Komisari Memo\" nga Rexhep Qosja është një roman që rrëfen historinë e komisarit Memoll Dibran, një personazh i vendosur për të zbuluar të vërtetën pas një seri vrasjesh dhe konspiracionesh në një qytet të vogël shqiptar.'),(22,'\"ahshsahdasdhas\"'),(23,'hello'),(24,'hello'),(35,'Pse osht liber21321312'),(36,'\"I dashur Xhon\" nga Jane Austen është një roman klasik që përshkruan historinë e një vajze të ri të quajtur Xhon, e cila përjeton aventurat dhe konfuzionet e dashurisë dhe martesës në shoqërinë e kohës së saj.'),(37,'Pse osht liber kaq e keqe'),(38,'\"Fletorja Romance\" nga Nicholas Sparks është një roman romantik që rrëfen historinë e dy personazheve që përballen me pengesa dhe sfida në dashurinë e tyre, duke ndërtuar një lidhje të fuqishme emocionale.'),(39,'\"Vdekja Aniles\" nga Ismail Kadare është një roman që ndjek historinë e Aniles, një vajzë e re që përjeton një dashuri të ndaluar dhe sfida të mëdha në shoqërinë e saj të kufizuar nga ligjet dhe traditat.'),(40,'Hello'),(41,'\"Vdekja Aniles\" nga Ismail Kadare është një roman që ndjek historinë e Aniles, një vajzë e re që përjeton një dashuri të ndaluar dhe sfida të mëdha në shoqërinë e saj të kufizuar nga ligjet dhe traditat.'),(42,'Hello'),(43,'Hello'),(44,'1dasd'),(45,'dasdad'),(46,'dads'),(47,'1dasd'),(48,'dasd'),(49,'dasda'),(50,'Pse osht liber'),(51,'Qa osht'),(52,'Qa osht'),(53,'Qa osht'),(54,'1'),(55,'1'),(56,'po jo'),(57,'Nje liber per te gjithe'),(58,'abc,123'),(59,'abc,123'),(60,'Pse osht liber'),(61,'abc,123'),(62,'abc,123'),(63,'abc,123'),(64,'abc,123'),(65,'abc,123'),(66,'abc,123'),(67,'abc,123'),(68,'qa ka qa ska'),(69,'1'),(70,'1'),(71,'1'),(72,'3'),(73,'1'),(74,'13'),(75,'6666'),(76,'12312349999'),(77,'12312349999'),(78,'12312349999'),(79,'5554'),(80,'13212321'),(81,'12313224'),(82,'12313224'),(83,'1222122212221222'),(84,'1222122212221222'),(85,'1222122212221222'),(86,'1222122212221222'),(87,'12221222122212221222122212221222122212221222'),(88,'434343'),(89,'1233333'),(90,'\'\\\"Plaku dhe Deti\\\" nga Hemingway është një roman emocionues për Santiago, një plak peshkatar që përballet me sfida të mëdha në det. Duke treguar guxim dhe vendosmëri për të fituar, ai shfaq mesazhin e rezistencës dhe besimit në ndeshjen me fatkeqësitë e jetës.'),(91,'Vdekja Aniles nga Ismail Kadare është një roman që ndjek historinë e Aniles, një vajzë e re që përjeton një dashuri të ndaluar dhe sfida të mëdha në shoqërinë e saj të kufizuar nga ligjet dhe traditat.'),(92,'Fletorja Romance nga Nicholas Sparks është një roman romantik që rrëfen historinë e dy personazheve që përballen me pengesa dhe sfida në dashurinë e tyre, duke ndërtuar një lidhje të fuqishme emocionale.'),(93,'I dashur Xhon nga Jane Austen është një roman klasik që përshkruan historinë e një vajze të ri të quajtur Xhon, e cila përjeton aventurat dhe konfuzionet e dashurisë dhe martesës në shoqërinë e kohës së saj.'),(94,'Prilli i thyer nga F. Scott Fitzgerald është një roman simbolik që ndjek historinë e Jay Gatsby, një personazh misterioz që përpiqet të rikthejë dashurinë e humbur dhe të arrin suksesin në shoqërinë e pasluftës.'),(95,'Gjenerali i ushtrisë së vdekur nga Ismail Kadare është një roman historik që rrëfen historinë e një gjenerali të vdekur që kthehet për të udhëhequr një ushtri të vdekur në betejën e fundit të tij, përballë çlirimit të vendit.'),(96,'Sikur të isha djale nga Gjergj Fishta është një roman epik që tregon historinë e Skënderbeut, heroit kombëtar shqiptar, duke e shfaqur atë nëpërmjet aventurave dhe betejave të tij heroike kundër pushtuesve osmanë.'),(97,'ska'),(98,'ska'),(99,'S\'ka');
/*!40000 ALTER TABLE `pershkrimi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `session_token` varchar(255) DEFAULT NULL,
  `session_cookies` varchar(255) DEFAULT NULL,
  `session_skadim` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `session_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `userat` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userat`
--

DROP TABLE IF EXISTS `userat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emrin` varchar(50) NOT NULL,
  `mbiemri` varchar(50) NOT NULL,
  `email` varchar(80) NOT NULL,
  `passwordi` varchar(255) NOT NULL,
  `privilegji` varchar(50) DEFAULT '1',
  `user_image` varchar(255) DEFAULT '/img/rr.jpg',
  `bio` varchar(255) DEFAULT 'NUK KA BIO',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userat`
--

LOCK TABLES `userat` WRITE;
/*!40000 ALTER TABLE `userat` DISABLE KEYS */;
INSERT INTO `userat` VALUES (1,'Albin','Abazi','dasda@ads.com','s2dasd','1','/img/rr.jpg','nuk ka bio'),(7,'emriOsmani','Obama','dardan@kuqedra.com','12345678','2','/img/rr.jpg','nuk ka bio'),(8,'dasdasdasd','asdasdasdasd','asdasd@sdas.casdadas','$2b$10$3btwvVRuZei5GjcXtnJQC.DiM6Q5c4g4Wc3XwPb.a..5wryyY1A3O','1','/img/rr.jpg','nuk ka bio'),(17,'aaaaaaa','aaaaaaaa','aaaaaa@a.a','$2b$10$WySfDJZcTDjmMnrlPpCsKeHWp2cK9su2PeNZxO.v663udCmHdMbTe','1','/img/rr.jpg','nuk ka bio'),(18,'bbbbbb','bbbbbb','b@b.b','$2b$10$3MTuAxugALJvULevfzgoxuZKggY0h7UzTUAkNDI.7F/TlpeCKui92','1','/img/rr.jpg','nuk ka bio'),(19,'ccc','ccccccc','c@c.c','$2b$10$9UW1M92f6QHNqGBHQCl4Fehf3jDfp9HWjq.EZh9pDpw8fc8EqKV7m','2','/img/rr.jpg','nuk ka bio'),(20,'Albin','Abazii','albin.abazi@gmail.com','$2b$10$NLwgK3HBl3IrNKPddEbCSeRtgrZkmQGG83kvBDIt3WlMtp5mOHDaG','2','/img/rr.jpg','nuk ka bio'),(21,'Djellza','Neziri','djellza.nexiri@gmail.com','$2b$10$malF4h/bqrEClsbvfaifs.BBx/9NJq1HHCoC.fsj4WwPeFznkL7Di',NULL,NULL,NULL),(22,'diellza','neziri','d@d.d','$2b$10$6MSG.hS93C7/./VR5U0gquUpkdKXqH83pRzKTILCHLL7HFRrByLwi',NULL,NULL,NULL),(23,'hello1','hello2','ui@i.i','$2b$10$eGhVfm6QQtkNDupY9rA6JeSH2CFCioDLIgNm/V4geSLgAq0cJ9dba','2','/img/rr.jpg','Nuk ka Bio'),(24,'dasdas','asdasda','asdasddsad@as','$2b$10$.J33G/0/LKAD32HV7DPBduRmHGdveqJ.uTKe3P6YLrgW2FDCOkH4q','1','/img/rr.jpg','Nuk ka Bio'),(25,'qweqweqwe','qweqweqewq','dasdasdasd@sdasd','$2b$10$ZMjkgcNVv6wC8CJC6RMVi.IChDdwbHXj7S0/Ej7CVV4.htACplJlO','1','/img/rr.jpg','Nuk ka Bio'),(26,'shapt','Abazi1','shpat.abazli@g.com','$2b$10$nekfhiMSBHZjWwq.p9s/quyV5VFnU0HaWk4iekX1RlvfRneKyXC8O','1','/img/rr.jpg','Nuk ka Bio'),(27,'albini','iAbazve','albini@bini.com','$2b$10$txeF7eD3WJwxF3nsqjwPOOM4kS5FFCSWp7w0/q28VMRLG7yXLmkuC','1','/img/rr.jpg','Nuk ka Bio'),(28,'Diellza','Neziri','dn@gmail.com','$2b$10$GTatpf4atjtDt2JryBPm2.4Fic8NpFCzHdg3rIOqYpnFXxxXELsSi','2','/img/rr.jpg','Nuk ka Bio');
/*!40000 ALTER TABLE `userat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhanri`
--

DROP TABLE IF EXISTS `zhanri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zhanri` (
  `id` int NOT NULL AUTO_INCREMENT,
  `zhanri` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhanri`
--

LOCK TABLES `zhanri` WRITE;
/*!40000 ALTER TABLE `zhanri` DISABLE KEYS */;
INSERT INTO `zhanri` VALUES (1,'Drame'),(2,'Tragjedi'),(3,'Romance'),(4,'Roman'),(5,'Poem');
/*!40000 ALTER TABLE `zhanri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'libraria'
--

--
-- Dumping routines for database 'libraria'
--
/*!50003 DROP PROCEDURE IF EXISTS `updateBooks` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateBooks`(in inout_id int, in in_titulli varchar(70), in in_autori varchar(70), in in_viti_botimit varchar(4), in in_cmimi float, in in_zhanri int, in in_texti text)
BEGIN
IF EXISTS (SELECT * FROM pershkrimi WHERE id = inout_id) THEN
		update pershkrimi set texti=in_texti where id = inout_id;
	ELSE
		Insert into pershkrimi(texti) values(in_texti);
    END IF;
UPDATE librat SET titulli =in_titulli , autori =in_autori , viti_botimit =in_viti_botimit , cmimi =in_cmimi , zhanri = in_zhanri, pershkrimi_id= inout_id  WHERE id = inout_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-19 20:41:24
