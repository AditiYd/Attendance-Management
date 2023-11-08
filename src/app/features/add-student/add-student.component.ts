import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { student } from 'src/app/shared/models/interfaces/Student';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  newStudent: student = { id: 0, name: '', email: '', phone: '' };

  constructor(private service: DataService) {}

  addNewStudent(event: Event) {
    event.preventDefault();

    const newStudent: student = {
      id: this.newStudent.id,
      name: this.newStudent.name,
      email: this.newStudent.email,
      phone: this.newStudent.phone
    };

    const addStudentObservable: Observable<student> = this.service.addStudents(newStudent);
  
    addStudentObservable.subscribe(
      (students: student) => {
        console.log('New student added:', students);
        this.newStudent = { id: 0, name: '', email: '', phone: '' };
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
