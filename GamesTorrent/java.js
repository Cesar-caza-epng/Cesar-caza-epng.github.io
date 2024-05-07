table=document.getElementById("teibol");

function fetching(){
	fetch("WebScrappingGames/gamestorrentsgames.json").then((res)=>res.json()).then((data)=>getImgs(data));
}

function getImgs(data){
	let cont=0;
	for (let i = 1; i < data["imgs"].length; i) {
	cont=cont+1;
	tere=document.createElement("tr");
	tede=document.createElement("td");
	image=document.createElement("img");
	image.src=data["imgs"][i];
	image.classList.add("tableimg");
	tede.appendChild(image);
	tere.appendChild(tede);

	if(cont==5){
		table.appendChild(tere);
		cont=0;
	}
   }
}

fetching();