$(document).ready( function(){
    alert("kill yourself");

    $("#but").click(function(){
        var name = $("#nombre").val();
        alert(name);
    });

    $("#texto").click(function(){
        $("#texto").css("display", "inherit").fadeOut(200);
    });
});

