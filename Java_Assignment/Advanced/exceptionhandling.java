package Java_Assignment.Advanced;

public class exceptionhandling {
    public static void main(String[] args) {
        try {
            int a = 10, b = 0;
            int c = a / b;
            System.out.println("Result: " + c);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }

        try {
            int[] num = { 1, 2, 3, 4, 5 };
            System.out.println(num[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Index out of bounds");
        }


    }



    
}
