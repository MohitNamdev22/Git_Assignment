package Java_Assignment.Advanced;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class fileoperation {
    public static void main(String[] args) {
        File file = new File("Java_Assignment\\Advanced\\test.txt");
        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.getMessage();
    }
    
}
}
