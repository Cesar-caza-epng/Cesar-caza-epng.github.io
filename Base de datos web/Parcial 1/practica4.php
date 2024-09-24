<?php
    $num_pre=10;
    $aciertos = 0;
    $preguntas=[
        "¿Como se dice Rápido en inglés?",
        " i was (eat - past)",
        "Selecciona los 2 que son verdaderos",
        " yo pierre you wanna 
(coming - present simple) out here?",
        " yo dog can i get some ice cream?
ye only a
(a spoon that is full)",
        "which chipmunk from alvin and the chipmunks is the best?",
        "which character of los polinesios is the best?",
        "the sexual orientation:",
        "which of the following is the coolest?",
        "",];
    $nombre = $_POST["name"];
    $count=0;
    $pregunta1 = $_POST["pregunta1"];
    $pregunta2 = $_POST["pregunta2"];
    $pregunta3 = $_POST["pregunta3"];
    $pregunta4 = $_POST["pregunta4"];
    $pregunta5 = $_POST["pregunta5"];
    $pregunta6 = $_POST["pregunta6"];
    $pregunta7 = $_POST["pregunta7"];
    $pregunta8 = $_POST["pregunta8"];
    $pregunta9 = $_POST["pregunta9"];
    $pregunta10 = $_POST["pregunta10"];

    echo "<h3>Buen trabajo ".$nombre."!!!</h3>";

    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if($pregunta1 == "fast"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>".$pregunta1." es la correcta!</h3><hr>";
    } else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>".$pregunta1." es la incorrecta!</h3><hr>";
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if(strtoupper($pregunta2) == "EATING"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>".$pregunta2." es la correcta!</h3><hr>";
    }else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>".$pregunta2." es incorrecta, la correcta es: eating</h3><hr>";
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    $p3_respuestas_correctas = 0;
    if(count($pregunta3) == 2){
        for($i=0; $i<count($pregunta3); $i++){
            if($pregunta3[$i] == "a2" || $pregunta3[$i] == "a3"){
                $p3_respuestas_correctas ++;
            }
        }
        if($p3_respuestas_correctas == 2){
            $aciertos++;
            echo "<img src='imgs/good.png' alt='' width='150vw'>";

            echo "<h3>La segunda y tercera están correctas!</h3><hr>";
        }else{
            echo "<img src='imgs/bafd.png' width='150vw'>";
            echo "<h3>Las correctas eran la 2da y la 3ra</h3><hr>";
        }
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if(strtoupper($pregunta4) == "COME"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>come es la respuesta correcta!</h3><hr>";
    }else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>".$pregunta4." no es la respuesta correcta, era: come</h3><hr>";
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if(strtoupper($pregunta5) == "SPOONFUL" || strtoupper($pregunta5) == "SPOONFULL" || strtoupper($pregunta5) == "SPOON FULL"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>spoonful es la respuesta correcta!</h3><hr>";
    }else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>".$pregunta5." no es la respuesta correcta, era: spoonful</h3><hr>";
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if($pregunta6 == "a3"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>theodoro es la respuesta correcta!</h3><hr>";
    }else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>no es la respuesta correcta, era: theodoro!!!!!!!</h3><hr>";
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if($pregunta7 =="a2"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>RAFAAA es la respuesta correcta!</h3><hr>";
    }else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>no es la respuesta correcta, era: RAFA!!!!!!!</h3><hr>";
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if($pregunta8 =="a1"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>En efecto SON GAY!</h3><hr>";
    }else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>no es la respuesta correcta, era: GAY!!!!!!!</h3><hr>";
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if($pregunta9 =="a1"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>siiiii</h3><hr>";
    }else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>no es la respuesta correcta, era: YOOOOO!!!!!!!</h3><hr>";
    }
    echo "<h3>Pregunta: ".$preguntas[$count]."</h3>";
    $count++;
    if($pregunta10 =="a1"){
        $aciertos++;
        echo "<img src='imgs/good.png' alt='' width='150vw'>";
        echo "<h3>SI ES EL MENION!!!!</h3><hr>";
    }else{
        echo "<img src='imgs/bafd.png' width='150vw'>";
        echo "<h3>no es la respuesta correcta, era: ye!!!!!!!</h3><hr>";
    }

    if($aciertos!=0){
        echo "CALIFICACIÓN FINAl = " . (100/$num_pre)*$aciertos . "%";
    }else{
        echo "CALIFICACIÓN FINAl = 0%  no manches";
    }
?>