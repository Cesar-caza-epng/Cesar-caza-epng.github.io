doc=document;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3cb60a1353msh0e3e23332d4e034p1a674bjsne351ed982157',
		'X-RapidAPI-Host': 'steam-api7.p.rapidapi.com'
	}
};


function fetchiar(){
    fetch("https://steam-api7.p.rapidapi.com/name/", options).then((res)=>res.json()).then((data)=>getName(data));
}

function getName(data){
    console.log(data);
}

fetchiar();