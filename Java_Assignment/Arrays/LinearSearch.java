package Java_Assignment.Arrays;

public class LinearSearch {
    
    public static void main(String[] args) {
        int[] num = { 1, 4, 7, 2, 9, 5, 3 };
        int key = 5;
        int index = -1;

        for (int i = 0; i < num.length; i++) {
            if (num[i] == key) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found");
        }
    }
}
