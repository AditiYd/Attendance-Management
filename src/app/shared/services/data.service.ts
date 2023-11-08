import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from '../models/interfaces/Student';
import { attendance } from '../models/interfaces/Attendance';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<student[]> {
    return this.http.get<student[]>(`https://65487097dd8ebcd4ab22e692.mockapi.io/Student_details`);
  }

  addStudents(newStudent: student): Observable<student> {
    return this.http.post<student>(`https://65487097dd8ebcd4ab22e692.mockapi.io/Student_details`, newStudent, httpOptions);
  }

  deleteStudent(id: number): Observable<{}> {
    const deleteUrl = `https://65487097dd8ebcd4ab22e692.mockapi.io/Student_details/${id}`;
    return this.http.delete(deleteUrl, httpOptions);
  }

  getStudent(id: number): Observable<student> {
    const url = `https://65487097dd8ebcd4ab22e692.mockapi.io/Student_details/${id}`;
    return this.http.get<student>(url);
  }

  editStudent(updatedStudent: student): Observable<student> {
    const updateUrl = `https://65487097dd8ebcd4ab22e692.mockapi.io/Student_details/${updatedStudent.id}`;
    return this.http.put<student>(updateUrl, updatedStudent, httpOptions);
  }

  view(): Observable<attendance[]> {
    const url = `https://65487097dd8ebcd4ab22e692.mockapi.io/Attendance`;
    return this.http.get<attendance[]>(url);
  }

  addAttendance(newData: attendance): Observable<attendance> {
    return this.http.post<attendance>(`https://65487097dd8ebcd4ab22e692.mockapi.io/Attendance`, newData, httpOptions);
  }
  
}
