import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = ()=>{
  const APP_ID = '0cdd289d'
  const APP_KEY = 'b84de0c2f9184cc17cac7ee36e5235a6'
  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('chicken')

  useEffect(()=>{
    getRecipes()
    console.log('effect has run')
  },[query])

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_KEY}&app_key=${APP_KEY}`)
    const data =  await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
                <input className="search-form" type="text" value={search} onChange={updateSearch} />
                <button  className="search-button" type="submit">search</button>
        </form>
        <div className="recipes">
              {recipes.map(recipe=>(
                  <Recipe 
                    key={recipe.recipe.label} 
                    title={recipe.recipe.label} 
                    calories={recipe.recipe.calories} 
                    image={recipe.recipe.image} 
                    ingredients={recipe.recipe.ingredients}
                  
                  />
              ))}
        </div>

    </div>
  )
}

export default App;
