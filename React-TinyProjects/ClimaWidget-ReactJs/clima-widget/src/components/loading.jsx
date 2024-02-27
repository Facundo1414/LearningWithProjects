import styles from "./loading.module.css"

export default function Loading(params) {
    return(
        <div className={styles.loadingContainer}>
            <div className={styles.loader}>
                <div>

                </div>
            </div>
        </div>
    )
}