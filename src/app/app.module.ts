import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MarkAttendanceComponent } from './features/mark-attendance/mark-attendance.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { MaterialModule } from './material/material/material.module';
import { EditDetailsComponent } from './features/edit-details/edit-details.component';
import { ViewAttendanceComponent } from './features/view-attendance/view-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    DashboardComponent,
    MarkAttendanceComponent,
    SidebarComponent,
    EditDetailsComponent,
    ViewAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
