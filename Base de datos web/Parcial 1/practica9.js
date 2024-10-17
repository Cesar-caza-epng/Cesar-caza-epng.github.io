$(document).ready(function(){
    let arr= new Array(54).fill(false);
        var c =true;
        var cont=0;
        while(cont<16){
            console.log("SEMETIO");
            var n = Math.floor(Math.random()*54) + 1;
            arr[cont]=n;
            for (let i = 0; i < cont; i++) {
                if(arr[i]==n){
                    n= Math.floor(Math.random()*54) + 1;
                    break;
                }
            }
            console.log(arr);
            $("#disp").append("<img src='loteria/"+n+".jpg' alt=''>");
            cont++;
        }
});