import { useMemo } from "react";
import  styles  from "./styles.module.css";

export default function MarkedItem({item, query, onClick}) {


    const {leftText, centerText, rightText} = useMemo( () => getPositions(item, query), [item,query])

    function getPositions(item,query) {
        const index = item.title.toLowerCase().indexOf(query);
        const leftText = item.title.slice(0,index);
        const rightText = item.title.slice(index + query.length);
        const centerText = item.title.slice(index, index + query.length);

        return{
            leftText,
            centerText,
            rightText
        }
    }

    function handleClick() {
        onClick(item);
    }

    return (
        <a onClick={handleClick} href="#" className={styles.markeditem} >
            {leftText}
            <span className={styles.spanMarkerItem}>{centerText}</span>
            {rightText}
        </a>
    )
}