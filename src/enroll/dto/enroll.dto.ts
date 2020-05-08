import { Subject } from "src/subject/subject.entity";
import { Student } from "src/student/schema/student.entity";
import { Period } from "src/period/period.entity";
import { Class } from "src/class/class.entity";

export class EnrollDTO{
    finalNote: number;
    state: string;
    eliminated: boolean;
    subject: Subject;
    student: Student;
    period: Period;
    assistances: Class[];
}