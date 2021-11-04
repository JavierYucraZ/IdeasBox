<?php 

include("./../config/conexion.php");
include("./../models/Proyecto.php");
$proyecto = new Proyecto();

$pendings = $proyecto -> getAllPending();
$accepted = $proyecto -> getAllAccepted();


?>