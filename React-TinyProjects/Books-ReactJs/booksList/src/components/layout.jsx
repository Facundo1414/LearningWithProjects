import NavBar from "./navbar";
import  styles  from "./styleComponents.module.css";

export default function Layout({children}) {

    return(
        <div >
            <NavBar></NavBar>
            <div className={styles.layOutcontainer}>{children}</div>
        </div>
    )
}