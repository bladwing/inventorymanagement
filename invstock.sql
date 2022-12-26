-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2022 at 11:44 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invstock`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `company` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `companycode` int(11) NOT NULL,
  `telephone` int(11) NOT NULL,
  `address` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `company`, `companycode`, `telephone`, `address`, `createdAt`, `updatedAt`) VALUES
(28, 'Buyer Company 1', 405405406, 555606608, 'Tskneti hw #2', '2022-11-23', '2022-12-26 15:14:16.000000'),
(27, 'Buyer Company 2', 404404404, 555404404, 'Washington str. 10', '2022-11-23', '2022-11-23 19:03:31.595525');

-- --------------------------------------------------------

--
-- Table structure for table `infos`
--

CREATE TABLE `infos` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `code` int(20) NOT NULL,
  `account` varchar(25) NOT NULL,
  `address` varchar(20) NOT NULL,
  `telephone` int(10) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `infos`
--

INSERT INTO `infos` (`id`, `name`, `code`, `account`, `address`, `telephone`, `createdAt`, `updatedAt`) VALUES
(1, '', 0, '', '', 0, '2022-12-20', '2022-12-26 22:43:40');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `ordcompanyname` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `ordproductname` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `ordproductpieces` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `ordcompanyname`, `ordproductname`, `ordproductpieces`, `createdAt`, `updatedAt`) VALUES
(6, 'Buyer Company 2', 'Blade II (Blu-ray Di', 10, '2022-12-20', '2022-12-20 21:06:53'),
(7, 'Buyer Company 2', 'Adapter Cable SATA IDE to', 2, '2022-12-20', '2022-12-20 21:43:18');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `sku` text NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `price` varchar(10) NOT NULL,
  `buyfromcompany` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `approxprice` tinyint(4) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `pieces` int(11) DEFAULT NULL,
  `document` tinyint(4) DEFAULT NULL,
  `sold` tinyint(4) DEFAULT NULL,
  `soldtocompany` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `soldprice` decimal(10,0) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `sku`, `name`, `price`, `buyfromcompany`, `approxprice`, `length`, `pieces`, `document`, `sold`, `soldtocompany`, `soldprice`, `deleted`, `createdAt`, `updatedAt`) VALUES
(753, 'xx0363', 'SSD disk Kingston SA400S37/480G 500MB/s 450MB/s', '100', 'Shop', NULL, NULL, 1, 10, 10, '', NULL, 0, '2022-11-23 18:43:18', '2022-11-23 18:43:18'),
(754, '0431-01', 'Adapter Cable SATA IDE to USB 3.0 External Hard', '15', 'Shop #2', NULL, NULL, 10, 10, 10, '', NULL, 0, '2022-11-23 18:44:17', '2022-11-23 18:44:34'),
(755, 'xx0367', 'Blade II (Blu-ray Disc, 2009, Canadian)', '17', 'Ebay', NULL, NULL, 1, 10, 0, 'Buyer Company 1', '23', 0, '2022-11-23 19:17:22', '2022-11-29 14:29:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `lastname` text NOT NULL,
  `pwd` text NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `pwd`, `updatedAt`, `createdAt`) VALUES
(4, 'Admin', 'admin', '123456', '2022-11-21 22:01:55', '2022-11-07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `infos`
--
ALTER TABLE `infos`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `infos`
--
ALTER TABLE `infos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=758;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
