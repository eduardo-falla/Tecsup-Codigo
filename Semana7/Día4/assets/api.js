(() => {
    // Define the relevant variables
    const buttonRefresh = document.getElementById('miboton');
    const panel = document.getElementById("show-card");
    const foto= document.getElementById("mifoto")
    


    // Define the relevant functions
    getPokemonList = async () => {
        let varAleato= Math.round(Math.random()*100);
        //const url = apiRoot + '/pokemon?limit=' + limit;
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${varAleato}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }

    // Attach the functions to the DOM elements
    buttonRefresh.addEventListener('click', async () => {
        
        const data= await getPokemonList()
        console.log(data.name);
        panel.innerHTML= await data.name;
        foto.src=data.sprites.front_default;

    });
})();