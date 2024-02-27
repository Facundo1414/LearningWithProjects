import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store"
import styles from "./stylesPages.module.css";


export default function Index() {
    const store = useAppContext();

    return(
        <Layout>
            <div className={styles.IndexBooksContainer}>
                {store.items.map((item) => <Book key={item.id} item={item} />)}
            </div>
        </Layout>
    )
}