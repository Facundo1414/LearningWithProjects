import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";
import styles from "./stylesPages.module.css";


export default function View() {

    const [item, setItem] = useState(null)
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const book = store.getItem(params.bookId)
        setItem(book);
    }, [])

    if (!item) {
        return <Layout>item not found</Layout>
    }

    return(
        <Layout >
            <div className={styles.itemsContainerStyles}>
                <div>
                    <div>{item?.cover? <img src={item.cover} width="400"></img> : ""}</div>
                </div>
                <div className={styles.itemsInfo}>
                    <h2>{item?.title}</h2>
                    <div>
                        <h3 className={styles.itemsInfoH3}>Author</h3>
                        {item?.author}
                    </div>
                    <div >
                        <h3 className={styles.itemsInfoH3}>Introduction</h3>
                        {item?.intro}</div>
                    <div>
                        {item?.completed ? 'Readed' : "To Read"}</div>
                    <div>
                        <h3 className={styles.itemsInfoH3}>Review</h3>
                        {item?.review}</div>
                </div>
            </div>
        </Layout>
    )
}