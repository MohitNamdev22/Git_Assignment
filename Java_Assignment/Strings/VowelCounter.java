package Java_Assignment.Strings;

public class VowelCounter {
    public static void main(String[] args) {
        String str = "Hey this is mohit";
        int count = countVowels(str);
        System.out.println("Vowels in the string: " + count);
    }

    public static int countVowels(String str) {
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'
                    || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
                count++;
            }
        }
        return count;
    }
}
