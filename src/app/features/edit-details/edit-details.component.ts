import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <-- import ActivatedRoute
import { student } from 'src/app/shared/models/interfaces/Student';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit { // <-- implement OnInit
  student: student = {id: 0, name: '', email: '', phone: ''};
  id: number = 0;
  name: string = '';
  email: string = '';
  phone: string = ''

  constructor(private service: DataService, private route: ActivatedRoute) { // <-- inject ActivatedRoute
  }

  ngOnInit() {
    this.route.params.subscribe(params => { // <-- retrieve id parameter from URL
      this.id = params['id'];
      this.service.getStudent(this.id)
        .subscribe((student: student) => {
          this.student = student;
          this.name = student.name;
          this.email = student.email;
          this.phone = student.phone;
        });
    });
  }

  onSubmit() {
    const updatedStudent: student = {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone
    };
    this.service.editStudent(updatedStudent)
      .subscribe((student: student) => {
        this.student = student;
        this.name = student.name;
        this.email = student.email;
        this.phone = student.phone;
      });
  }
}