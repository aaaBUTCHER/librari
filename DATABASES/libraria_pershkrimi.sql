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
-- Table structure for table `pershkrimi`
--

DROP TABLE IF EXISTS `pershkrimi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pershkrimi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `texti` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pershkrimi`
--

LOCK TABLES `pershkrimi` WRITE;
/*!40000 ALTER TABLE `pershkrimi` DISABLE KEYS */;
INSERT INTO `pershkrimi` VALUES (1,'\"Plaku dhe Deti\" nga Hemingway është një roman emocionues për Santiago, një plak peshkatar që përballet me sfida të mëdha në det. Duke treguar guxim dhe vendosmëri për të fituar, ai shfaq mesazhin e rezistencës dhe besimit në ndeshjen me fatkeqësitë e jetës.'),(2,'\"Vdekja Aniles\" nga Ismail Kadare është një roman që ndjek historinë e Aniles, një vajzë e re që përjeton një dashuri të ndaluar dhe sfida të mëdha në shoqërinë e saj të kufizuar nga ligjet dhe traditat.'),(3,'\"Fletorja Romance\" nga Nicholas Sparks është një roman romantik që rrëfen historinë e dy personazheve që përballen me pengesa dhe sfida në dashurinë e tyre, duke ndërtuar një lidhje të fuqishme emocionale.'),(4,'\"I dashur Xhon\" nga Jane Austen është një roman klasik që përshkruan historinë e një vajze të ri të quajtur Xhon, e cila përjeton aventurat dhe konfuzionet e dashurisë dhe martesës në shoqërinë e kohës së saj.'),(5,'\"Prilli i thyer\" nga F. Scott Fitzgerald është një roman simbolik që ndjek historinë e Jay Gatsby, një personazh misterioz që përpiqet të rikthejë dashurinë e humbur dhe të arrin suksesin në shoqërinë e pasluftës.'),(6,'\"Gjenerali i ushtrisë së vdekur\" nga Ismail Kadare është një roman historik që rrëfen historinë e një gjenerali të vdekur që kthehet për të udhëhequr një ushtri të vdekur në betejën e fundit të tij, përballë çlirimit të vendit.'),(7,'\"Sikur të isha djale\" nga Gjergj Fishta është një roman epik që tregon historinë e Skënderbeut, heroit kombëtar shqiptar, duke e shfaqur atë nëpërmjet aventurave dhe betejave të tij heroike kundër pushtuesve osmanë.'),(8,'\"Histori e Skënderbeut\" nga Marin Barleti është një roman historik që paraqet historinë e jetës dhe luftës së heroit shqiptar Gjergj Kastrioti Skënderbeu, duke treguar rëndësinë e tij në mbrojtjen e vendit dhe kulturës shqiptare.'),(9,'\"Bagëti e Bujqësi\" nga George Orwell është një roman satirik që rrëfen historinë e një fermeri të quajtur Jones, i cili përjeton ndryshime politike dhe ndërlikime në fermën e tij, përfaqësuar nga personazhet e kafshëve antropomorfike.'),(10,'\"Shkëlqimi dhe rënia e shokut Zylo\" nga Gabriel García Márquez është një roman magjikorealist që përshkruan historinë e shokut Zylo, një personazh misterioz që udhëton nëpër kohë dhe hapësirë, duke përjetuar aventura fantastike.'),(11,'\"Komisari Memo\" nga Rexhep Qosja është një roman që rrëfen historinë e komisarit Memoll Dibran, një personazh i vendosur për të zbuluar të vërtetën pas një seri vrasjesh dhe konspiracionesh në një qytet të vogël shqiptar.');
/*!40000 ALTER TABLE `pershkrimi` ENABLE KEYS */;
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
