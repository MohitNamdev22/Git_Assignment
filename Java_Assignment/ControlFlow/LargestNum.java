package Java_Assignment.ControlFlow;

import java.util.Scanner;

public class LargestNum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int n1 = scanner.nextInt();
        System.out.print("Enter the second number: ");
        int n2 = scanner.nextInt();
        System.out.print("Enter the third number: ");
        int n3 = scanner.nextInt();

        int largest;

        if (n1 >= n2 && n1 >= n3) {
            largest = n1;
            
        } else if (n2 >= n1 && n2 >= n3) {
            largest = n2;
        } else {
            largest = n3;
        }

        System.out.println("The largest number is: " + largest);
        scanner.close();
    }
    
}
