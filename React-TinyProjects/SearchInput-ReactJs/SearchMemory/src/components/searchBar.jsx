import { useState } from "react"
import Results from "./results";
import  styles  from "./styles.module.css";

export default function SearchBar({items, onItemSelected}) {

    const [query , setQuery] = useState("");
    const [results , setResults] = useState([]);

    function handleChange(e) {
        const value  = e.target.value;
        setQuery(value);

    }

    function handleResults(items) {
        setResults(items)
    }


    return (
        <div className={styles.SearchBarContainer}>
            {results && <div> Match Results: {results.length}.</div>}

            <input className={styles.styledInput} type="text" onChange={handleChange} value={query} />
            
            <Results 
            items={items} 
            onItemSelected={onItemSelected} 
            query={query} 
            onResultsCalculated={handleResults}></Results>
        </div>
    )
}