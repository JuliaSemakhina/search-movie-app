import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const apiKey = 'b9ef5e50';
const AppContext = React.createContext();

const getLocalStorage = () => {
    let favorites = localStorage.getItem('Fav');
    if (favorites == null) return []
    return JSON.parse(favorites);
};

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("sea");
    const [movies, setMovies] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [favorites, setFavorites] = useState(getLocalStorage());
    const [selectedItem, setSelectedItem] = useState(null);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const getMovies = useCallback(async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}&page=1`);
            const data = await response.json();
            setMovies(data.Search);
            setLoading(false);
        }
        catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        getMovies();
    }, [searchTerm, getMovies]);



    return <AppContext.Provider value={{
        loading,
        setLoading,
        movies,
        setMovies,
        setSearchTerm,
        getMovies,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        favorites,
        setFavorites,
        selectedItem,
        setSelectedItem,
        setIsSidebarOpen
    }}
    >
        {children}
    </AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }