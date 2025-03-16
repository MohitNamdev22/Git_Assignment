package Java_Assignment.Basics;

import java.util.Scanner;

public class FibonacciSeries {
     public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number of terms in sequence: ");
        int limit = scanner.nextInt();

        int a = 0, b = 1;
        System.out.print("Fibonacci sequence up to " + limit + ": ");
        while (a <= limit) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        scanner.close();
    }
}
