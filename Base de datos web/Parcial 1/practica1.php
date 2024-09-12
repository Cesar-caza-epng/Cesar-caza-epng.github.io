<?php

    $nombre = $_GET["name"];
    $edad = $_GET["age"];
    $respuestaLA =$_GET["laravel"];
    $respuestaOR =$_GET["oracle"];
    $color= $_GET["sobaqueada"];

    if($nombre=="miku" && $edad=="17" && $color=="#86cecb"){
        echo "<h1>MENSO MENSO MENSO</h1>";
    }
    else{
        echo "<h1>Nombre del Alumno: ".$nombre."</h1>";
        echo "<h2>Edad: ".$edad."</h2>";
        if($respuestaLA=="on" && $respuestaOR!="on"){
            echo "<h2>Respuesta a la pregunta 1:</h2>";
            echo "<h2>siceto</h2>";
        }elseif($respuestaOR=="on" && $respuestaLA!="on"){
            echo "<h2>Respuesta a la pregunta 1:</h2>";
            echo "<h2>erestonto</h2>";
        }
        if($respuestaOR=="on" && $respuestaLA=="on"){
            echo "<h2>Respuesta a la pregunta 1:</h2>";
            echo "<h2>no le sabes a nada la neta</h2>";
        }

        if($color=="#000000"){
            echo "<h2>tienes el sobaco NEEEGRO</h2>";
        }
    }



?>