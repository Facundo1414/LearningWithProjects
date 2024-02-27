function spinWords(string){
    let copy = string.split(" ")

    for (let i = 0; i < copy.length; i++) {
        if (copy[i].length >= 5) {
            copy[i] = copy[i].split("").reduce((acc, char) => char + acc, "")
        }
    }
    
    return copy.join(" ");
}




console.log(spinWords("Hey fellow warriors"));

