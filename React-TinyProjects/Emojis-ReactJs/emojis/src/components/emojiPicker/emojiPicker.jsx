import { forwardRef, useEffect, useRef, useState } from "react"
import { data as emojiList} from "./data";
import EmojiSearch from "./emojiSearch";
import EmojiButton from "./emojiButton";
import styles from "./emojiPicker.module.scss"

export function EmojiPicker(props, inputRef) {

    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList);
    const containterRef = useRef(null);

    // cerrar ventana de emojis si se clickea fuera de la pantalla
    useEffect(() => {
        window.addEventListener('click', e => {
            if (!containterRef.current.contains(e.target)) {
                setIsOpen(false);
                setEmojis(emojiList);
            }
        })
    }, [])

    // buscaremos si existe un emoji que coincida con la info que se paso por
    // el input
    function handleSearch(e) {
        const query = e;
        if (!!query) {
            const search = emojiList.filter((emoji) => {
                return ( 
                emoji.name.toLowerCase().includes(query) || 
                emoji.keywords.toLowerCase().includes(query)
                )
                

            });
            setEmojis(search);
        }else{
            setEmojis(emojiList);
        }
    }

    function handleClickOpen() {
        setIsOpen(!isOpen);
    }

    // aca se usa UseRef para insertar en emoji en nuestro input con texto
    function handleOnClickEmoji(emoji) {
        const cursorPosition = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prevText = text.slice(0, cursorPosition);
        const nextText = text.slice(cursorPosition);

        inputRef.current.value = prevText + emoji.symbol + nextText;
        inputRef.current.selectionStart = cursorPosition + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length;
        inputRef.current.focus();
    }

    // Class Return
    return (
        <div ref={containterRef} className={styles.inputContainer}>
            <button onClick={handleClickOpen} className={styles.emojiPickerButton}>😋</button>

            {isOpen ?( 
            <div className={styles.emojiPickerContainer}>
                <EmojiSearch onSearch = {handleSearch}/>
                <div className={styles.emojiList}>
                    {emojis.map
                    ( (emoji) => (
                    <EmojiButton 
                    key={emoji.symbol} 
                    emoji={emoji} 
                    onClick={handleOnClickEmoji}
                    />
                    ))}
                </div>
            </div>
            ) : ("")}
        </div>
    )
}



export default forwardRef(EmojiPicker);