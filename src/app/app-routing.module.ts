import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { MarkAttendanceComponent } from './features/mark-attendance/mark-attendance.component';
import { EditDetailsComponent } from './features/edit-details/edit-details.component';
import { ViewAttendanceComponent } from './features/view-attendance/view-attendance.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'mark-attendance',
    component: MarkAttendanceComponent
  },
  {
    path: 'edit-details/:id',
    component: EditDetailsComponent
  },
  {
    path: 'view-attendance/:id',
    component: ViewAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
