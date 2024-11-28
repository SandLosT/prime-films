CREATE DATABASE IF NOT EXISTS `bd_estoque_pelicula` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_estoque_pelicula`;

-- Configurações de banco de dados
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

-- Tabela `estoque_peliculas`
DROP TABLE IF EXISTS `estoque_peliculas`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estoque_peliculas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `model_tell` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `model_peli` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `quantidade` int NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- Inserção de dados para a tabela `estoque_peliculas`
LOCK TABLES `estoque_peliculas` WRITE;
/*!40000 ALTER TABLE `estoque_peliculas` DISABLE KEYS */;
INSERT INTO `estoque_peliculas` VALUES 
(1, 'Sansung A5', 'GEL', 20, 45.00),
(7, 'Iphone 11', 'GEL', 24, 50.00);
/*!40000 ALTER TABLE `estoque_peliculas` ENABLE KEYS */;
UNLOCK TABLES;

-- Tabela `usuarios`
DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb3_unicode_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- Inserção de dados para a tabela `usuarios`
LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES 
(2, 'Metatron', 'eometa@gmail.com', '123456789'),
(3, 'Salatiel', 'eosalada@gmail.com', '12345'),
(4, 'Rodolfo', 'eorodolfonevida@gmail.com', '123456'),
(7, 'Leolinzcrazy', 'leozinnho@gmail.com', '12345escrevo oq eu quiseprogramaemeu');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

-- Restaura as configurações anteriores
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
