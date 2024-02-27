import { Link } from "react-router-dom";
import  styles  from "./styleComponents.module.css";

export default function NavBar() {



    return (
        <div className={styles.navContainer} >
            <Link className={styles.navBarLink} to="/">Home</Link>
            <Link className={styles.navBarLink} to="/create">Create</Link>
        </div>
    )
}