import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Activity } from 'src/app/layout/model/activity';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})
export class StudentGridComponent implements OnInit {

  public activities: Activity[];
  public activityLog: any[] = [];
  public gridData: any[]=[];
  public toDate: Date;
  public fromDate: Date;
  public filteredStudent:string;

  public selectedStudents: any;

 

  public classesList: any;
  constructor(public studentService: StudentService, public datePipe: DatePipe) { }


  ngOnInit() {
    this.getActivities();
    this.getClasses();
  }
  getActivities() {
    this.studentService.getTestActivities().subscribe(
      res => {
        // const data=res.data;
        this.activities = res.data;
        
      },
      error => {
        console.error(error);
      }
    );

  }

  getClasses() {
    this.studentService.getTestClasses().subscribe(
      res => {
      
        this.classesList = res.classes;
      },
      error=>{
        console.error(error);
      }
    );
  }

  filterClass(value) {
   this.toDate=null;
   this.fromDate=null;

    this.filteredStudent=null;
    let result: any[] = [];
    this.activityLog = [];
    this.selectedStudents = []; //selected students by class
    this.selectedStudents = this.classesList.find(x => x.name == value).students;
    this.selectedStudents.forEach(element => { result.push(this.activities.find(x => x.student == element)) });

    result.forEach(x => {
      for (let index = 0; index < x.attempts.weeks.length; index++) {
        this.activityLog.push({
          date: x.attempts.weeks[index],
          values: x.attempts.values[index],
          content: x.content,
          skill: x.skill,
          student: x.student,
          time: x.time,
          type: x.type,
        })

      }

    });
    this.gridData = this.activityLog;
  }




  filterStudent(value) {
    this.filteredStudent=value;
    if(!this.fromDate && !this.toDate){
      let res = this.activityLog.filter(x => { return x.student == value });
      this.gridData = res;
    }
    else{
      this.dateChange();
    }
    
    
   
  }

  dateChange() {
    if (this.fromDate && this.toDate && this.filteredStudent) { 
      let res = this.activityLog.filter(m => {
        var split = m.date.split('/');
        let year = 20 + split[2]   //data date comming as year like 18 
        var Ndate = new Date(year, split[1] - 1, split[0]); //Y M D 
        return Ndate >= this.fromDate && Ndate <= this.toDate && m.student ==this.filteredStudent

      })
      this.gridData = res;
    }
   
  }

 


}
