import {Link} from "react-router-dom"
import  styles  from "./styleComponents.module.css";

export default function Book({item}) {
    return (
        <div className={styles.bookContainerStyle}>
            <Link className={styles.bookInfoStyle}  to= {`/view/${item.id}`} >
            <img src={item.cover} width="200" alt="cover" />
            <div>{item.title}</div>
            </Link>
        </div>
    )
}