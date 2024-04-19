center=document.querySelector("body");
ram=document.getElementById("mejrsram");
fre=document.getElementById("mjrfre");

function getpc(){
    fetch("./PY_webScrapp/Cyberpuerta.json").then((res)=>res.json()).then((data)=>seejson(data));
}

function seejson(data){
    let i=0;
    for (let key in data.PCs) {
        h1=document.createElement("h1");
        h1.innerHTML=`${key}`
        center.appendChild(h1);
        lista=document.createElement("ul");
         for(comp in data.PCs[key]){
            elemlist=document.createElement("li");
            elemlist.innerHTML=`${comp}     ${data.PCs[key][comp]}`
            lista.appendChild(elemlist);
            if(comp=="Memoria interna"){
                let arrei=Object.values(data.PCs[key])[i].split(" ");
                let presio=Object.values(data.PCs[key])[0];
                presio=presio.replace(/[,.]/g,"");
                presio=presio.slice(0,-2);
                presio=presio.slice(1);
                presio=+presio;
                if(presio<6000 && arrei[0]==16){
                    elemlist.innerHTML=`${key}, Precio: $${presio}`
                    ram.appendChild(elemlist);
                }
            }
            if(comp=="Frecuencia del procesador"){
                presio=Object.values(data.PCs[key])[0];
                presio=presio.replace(/[,.]/g,"");
                presio=presio.slice(0,-2);
                presio=presio.slice(1);
                presio=+presio;
                let hertz=parseFloat(Object.values(data.PCs[key])[i]);
                if(presio<6000 && hertz>3.6){
                    elemlist.innerHTML=`${key}  Precio: $${presio}`
                    fre.appendChild(elemlist);
                }
            }
            i++;
         }
         i=0;
        center.appendChild(lista);
    }
}

getpc();