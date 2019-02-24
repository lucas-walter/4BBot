---------------------------------------------------------------
---             3BBot Database Creation Script              ---
---     This is a self-contained Script that creates the    ---
---     Database Layout used by 3BBot.                      ---
---     This drops the old Table before re-creating it!     ---
---     For more information about setting up 3BBot         ---
---     consult readme.md                                   ---
---------------------------------------------------------------

CREATE DATABASE  IF NOT EXISTS `3bbot`;
USE `3bbot`;
DROP TABLE IF EXISTS `aufgaben`;
CREATE TABLE `aufgaben` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fach` varchar(45) DEFAULT NULL,
  `titel` varchar(100) DEFAULT NULL,
  `beschreibung` varchar(255) DEFAULT NULL,
  `bis` varchar(45) DEFAULT NULL,
  `vom` date DEFAULT NULL,
  `msgid` int(11) DEFAULT NULL,
  `bisdatum` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
DROP TABLE IF EXISTS `termine`;
CREATE TABLE `termine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fach` varchar(45) DEFAULT NULL,
  `titel` varchar(100) DEFAULT NULL,
  `beschreibung` varchar(255) DEFAULT NULL,
  `vom` date DEFAULT NULL,
  `am` varchar(45) DEFAULT NULL,
  `msgid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;