<?php

require_once("../config/conexion.php");
require_once("../models/Proyecto.php");
require_once("../config/headers.php");

$proyecto = new Proyecto();
$body = json_decode(file_get_contents("php://input"),true);

switch ($_GET['service']) {
    case 'getAll':
        $result = $proyecto -> getAll();
        echo json_encode($result);
        break;
    case "getAllByCategory":
        $result = $proyecto -> getAllByCategory($body['category']);
        echo json_encode($result);
        break;
    case 'getAllPending':
        $result = $proyecto -> getAllPending();
        echo json_encode($result);
        break;
    case 'getAllAccepted':
        $result = $proyecto -> getAllAccepted();
        echo json_encode($result);
        break;
    case 'getOneByID':
        $result = $proyecto -> getOneByID($body['id']);
        echo json_encode($result);
        break;
    case 'getAllByUser':
        $result = $proyecto -> getAllByUser($body['uid']);
        echo json_encode($result);
        break;
    case 'insertOne':
        $result = $proyecto -> insertOne(
            $body['uid'],
            $body['title'],
            $body["description"],
            $body['category'],
            $body['meta'],
            $body['poster']);
        echo json_encode($result);
        break;
    case "vote_up":
        $result = $proyecto -> voteUp($body['id']);
        echo json_encode($result);
        break;
    case "vote_down":
        $result = $proyecto -> voteDown($body['id']);
        echo json_encode($result);
        break;
    case 'updateOne':
        $result = $proyecto -> updateOne(
            $body['id'],
            $body['titulo'],
            $body["descripcion"],
            $body['categoria'],
            $body['meta'],
            $body['poster']);
        echo json_encode($result);
        break;
    case 'confirmProyect':
        $result = $proyecto -> confirmProyect($body['id']);
        echo json_encode($result);
        break;
    case 'rejectProyect':
        $result = $proyecto -> rejectProyect($body['id']);
        echo json_encode($result);
        break;
    case 'deleteOne':
        $result = $proyecto -> deleteProyect($body['id']);
        echo json_encode($result);
        break;
}



?>