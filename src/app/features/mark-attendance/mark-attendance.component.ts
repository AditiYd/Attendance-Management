import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { attendance } from 'src/app/shared/models/interfaces/Attendance';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent {
  newData: attendance = { id: '', importId: '', Date: '', Status: ''};

  constructor(private service: DataService) {}

  addNewData(event: Event) {
    event.preventDefault();

    const newData: attendance = {
      id: this.newData.id,
      importId: this.newData.importId,
      Date: this.newData.Date,
      Status: this.newData.Status,
    };

    const addDataObservable: Observable<attendance> = this.service.addAttendance(newData);
  
    addDataObservable.subscribe(
      (data: attendance) => {
        console.log('New student added:', data);
        this.newData = { id: '', importId: '', Date: '', Status: ''};
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
