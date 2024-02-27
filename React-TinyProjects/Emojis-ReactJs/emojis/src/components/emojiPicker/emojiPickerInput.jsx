import { useRef } from "react";
import EmojiPicker from "./emojiPicker";
import styles from "./emojiPicker.module.scss"


export default function EmojiPickerInput() {
    const refInput = useRef(null);
    return (
        <div>
            <input className={styles.inputMain} type="text" ref={refInput} />
            <EmojiPicker ref={refInput}> </EmojiPicker>
        </div>
    )
}