import { useState } from "react"
import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";
import styles from "./stylesPages.module.css";

export default function Create() {
    console.log(styles);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");
    
    const store = useAppContext();
    const navigate = useNavigate();

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case 'title':
                setTitle(value)
                break;
        
            case 'author':
                setAuthor(value)
                break;
        
            case 'intro':
                setIntro(value)
                break;
                
            case 'completed':
                setCompleted(e.target.checked)
                break;

            case 'review':
                setReview(value)
                break;
        
            default:
                break;
        }
    }

    // usaremos la API de file reader para manipular archivos desde el navegador y luego guardarlos en setCover[]
    function handleOnChangeFile(e) {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function () {
            setCover(reader.result.toString());
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review 
        };

        // llamo a mi useContext para crear un nuevo libro o metodo POST y luego se reedirecciona a home
        store.createItem(newBook);
        navigate("/");
    }
    return (
        <Layout>
            <form onSubmit={handleSubmit} className={styles.createFormContainer} >
                <div className={styles.createContainer}>
                    <div className={styles.createTitle}>Title</div>
                    <input className={styles.createInput} type="text" name="title" onChange={handleChange} value={title}/>
                </div>
                <div className={styles.createContainer}>
                    <div className={styles.createTitle}>Author</div>
                    <input className={styles.createInput} type="text" name="author" onChange={handleChange} value={author}/>
                </div>
                <div className={styles.createContainer}>
                    <div className={styles.createTitle}>Cover</div>
                    <input className={styles.createInput} type="file" name="cover" onChange={handleOnChangeFile}/>
                    <div>{!!cover ? <img src = {cover} width="200" alt="preview"></img> : ""}</div>
                </div>
                <div>
                    <div className={styles.createTitle}>Introduction</div>
                    <input className={styles.createInput} type="text" name="intro" onChange={handleChange} value={intro}/>
                </div>
                <div className={styles.createContainer}>
                    <div className={styles.createTitle}>Completed</div>
                    <input type="checkbox" name="completed" onChange={handleChange} value={completed}/>
                </div>
                <div className={styles.createContainer}>
                    <div className={styles.createTitle}>Review</div>
                    <input className={styles.createInput} type="text" name="review" onChange={handleChange} value={review}/>
                </div>

                <button className={styles.btnStyle} type="submit" >Register book</button>
            </form>
        </Layout>
    )
}