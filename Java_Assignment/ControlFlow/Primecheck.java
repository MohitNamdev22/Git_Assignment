package Java_Assignment.ControlFlow;

import java.util.Scanner;

public class Primecheck {
     public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = scanner.nextInt();
        boolean check = true;

        if (n <= 1) {
            check = false;
        } else {
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) {
                    check = false; 
                    break;
                }
            }
        }

        if (check) {
            System.out.println(n + " is a prime number.");
        } else {
            System.out.println(n + " is not a prime number.");
        }
        scanner.close();
    }
}
