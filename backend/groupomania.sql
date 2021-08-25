-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 25 août 2021 à 20:31
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `content` text NOT NULL,
  `published_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post_fk` (`post_id`),
  KEY `usercomment_fk` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `post_id`, `user_id`, `content`, `published_date`) VALUES
(13, 36, 30, 'Wouah ! trop bizarre !', '2021-08-25 22:02:21'),
(14, 39, 31, 'Ah oui il est gros !', '2021-08-25 22:28:27'),
(15, 40, 29, 'classe !', '2021-08-25 22:28:51'),
(16, 38, 29, 'Y\'avait pas Lucius ? mdr', '2021-08-25 22:29:33');

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `image_url` varchar(250) DEFAULT NULL,
  `content` text NOT NULL,
  `published_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_fk` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `image_url`, `content`, `published_date`) VALUES
(35, 29, 'Mes vacances', 'http://localhost:3000/media/IMG_1476.JPG1629921343319.jpg', 'Superbe lac !', '2021-08-25 21:55:43'),
(36, 29, 'Est-ce un arbre ?', 'http://localhost:3000/media/IMG_1445.JPG1629921517673.jpg', 'Quel arbre bizarre !', '2021-08-25 21:58:37'),
(37, 30, 'La lune', 'http://localhost:3000/media/IMG_2445.JPG1629921841910.jpg', 'Sur la mer de nuit', '2021-08-25 22:04:01'),
(38, 30, 'J\'ai vu Dobby !', 'http://localhost:3000/media/IMG_1679.JPG1629922838338.jpg', 'hihi', '2021-08-25 22:20:38'),
(39, 30, 'canard', 'http://localhost:3000/media/IMG_1669.JPG1629923149304.jpg', 'Un canard énorme !', '2021-08-25 22:25:49'),
(40, 31, 'Paris', 'http://localhost:3000/media/IMG_1689.JPG1629923284280.jpg', 'Vu d\'en haut !', '2021-08-25 22:28:04');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `is_admin`) VALUES
(29, 'Romain', 'Bussieres', 'cm9tYWluLmJ1c3NpZXJlc0BsaXZlLmZy', '$2b$10$9aEaE1kJzz173IvT0rrgWefYOtMM8yLtppOXq0BpRWfBE0ecQoIc.', 1),
(30, 'Léa', 'Dupuis', 'c2FyYWhAY29ub3IuZnI=', '$2b$10$aNjXtvQOlNY4Qn.Re604Re3JYJP187jLlBsMS2Kit4vV7R6H15Li6', 0),
(31, 'Charles', 'Perlimpin', 'Y2hhcmxlc0BwZXJsaW1waW4uY29t', '$2b$10$fIXkMnm0pSz37cdCXUnE1uRg.UMJs3H/OUFAERj72S/6rkfesb6KC', 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `usercomment_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
