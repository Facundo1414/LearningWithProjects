import { useState } from "react"
import styles from './weatherForm.module.css'

export default function WeatherForm({onChangeCity}) {
    const [city,setCity] = useState ('');

    function handleOnChange (e) {
        const value = e.target.value
        if (value !== "") {
            setCity(value);
        }
    }
    function handleSubmit(e) {
        e.preventDefault()

        // para cada vez que se cambie la ciudad
        onChangeCity(city)
    }

    return (
        <form onSubmit={handleSubmit} className= {styles.container}>
            <input type="text" onChange={handleOnChange} className={styles.input} />
        </form>
    )
}