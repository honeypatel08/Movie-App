// provide global state and some hellper func use in multip place in the project 

import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// anywhwere in the werbapplication can access the state 
/*
    children -> reserved prop. 
    you write conmponet and childeren is anything thst inside of the component thst rendered
*/
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    // local storage == allow us to store values directly within browser 
    useEffect(() => {
        const storedFav = localStorage.getItem("favorites")

        // list in json string convert into JS obejct and save/set as fav 
        if(storedFav) setFavorites(JSON.parse(storedFav)) 
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        // all and new 
        setFavorites(prev => [...prev, movie])  
    }

    const removeToFavorites = (movieId) => {
        // filler out the movie that i matches 
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))  
    }

     const isFavorites = (movieId) => {
        // filler out the movie that i matches 
        return favorites.some(movie => movie.id === movieId) 
    }

    const value = {
        favorites,
        addToFavorites,
        removeToFavorites, 
        isFavorites
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}