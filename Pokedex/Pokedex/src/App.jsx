import React from "react"
import "./App.css"

export default function App() {
  const [pokemonData, setPokemonData] = React.useState(null)
  const [pokemonId, setPokemonId] = React.useState(1) // Single source of truth
  const [searchTerm, setSearchTerm] = React.useState("")
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setError(false)
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => {
        if (!res.ok) throw new Error("Non trouvé")
        return res.json()
      })
      .then(data => {
        setPokemonData(data)
        setSearchTerm("") 
      })
      .catch(err => {
        console.error(err)
        setError(true)
      })
  }, [pokemonId])

  function handleSearch(e) {
    e.preventDefault()
    const query = searchTerm.toLowerCase().trim()
    if (!query) return

    // We fetch the searched name just to find its ID, then jump our state to it!
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(res => {
        if (!res.ok) throw new Error("Pokémon non trouvé")
        return res.json()
      })
      .then(data => {
        setPokemonId(data.id)
      })
      .catch(() => {
        setError(true)
      })
  }

  return (
    <div className="pokedex-app">
      <h1>Pokédex National</h1>

      {/*  Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Nom en anglais ou ID du Pokémon..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">Rechercher</button>
      </form>

      {/*  Error Message */}
      {error && <p className="error-text"> Pokémon introuvable !</p>}

      {pokemonData && (
        <div className="pokemon-profile-card">
          <span className="pokemon-id"># {pokemonData.id}</span>
          <h3 className="pokemon-name">{pokemonData.name}</h3>
          
          <img 
            src={pokemonData.sprites.front_default} 
            alt={pokemonData.name} 
            className="pokemon-sprite"
          />

          <div className="pokemon-stats">
            <p><strong>Poids :</strong> {pokemonData.weight / 10} kg</p>
            <p><strong>Taille :</strong> {pokemonData.height / 10} m</p>
          </div>

          <div className="navigation-buttons">
            <button 
              onClick={() => setPokemonId(prev => prev - 1)} 
              disabled={pokemonId <= 1}
              className="nav-btn"
            >
              Précédent
            </button>

            <button 
              onClick={() => setPokemonId(prev => prev + 1)} 
              className="nav-btn"
            >
              Suivant 
            </button>
          </div>
        </div>
      )}
    </div>
  )
}