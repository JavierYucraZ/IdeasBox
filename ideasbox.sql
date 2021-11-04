-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2021 a las 22:55:22
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ideasbox`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `uid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titulo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(1500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `poster` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `meta` int(11) NOT NULL,
  `patrocinadores` int(11) NOT NULL DEFAULT '0',
  `recaudado` int(11) NOT NULL DEFAULT '0',
  `vote_up` int(11) NOT NULL,
  `vote_down` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `uid`, `titulo`, `descripcion`, `categoria`, `poster`, `status`, `meta`, `patrocinadores`, `recaudado`, `vote_up`, `vote_down`) VALUES
(8, 'fSUSyElmsxOt9kmu8elNSQjMKYi1', 'Probamos un nuevo proyecto', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna sem, viverra eu eros vel, tempor pellentesque risus. Quisque orci quam, venenatis porta quam non, pellentesque fermentum neque. Mauris in dui gravida, elementum odio at, tempus metus. Maecenas finibus mi erat, vel malesuada dui faucibus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac elit ac tortor pulvinar tincidunt. Aenean tincidunt elementum enim, non consequat ex porta ut. Quisque urna purus, molestie eu lacus quis, porta mollis est. ', 'Comida', 'https://firebasestorage.googleapis.com/v0/b/ideasbox-9d842.appspot.com/o/posters%2FProbamos%20un%20nuevo%20proyecto?alt=media&token=52574310-ed2f-4442-a165-4af1f00273dd', 'accepted', 1500, 0, 0, 0, 0),
(12, 'Liasd123adasd', 'Titulo aqui', 'Descripcion aqui', 'categoria aqui', 'poster aqui', 'pending', 200, 0, 0, 0, 0),
(14, 'fSUSyElmsxOt9kmu8elNSQjMKYi1', 'Proyecto de prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed orci sit amet mauris volutpat bibendum vitae ac risus. In vel turpis venenatis, laoreet justo non, accumsan enim. Suspendisse rutrum mi eu neque ultricies, eu accumsan magna consequat. Fusce iaculis ac ex id ultrices. Sed quis dolor iaculis, consectetur mauris sed, malesuada augue. Mauris iaculis scelerisque tellus, a imperdiet quam iaculis sed. Fusce tincidunt condimentum aliquam. Vivamus ut urna ut mauris pretium facilisis vitae sed massa. Aenean justo purus, varius et convallis eu, rhoncus at urna. Duis dignissim metus non purus aliquet euismod. ', 'Comida', 'https://firebasestorage.googleapis.com/v0/b/ideasbox-9d842.appspot.com/o/posters%2FProyecto%20de%20prueba?alt=media&token=be1c7856-c666-4f6e-8a20-8456d7d37ba6', 'accepted', 490, 0, 0, 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
