center=document.querySelector("body");


function getpc(){
    fetch("./PY_webScrapp/Cyberpuerta.json").then((res)=>res.json()).then((data)=>seejson(data));
}

function seejson(data){
    for (let key in data.PCs) {
        h1=document.createElement("h1");
        h1.innerHTML=`${key}`
        center.appendChild(h1);
        lista=document.createElement("ul");
         for(comp in data.PCs[key]){
            elemlist=document.createElement("li");
            elemlist.innerHTML=`${comp}     ${data.PCs[key][comp]}`
            lista.appendChild(elemlist);
         }
        center.appendChild(lista);
    }
}

getpc();