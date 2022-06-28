const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () => Array(898).fill().map((_,index) =>fetch(getPokemonUrl(index + 1)).then(response => response.json())) 

const pokemonPromises = generatePokemonPromises()

const pokedex = () => {             
    
    Promise.all(pokemonPromises)
        .then(pokemons => {
            
            const lisPokemons = pokemons.reduce((accumulator, pokemon) =>{
                
              const types = pokemon.types.map(typeInfo => typeInfo.type.name)
               
                switch (pokemon.id){

                  case 1:
                    
                    accumulator += 
                    
                    ` <h4 class= "cardGeracao  "><b>1° Geração: Kanto</b></h4>`
                    accumulator += 
                  
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `

                  return accumulator

                  case 152:
                        
                    accumulator += 
                    
                    `<h4 class= "cardGeracao "><p>2° Geração: Jotho</h4>`
        
                    accumulator += 
                    
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `

                  return accumulator
                    
                  case 252:
                        
                    accumulator += 
                    
                    `<h4 class= "cardGeracao geracao "><p>3° Geração: Hoenn</h4> `

                    accumulator += 
                  
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `

                  return accumulator
                    
                  case 387:
                        
                    accumulator += 

                    ` <h4 class= "cardGeracao geracao "><p>4° Geração: Sinnoh</h4> `
        
                    accumulator += 
                    
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `

                  return accumulator
                    
                  case 494:
                        
                    accumulator += 
                    
                    `<h4 class= "cardGeracao geracao "><p>5° Geração: Unova</h4>`
        
                    accumulator += 
                  
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `

                  return accumulator
                    
                  case 650:
                        
                    accumulator += 
                    
                    `<h4 class= "cardGeracao geracao "><p>6° Geração: Kalos</h4>`
        
                    accumulator += 
                    
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `

                  return accumulator
                    
                  case 722:
                        
                    accumulator += 
                    
                    `<h4 class= "cardGeracao geracao "><p>7° Geração: Alola</h4>`
        
                    accumulator += 
                    
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `

                  return accumulator
                    
                  case 810:
                        
                    accumulator += 
                    
                    `<h4 class= "cardGeracao geracao "><p>8° Geração: Galar</h4>`
        
                    accumulator += 
                  
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `
                  return accumulator
                    
                  default:
                        
                    accumulator += 
                      
                    `
                    <li class="card ${types[0]}">
                    <img class="card-image " alt=/${pokemon.id}" src="PokemonsSprites/${pokemon.id}.png"</img>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">${types.join(" | ")}</p>
                    </li> 
                    `

                          return accumulator
                      
                }}, '')

            const ul = document.querySelector('[data-js = "pokedex"]')

            ul.innerHTML = lisPokemons
        })
        
}

pokedex();