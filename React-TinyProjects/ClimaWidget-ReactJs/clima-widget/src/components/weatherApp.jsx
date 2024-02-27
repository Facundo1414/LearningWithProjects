import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from "./weatherApp.module.css"
import Loading from "./loading";

export default function WeatherApp(params) { 

    // objeto para guardar la respuesta de la solicitud http
    const [weather, setWeather] = useState(null);

    // cargar info por primera vez
    useEffect(() => {
        loadInfo();
    }, []);

    // modificar title de la pagina cada vez que cambia de ciudad
    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])


    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    // solicitud para obtener los datos, london por default
    async function loadInfo(city = 'london') {
        try{

            const request = await fetch(`${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`);
    
                
            const json = await request.json();

            setWeather(json)
            console.log(weather);

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className= {styles.wheatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather?<WeatherMainInfo weather={weather}/> : <Loading/>}
            
        </div>
    )
}