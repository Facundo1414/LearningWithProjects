import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class Kata {

    public static int[] arrayDiff(int[] a, int[] b) {
        // Your code here
        ArrayList c = new ArrayList();
        for (int i = 0; i < a.length; i++) {
            for (int k : b) {
                if (!(a[i] - k == 0)) {
                    c.add(a[i]);
                }
            }
        }
        return c.;
    }



    public static void main(String[] args) {
        int[] resultado = arrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2});
        System.out.println(Arrays.toString(resultado));
    }
}


 //   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
  //      It should remove all values from list a which are present in list b keeping their order.
     //   Kata.arrayDiff(new int[] {1, 2}, new int[] {1}) => new int[] {2}