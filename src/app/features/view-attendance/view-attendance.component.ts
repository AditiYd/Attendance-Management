import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { attendance } from 'src/app/shared/models/interfaces/Attendance';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent { 
  Attendance: attendance[] = []; 
  studentid: string = ""; 
  studentAttendance: attendance[] = [];

constructor(private service: DataService, private route: ActivatedRoute) { 
  this.studentid = this.route.snapshot.paramMap.get('id')?.toString() || ""; 
  this.service.view().subscribe(data => { 
    this.Attendance = data; 
    console.log("att", this.Attendance); 
    this.studentAttendance = this.Attendance.filter(a => a.importId === this.studentid);
  }); 
}

}
// export class ViewAttendanceComponent {
//   Attendance: attendance[] = [];
//   studentid: string = "";

//   constructor(private service: DataService, private route: ActivatedRoute) {
//     this.studentid = this.route.snapshot.paramMap.get('id')?.toString() || "";
//     this.service.view().subscribe(data => {
//       this.Attendance = data;
//       console.log("att", this.Attendance);  
//     });
//   }

// }