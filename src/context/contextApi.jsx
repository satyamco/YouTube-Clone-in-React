import { useState, createContext, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";


export const Context = createContext();

export const AppContext = ({ children }) => {
    const [loding, setLoding] = useState(false)
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('new')


    useEffect(() => {
        fetchDataOnQuery(selectedCategory)
    }, [selectedCategory, setSelectedCategory]);

    const fetchDataOnQuery = (q) => {
        setLoding(true)
        fetchDataFromApi(`search/?q=${q}`).then(({ contents }) => {
            setData(contents);
            setLoding(false)
        })
    }

    return (
        <Context.Provider
            value={
                {
                    loding,
                    setLoding,
                    data,
                    setData,
                    setQuery,
                    selectedCategory,
                    setSelectedCategory
                }
            }>
            {children}
        </Context.Provider>

    )
}

