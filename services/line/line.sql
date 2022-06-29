CREATE DATABASE  IF NOT EXISTS `linestation` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `linestation`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: linestation
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `line`
--

DROP TABLE IF EXISTS `line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `line` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `line`
--

LOCK TABLES `line` WRITE;
/*!40000 ALTER TABLE `line` DISABLE KEYS */;
INSERT INTO `line` VALUES (1,'Green'),(2,'Blue');
/*!40000 ALTER TABLE `line` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `line_station`
--

DROP TABLE IF EXISTS `line_station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `line_station` (
  `id` int NOT NULL AUTO_INCREMENT,
  `line_id` int DEFAULT NULL,
  `station_id` int DEFAULT NULL,
  `sequence` int DEFAULT NULL,
  `distance` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `line_station`
--

LOCK TABLES `line_station` WRITE;
/*!40000 ALTER TABLE `line_station` DISABLE KEYS */;
INSERT INTO `line_station` VALUES (1,2,18,10,1.05),(2,2,19,11,1.65),(3,2,20,12,0.92),(4,2,1,13,1.62),(5,2,21,14,1.86),(6,2,22,15,0.93),(7,2,23,16,1.06),(8,2,24,17,1.90),(9,2,25,18,0.92),(10,2,26,19,0.88),(11,2,27,20,1.65),(12,2,28,21,1.23),(13,2,29,22,1.32),(14,2,15,23,1.43),(15,2,30,24,1.06),(16,2,31,25,2.34),(17,2,32,26,1.56),(18,1,1,1,0.00),(19,1,2,2,1.47),(20,1,3,3,1.18),(21,1,4,4,0.80),(22,1,5,5,1.13),(23,1,6,6,1.20),(24,1,7,7,1.15),(25,1,17,8,1.16),(26,1,8,9,0.79),(27,1,9,10,1.82),(28,1,10,11,1.39),(29,1,11,12,1.27),(30,1,12,13,1.26),(31,1,13,14,1.75),(32,1,14,15,2.25),(33,1,15,16,1.43),(34,1,16,17,1.29),(35,2,33,1,0.00),(36,2,34,2,0.51),(37,2,35,3,0.86),(38,2,36,4,1.36),(39,2,37,5,1.05),(40,2,38,6,0.91),(41,2,39,7,1.05),(42,2,40,8,1.22),(43,2,41,9,0.96);
/*!40000 ALTER TABLE `line_station` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `station`
--

DROP TABLE IF EXISTS `station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `station` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `station`
--

LOCK TABLES `station` WRITE;
/*!40000 ALTER TABLE `station` DISABLE KEYS */;
INSERT INTO `station` VALUES (1,'Chennai Central'),(2,'Egmore'),(3,'Nehru Park'),(4,'Kilpauk Medical College'),(5,'Pachaiyappa'),(6,'Shenoy Nagar'),(7,'Anna Nagar East'),(8,'Thirumangalam'),(9,'Koyambedu'),(10,'CMBT'),(11,'Arumbakkam'),(12,'Vadapalani'),(13,'Ashok Nagar'),(14,'Ekkattuthangal'),(15,'Alandur'),(16,'St.Thomas Mount'),(17,'Anna Nagar Tower'),(18,'Washermanpet'),(19,'Mannadi'),(20,'High Court'),(21,'Government Estate'),(22,'LIC'),(23,'Thousand Lights'),(24,'AG-DMS'),(25,'Teynampet'),(26,'Nandanam'),(27,'Saidapet'),(28,'Little Mount'),(29,'Guindy'),(30,'Nanganallur Road'),(31,'Meenambakkam'),(32,'Airport'),(33,'Wimco Nagar Depot'),(34,'Wimco Nagar'),(35,'Tiruvottriyur'),(36,'Tiruvottriyur Theradi'),(37,'Kaladipet'),(38,'Tollgate'),(39,'New Washermanpet'),(40,'Tondiarpet'),(41,'Sir Theagaraya College');
/*!40000 ALTER TABLE `station` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23 20:55:47
