center=document.querySelector("body");
ram=document.getElementById("mejrsram");
fre=document.getElementById("mjrfre");
mjr=document.getElementById("mjr");
function getpc(){
    fetch("./PY_webScrapp/Cyberpuerta.json").then((res)=>res.json()).then((data)=>seejson(data));
}

function seejson(data){
    let i=0;
    let arrei;
    let presio;
    let hertz;
    let gbspace;
    for (let key in data.PCs) {
         for(comp in data.PCs[key]){
            elemlist=document.createElement("li");
            if(comp=="Memoria interna"){
                arrei=parseInt(Object.values(data.PCs[key])[i]);
                presio=Object.values(data.PCs[key])[0];
                presio=presio.replace(/[,.]/g,"");
                presio=presio.slice(0,-2);
                presio=presio.slice(1);
                presio=+presio;
                if(presio<6000 && arrei>=16){
                    elemlist.innerHTML=`${key}, Precio: $${presio}<br><br>`;
                    elemlist.classList.add("list-group-item");
                    link=document.createElement("a");
                    link.href=`https://www.cyberpuerta.mx/Computadoras/PC-s-de-Escritorio/${key}.html`
                    link.innerHTML="Link de Pc"
                    elemlist.appendChild(link);
                    ram.appendChild(elemlist);
                }
            }
            if(comp=="Frecuencia del procesador"){
                presio=Object.values(data.PCs[key])[0];
                presio=presio.replace(/[,.]/g,"");
                presio=presio.slice(0,-2);
                presio=presio.slice(1);
                presio=+presio;
                hertz=parseFloat(Object.values(data.PCs[key])[i]);
                if(presio<6000 && hertz>=3.6){
                    elemlist.innerHTML=`${key}  Precio: $${presio}<br><br>`
                    elemlist.classList.add("list-group-item");
                    link=document.createElement("a");
                    link.href=`https://www.cyberpuerta.mx/Computadoras/PC-s-de-Escritorio/${key}.html`
                    link.innerHTML="Link de Pc"
                    elemlist.appendChild(link);
                    fre.appendChild(elemlist);
                }
            }
            if(comp=="Capacidad total de almacenaje"){
                gbspace=Object.values(data.PCs[key])[i];
                gbspace=parseInt(gbspace);
            }

            i++;
         }
         if(arrei>15 && presio<7000 && hertz>3.7 && gbspace>499){
            elemlist.innerHTML=`${key} Precio: $${presio}<br><br>`
            elemlist.classList.add("list-group-item");
            link=document.createElement("a");
            link.href=`https://www.cyberpuerta.mx/Computadoras/PC-s-de-Escritorio/${key}.html`
            link.innerHTML="Link de Pc"
            elemlist.appendChild(link);
            mjr.appendChild(elemlist);
         }
         i=0;
    }
}

getpc();