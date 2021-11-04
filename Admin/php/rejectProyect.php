<?php 

include("./../../config/session.php");

include("./../../config/conexion.php");
include("./../../models/Proyecto.php");
$proyecto = new Proyecto();

$res = $proyecto -> rejectProyect($_GET['id']);
$_SESSION['notify'] = $res;
$_SESSION['icon'] = "info";
header("Location: ./../Pendientes.php");

?>