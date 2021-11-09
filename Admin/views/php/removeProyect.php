<?php 

include("./../../config/session.php");

include("./../../config/conexion.php");
include("./../../models/Proyecto.php");
$proyecto = new Proyecto();

$res = $proyecto -> deleteProyect($_GET['id']);
$_SESSION['notify'] = $res;
$_SESSION['icon'] = "error";
header("Location: ./../Aceptados.php");

?>