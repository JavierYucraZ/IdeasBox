-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2021 a las 04:29:19
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
  `votos` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `uid`, `titulo`, `descripcion`, `categoria`, `poster`, `status`, `meta`, `patrocinadores`, `recaudado`, `votos`) VALUES
(8, 'fSUSyElmsxOt9kmu8elNSQjMKYi1', 'Probamos un nuevo proyecto', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna sem, viverra eu eros vel, tempor pellentesque risus. Quisque orci quam, venenatis porta quam non, pellentesque fermentum neque. Mauris in dui gravida, elementum odio at, tempus metus. Maecenas finibus mi erat, vel malesuada dui faucibus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac elit ac tortor pulvinar tincidunt. Aenean tincidunt elementum enim, non consequat ex porta ut. Quisque urna purus, molestie eu lacus quis, porta mollis est. ', 'Comida', 'https://firebasestorage.googleapis.com/v0/b/ideasbox-9d842.appspot.com/o/posters%2FProbamos%20un%20nuevo%20proyecto?alt=media&token=52574310-ed2f-4442-a165-4af1f00273dd', 'accepted', 1500, 5, 650, 1),
(14, 'fSUSyElmsxOt9kmu8elNSQjMKYi1', 'Proyecto de prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed orci sit amet mauris volutpat bibendum vitae ac risus. In vel turpis venenatis, laoreet justo non, accumsan enim. Suspendisse rutrum mi eu neque ultricies, eu accumsan magna consequat. Fusce iaculis ac ex id ultrices. Sed quis dolor iaculis, consectetur mauris sed, malesuada augue. Mauris iaculis scelerisque tellus, a imperdiet quam iaculis sed. Fusce tincidunt condimentum aliquam. Vivamus ut urna ut mauris pretium facilisis vitae sed massa. Aenean justo purus, varius et convallis eu, rhoncus at urna. Duis dignissim metus non purus aliquet euismod. ', 'Comida', 'https://firebasestorage.googleapis.com/v0/b/ideasbox-9d842.appspot.com/o/posters%2FProyecto%20de%20prueba?alt=media&token=be1c7856-c666-4f6e-8a20-8456d7d37ba6', 'accepted', 490, 0, 0, 2),
(15, 'fSUSyElmsxOt9kmu8elNSQjMKYi1', 'Proyecto de comida', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non placerat nisi. Donec malesuada rhoncus lacus ac faucibus. Aenean tristique mattis lacus, eu vehicula sapien ultrices non. Ut maximus tellus libero, quis sollicitudin mi porttitor eu. Cras facilisis, urna ut euismod cursus, nibh tortor pharetra mauris, sit amet vulputate augue est sit amet enim. In gravida congue diam quis tempus. Mauris commodo ac dui sit amet interdum. ', 'Comida', 'https://firebasestorage.googleapis.com/v0/b/ideasbox-9d842.appspot.com/o/posters%2FProyecto%20de%20comida?alt=media&token=c29b8954-484c-4a12-a8fc-b1be99aa5e55', 'accepted', 800, 1, 220, 4),
(16, 'e7ZsSXnUp2UuzlqAecBiupsSPSD3', 'Proyecto de Cine', 'Praesent id mollis metus. Donec mollis odio ac nisl mattis congue. Donec interdum eros orci, at fringilla neque euismod quis. Etiam risus eros, accumsan sit amet rutrum eget, placerat a quam. Nam ultrices risus dui, quis sodales augue pellentesque consectetur. Cras nunc risus, efficitur in aliquam et, maximus eu nibh. Aliquam non diam at nunc vehicula auctor. In hac habitasse platea dictumst. Proin tristique justo elit, eget feugiat eros bibendum eget. Etiam tortor orci, commodo ac elementum vitae, venenatis vitae est. In et felis nec mi faucibus suscipit ut semper ipsum. Aliquam maximus quam a ante porta, ut tincidunt orci tempor. Fusce ut leo commodo, fermentum tellus sed, suscipit erat.', 'Cine', 'https://firebasestorage.googleapis.com/v0/b/ideasbox-9d842.appspot.com/o/posters%2FProyecto%20de%20Cine?alt=media&token=4e33276e-63c6-4131-9008-f0800fc0328d', 'accepted', 1500, 4, 220, 0),
(18, 'fSUSyElmsxOt9kmu8elNSQjMKYi1', 'Proyecto de musica', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis ex eget felis pharetra egestas vehicula et metus. In ac placerat odio. Duis facilisis ac ex sit amet elementum. Cras blandit maximus justo ac commodo. Suspendisse pulvinar erat orci, at sollicitudin neque vulputate ut. Sed vehicula congue congue. Suspendisse et mauris quis nibh euismod tempus. Cras ornare malesuada mi non venenatis. Aliquam eget bibendum velit, non viverra mauris. Proin quis dolor a arcu laoreet porttitor ac at sem. Etiam consequat, mi eget consequat efficitur, metus lorem tincidunt enim, id congue nisl neque ut nunc. Duis vitae condimentum nisi, id lobortis nulla. Aliquam urna felis, feugiat dictum vestibulum dapibus, faucibus at odio. ', 'Musica', 'https://firebasestorage.googleapis.com/v0/b/ideasbox-9d842.appspot.com/o/posters%2FProyecto%20de%20musica?alt=media&token=46f4424e-0c1a-4569-9375-557809fc3576', 'accepted', 1900, 1, 160, 4);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
