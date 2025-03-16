package Java_Assignment.Arrays;

public class Average {
    public static void main(String[] args) {
        int[] num = { 1, 1, 1, 2, 2 };
        int sum = 0;

        for (int i = 0; i < num.length; i++) {
            sum += num[i];
        }

        double avg = (double) sum / num.length;
        System.out.println("Average of the numbers: " + avg);
    }
    
}
