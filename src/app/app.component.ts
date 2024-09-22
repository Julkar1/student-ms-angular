import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentService} from "./service/student.service";
import {CommonModule} from "@angular/common";
import {Student} from "./models/student";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{


  //studentList: Student[] = new Array();
/*/-------------------------------------/*/

  studentList: Student[] = [];
  newStudent: Student = {
    id:0,
    studentId: '',
    studentName: '',
    fatherName: '',
    gender: '',
    mobile: '',
    educationalQu: '',
    religion: '',
    age: 0,
  };
  editMode = true;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.studentList = data;
    });
  }

  saveStudent(): void {
    this.studentService.saveStudent(this.newStudent).subscribe(() => {
      alert('Student added successfully!');
      this.resetForm();
      this.getStudentList(); // Refresh list
    });
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.newStudent).subscribe(() => {
      alert('Student updated successfully!');
      this.resetForm();
      this.getStudentList(); // Refresh list
    });
  }

 /* saveStudent(): void {
    if (this.editMode) {
      this.studentService.updateStudent(this.newStudent).subscribe(() => {
        alert('Student updated successfully!');
        this.resetForm();
        this.getStudentList();
      });
    } else {
      this.studentService.saveStudent(this.newStudent).subscribe(() => {
        alert('Student added successfully!');
        this.resetForm();
        this.getStudentList();
      });
    }
  }*/

  editStudent(student: Student): void {
    this.newStudent = { ...student };
    this.editMode = true;
  }

  deleteStudent(id: number | undefined): void {
    this.studentService.deleteStudent({id}).subscribe(() => {
      alert('Student deleted successfully!');
      this.getStudentList();
    });
  }

  resetForm(): void {
    this.newStudent = {
      id:0,
      studentId: '',
      studentName: '',
      fatherName: '',
      gender: '',
      mobile: '',
      educationalQu: '',
      religion: '',
      age: 0,
    };
    this.editMode = true;
  }

  /*--------------------------------------------*/

/*  gotoAddPage() {
    console.log("go to page working")
  }*/

}


