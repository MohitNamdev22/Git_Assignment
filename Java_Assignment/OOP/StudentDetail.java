package Java_Assignment.OOP;

class Student {
    private String name;
    private int rollNumber;
    private double marks;

    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    public String getName() {
        return name;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public double getMarks() {
        return marks;
    }

    public void setMarks(double marks) {
        if(marks >= 0 && marks <= 100) {
            this.marks = marks;
        } else {
            System.out.println("Invalid marks");
        }
    }

    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }

    public void updateMarks(double newMarks) {
        this.marks = newMarks;
    }

    public void updateMarks(double newMarks, double bonus) {
        this.marks = newMarks + bonus;
    }
}


class GraduateStudent extends Student {
    private String subject;

    public GraduateStudent(String name, int rollNumber, double marks, String subject) {
        super(name, rollNumber, marks);
        this.subject = subject;
    }

    public String getSubject() {
        return subject;
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Subject: " + subject);
    }

    @Override
    public void updateMarks(double newMarks) {
        super.updateMarks(newMarks + 5.0);
    }
}

public class StudentDetail {

    public static void main(String[] args) {
        Student student = new Student("Mohit", 462, 87);
        System.out.println("Student Details:");
        student.displayDetails();

        student.updateMarks(92);
        System.out.println("\nUpdated Student Details:");
        student.displayDetails();

        student.updateMarks(95, 5);
        System.out.println("\nUpdated Student Details with bonus:");
        student.displayDetails();

        GraduateStudent graduateStudent = new GraduateStudent("Rohit", 492, 75, "Computer Science");
        System.out.println("\nGraduate Student Details:");
        graduateStudent.displayDetails();


        graduateStudent.updateMarks(80);
        System.out.println("\nUpdated Graduate Student Details:");
        graduateStudent.displayDetails();
    }
    
}
