const poketext=document.getElementById("pokemon_details_space");
const pokeimage=document.getElementById("pokeimage");
const pokemonname=document.getElementById("Texttosumbit");
const pokebutton=document.getElementById("Button_request");
const pokename=document.getElementById("pokename");
const acordion=document.getElementById("accordionFlushExample");
const STATS=document.getElementById("STATS");



function Get_poke()
{
    const name=pokemonname.value.toLowerCase();
    poketext.style.visibility="visible";
    acordion.style.visibility="visible";
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then((res) =>res.json()).then((data) => paintpoke(data)).catch((error)=>{poketext.innerHTML="POKEMON NO ENCONTRADO"});
}

function paintpoke(pokemon){
    const typeslist=pokemon.types;
    altura=pokemon.height*10;
    weight=pokemon.weight/10;
    pokeimage.src=pokemon.sprites.front_default;
    if(pokemon.types.length==1){
        poketext.innerHTML=`Num en la pokedex: ${pokemon.id}<br>Altura en CM: ${altura}<br>Peso en kilogramos: ${weight}<br>Tipo: ${pokemon.types[0].type.name}`;
    }
    if(pokemon.types.length==2){
        poketext.innerHTML=`Num en la pokedex: ${pokemon.id}<br>Altura en CM: ${altura}<br>Peso en kilogramos: ${weight}<br>Tipos: ${pokemon.types[0].type.name} y ${pokemon.types[1].type.name}`;
    }
    if(pokemon.name=="vaporeon"){
        STATS.innerHTML=`${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}<br>
    ${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}<br>
    ${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}<br>
    ${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}<br>
    ${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}<br>
    ${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}<br><br><br>Sabias que en terminos...`
    pokename.innerHTML=`${pokemon.name}!`
    }
    else{
    STATS.innerHTML=`${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}<br>
    ${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}<br>
    ${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}<br>
    ${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}<br>
    ${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}<br>
    ${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}<br>`
    pokename.innerHTML=`${pokemon.name}!`
    }
}
pokebutton.addEventListener("click", Get_poke)

