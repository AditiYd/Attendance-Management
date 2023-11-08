import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { student } from 'src/app/shared/models/interfaces/Student';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  info: student[] = [];
  constructor (private service: DataService) {}
  
  ngOnInit(){
    console.log('fetching data');
    this.getData();
  }
  getData() { 
    this.service.getData().subscribe( 
      (data: student[]) => { 
        this.info = data; 
        console.log(this.info); 
      }, 
      error => { 
        console.log('Error:', error); 
      } 
    ); 
  }

  deleteStudent(id: number) {
    this.service.deleteStudent(id).subscribe(() => {
          console.log(`Student with id ${id} has been deleted`);
          this.getData();
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
