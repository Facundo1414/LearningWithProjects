function toCamelCase(str){
  
    let stringCamelCase = ''

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (element == "-" || element == "_") {
            stringCamelCase += str.charAt(i+1).toUpperCase();
            i++;   
        }
        else{
            stringCamelCase += element
        }
    }

    return stringCamelCase
  

  }


console.log(toCamelCase("soy-jose_alvarez"));
