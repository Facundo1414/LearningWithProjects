import { useEffect, useMemo, useState } from "react"
import MarkedItem from "./markedItem";
import  styles  from "./styles.module.css";

export default function Results({items, onItemSelected, query, onResultsCalculated}) {

    const [results, setResults] = useState([]);
    // usaremos useMemo para indicarle a la app que solo actualice la busqueda cuando se requiera y no en cada render
    const filteredItems = useMemo( () => findMatch(items, query), [items, query]) 
    function findMatch(items, query) {
        // la busqueda se realiza si items o query devuelven una letra
        const res = items.filter( (i) => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
        })

        setResults(res)

        // retornamos el resultado para que sea guardado en memo
        return res;
    }

    //cada vez que  se actualice results, queremos averiguar cuantos resultados de 
    // busqueda hay 
    useEffect( ()=> {
        onResultsCalculated(results);}, [results])


    return (
        <div className={styles.resultsContainer}>
                {   
                    query !== "" ?
                    filteredItems.map((item) => 
                    <MarkedItem 
                    key={item.id} 
                    item={item} 
                    query={query} 
                    onClick={onItemSelected} />) : ""
                }
        </div>
    )
}