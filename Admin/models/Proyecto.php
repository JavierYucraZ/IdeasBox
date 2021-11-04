<?php

class Proyecto extends Conexion{
    public function getAll(){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "SELECT * FROM proyectos";
        $sql = $conexion -> prepare($sql);
        $sql -> execute();
        $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        return $resultado;
    }

    public function getAllByCategory($category){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "SELECT * FROM proyectos WHERE categoria = :category";
        $sql = $conexion -> prepare($sql);
        $sql -> bindParam(":category",$category);
        $sql -> execute();
        $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        return $resultado;
    }

    public function getAllPending(){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "SELECT * FROM proyectos WHERE status = 'pending'";
        $sql = $conexion -> prepare($sql);
        $sql -> execute();
        $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        return $resultado;
    }

    public function getAllAccepted(){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "SELECT * FROM proyectos WHERE status = 'accepted'";
        $sql = $conexion -> prepare($sql);
        $sql -> execute();
        $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        return $resultado;
    }

    public function getOneByID($id){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "SELECT * FROM proyectos WHERE id = :id";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":id",$id);
        $sql -> execute();
        $resultado = $sql -> fetch(PDO::FETCH_ASSOC);
        return $resultado;
    }

    public function getAllByUser($uid){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "SELECT * FROM proyectos WHERE uid = :uid";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":uid",$uid);
        $sql -> execute();
        $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        return $resultado;
    }

    public function voteUp($id){
        $conexion = parent::Conexion();
        parent::set_names();
        
        $sql = $conexion -> prepare("SELECT vote_up FROM proyectos WHERE id = :id");
        $sql -> bindValue(":id",$id);
        $sql -> execute();
        $vote_up = $sql -> fetch(PDO::FETCH_ASSOC);
        $vote_up = $vote_up['vote_up'] + 1;

        $sql = "UPDATE proyectos SET vote_up = :vote_up WHERE id = :id";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":vote_up",$vote_up);
        $sql -> bindValue(":id",$id);
        $sql -> execute();
        return "Like realizado";
    }

    public function voteDown($id){
        $conexion = parent::Conexion();
        parent::set_names();
        
        $sql = $conexion -> prepare("SELECT vote_down FROM proyectos WHERE id = :id");
        $vote_down = $sql -> fetch(PDO::FETCH_ASSOC);
        $vote_down = $vote_down['vote_down'] + 1;

        $sql = "UPDATE proyectos SET vote_down = :vote_down WHERE id = :id";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":vote_down",$vote_down);
        $sql -> bindValue(":id",$id);
        $sql -> execute();
        return "Dislike realizado";
    }

    public function insertOne($uid, $titulo, $descripcion, $categoria, $meta, $poster){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "INSERT INTO 
        proyectos (uid, titulo, descripcion, categoria, meta, poster) 
        VALUES 
        (:uid, :titulo, :descripcion, :categoria, :meta, :poster)";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":uid",$uid);
        $sql -> bindValue(":titulo",$titulo);
        $sql -> bindValue(":descripcion",$descripcion);
        $sql -> bindValue(":categoria",$categoria);
        $sql -> bindValue(":meta",$meta);
        $sql -> bindValue(":poster",$poster);
        $sql -> execute();
        return "Insertado correctamente";
    }


    public function updateOne($id, $titulo, $descripcion, $categoria, $meta, $poster){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "UPDATE proyectos 
        SET 
        titulo = :titulo,
        descripcion = :descripcion,
        meta = :meta,
        poster = :poster,
        categoria = :categoria
        WHERE id = :id";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":titulo",$titulo);
        $sql -> bindValue(":descripcion",$descripcion);
        $sql -> bindValue(":meta",$meta);
        $sql -> bindValue(":poster",$poster);
        $sql -> bindValue(":categoria",$categoria);
        $sql -> bindValue(":id",$id);
        $sql -> execute();
        return "Actualizado correctamente";
    }

    public function confirmProyect($id){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "UPDATE proyectos 
        SET 
        status = 'accepted'
        WHERE id = :id";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":id",$id);
        $sql -> execute();
        return "Proyecto aceptado";
    }

    public function rejectProyect($id){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "UPDATE proyectos 
        SET 
        status = 'rejected'
        WHERE id = :id";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":id",$id);
        $sql -> execute();
        return "Proyecto rechazado";
    }


    public function deleteProyect($id){
        $conexion = parent::Conexion();
        parent::set_names();
        $sql = "DELETE FROM proyectos WHERE id = :id";
        $sql = $conexion -> prepare($sql);
        $sql -> bindValue(":id",$id);
        $sql -> execute();
        return "Eliminado correctamente";
    }
}


?>