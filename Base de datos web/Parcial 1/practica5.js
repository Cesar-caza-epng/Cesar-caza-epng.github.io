let isPlaying=false;
const player=document.getElementById("playe");
function play(){
    isPlaying=true;
    document.getElementById("start").style.display= "none";
    document.getElementById("playe").style.display= "";
    document.getElementById("inst").style.display= "";
}

function check(event){
    if(isPlaying){
        let top = parseInt(player.style.top) || 0;
        let left = parseInt(player.style.left) || 0;
        if(event.key==="w"){
            player.style.top=top-25 + "px";
        }
        if(event.key==="a"){
            player.style.left=left-25 + "px";
        }
        if(event.key=="s"){
            player.style.top=top+25 + "px";
        }
        if(event.key=="d"){
            player.style.left=left+25 + "px";
        }
    }
}