import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:9091'; // Spring Boot API URL

  constructor(private http: HttpClient) {}

  getStudent(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(this.baseUrl + "/get-student");
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/get-student`);
  }

  saveStudent(student: Student): Observable<any> {
    return this.http.post(`${this.baseUrl}/save-student`, student);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-student`, student);
  }

  deleteStudent(id: {}): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-student/${id}`);
  }
}
