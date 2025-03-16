package Java_Assignment.Strings;

public class StringReversal {
    public static void main(String[] args) {
        String str = "Hey this is mohit";
        String reversed = reverseString(str);
        System.out.println("Before: " + str);
        System.out.println("After Reversing: " + reversed);
    }

    public static String reverseString(String str) {
        char[] charArray = str.toCharArray();
        int start = 0;
        int end = charArray.length - 1;
        char temp;

        while (end > start) {
            temp = charArray[start];
            charArray[start] = charArray[end];
            charArray[end] = temp;
            start++;
            end--;
        }

        return new String(charArray);
    }
}
