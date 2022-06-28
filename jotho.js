const getPokemonUrll = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const getPokemonUrl = ids => `https://pokeapi.co/api/v2/pokemon/${ids}`

const generatePokemonPromisess = () => Array(151).fill().map((_,index) =>fetch(getPokemonUrll(index + 152)).then(response => response.json())) 

const pokemonPromisess = generatePokemonPromisess()

const generatePokemonPromises = () => Array(151).fill().map((_,index) =>fetch(getPokemonUrl(index + 452)).then(response => response.json())) 

const pokemonPromises = generatePokemonPromises()

const pokedex = () => {             
    
    Promise.all(pokemonPromisess)
        .then(pokemons => {
            
            const listaPokemons = pokemons.reduce((accumulatorr, pokemon) =>{
                
              const types = pokemon.types.map(typeInfo => typeInfo.type.name)    
                    accumulatorr += 
                      
                        ` 
                        <li class="card ${types[0]}">
                        <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                        <p class="card-subtitle">${types.join(" | ")}</p>
                        </li> 
                        `

                    return accumulatorr
                      
                }, '')
                const ul = document.querySelector('[jotho-js = "pokedexjotho"]')

                ul.innerHTML = listaPokemons
           
        })
        
}
const pokedex2 = () => {             
    
    Promise.all(pokemonPromises)
        .then(pokemons => {
            
            const listaPokemons = pokemons.reduce((accumulator, pokemon) =>{
                
              const types = pokemon.types.map(typeInfo => typeInfo.type.name)    
                    accumulator += 
                      
                        ` 
                        <li class="card ${types[0]}">
                        <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                        <p class="card-subtitle">${types.join(" | ")}</p>
                        </li> 
                        `

                    return accumulator
                      
                }, '')

             const ul = document.querySelector('[jotho-js = "pokedexjotho"]')

            ul.innerHTML = listaPokemons
        })
       
}
pokedex();
pokedex2();


