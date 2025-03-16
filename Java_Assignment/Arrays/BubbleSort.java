package Java_Assignment.Arrays;

public class BubbleSort {

    public static void main(String[] args) {
        int[] num = { -7, 2, 9, -1, 8, 6, 0 };

        System.out.println("Before sorting:");
        printArray(num);

        for (int i = 0; i < num.length - 1; i++) {
            for (int j = 0; j < num.length - i - 1; j++) {
                if (num[j] > num[j + 1]) {
                    int temp = num[j];
                    num[j] = num[j + 1];
                    num[j + 1] = temp;
                }
            }
        }

        System.out.println("After Sorting:");
        printArray(num);
    }

    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
    
}
