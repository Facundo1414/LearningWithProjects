import java.util.stream.Collectors;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        System.out.println(encode("din"));
        System.out.println(encode("recede"));
    }

    static String encode(String word) {
        word = word.toLowerCase(); // Convertir la palabra a minúsculas
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < word.length(); i++) {
            char currentChar = word.charAt(i);

            if (word.indexOf(currentChar) == word.lastIndexOf(currentChar)) {
                result.append("("); // Si el carácter aparece solo una vez, agregar "("
            } else {
                result.append(")"); // Si el carácter aparece más de una vez, agregar ")"
            }
        }

        return result.toString();
    }

    public class DuplicateEncoderV2 {
        static String encode(String word){
            word = word.toLowerCase();
            String result = "";
            for (int i = 0; i < word.length(); ++i) {
                char c = word.charAt(i);
                result += word.lastIndexOf(c) == word.indexOf(c) ? "(" : ")";
            }
            return result;
        }
    }



    public static class DuplicateEncoderv3 {
        static String encode(String word){
            return word.toLowerCase()
                    .chars()
                    .mapToObj(i -> String.valueOf((char)i))
                    .map(i -> word.toLowerCase().indexOf(i) == word.toLowerCase().lastIndexOf(i) ? "(" : ")")
                    .collect(Collectors.joining());
        }
    }
}