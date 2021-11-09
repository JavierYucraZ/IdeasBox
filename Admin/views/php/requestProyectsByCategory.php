<?php 

include("./../config/conexion.php");
include("./../models/Proyecto.php");
$proyecto = new Proyecto();

$allByCategory = $proyecto -> getAllByCategory($_GET['c']);



?>