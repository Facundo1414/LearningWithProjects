import styles from "./emojiPicker.module.scss"

export default function EmojiButton({emoji, onClick}) {

    // cuando se hace click en el emoji deseado, este se visualiza en el 
    // input principal
    function handleClick() {
        onClick(emoji);
    }

    return (
        <button className={styles.emojiButton} onClick={handleClick}>{emoji.symbol}</button>
    )
}