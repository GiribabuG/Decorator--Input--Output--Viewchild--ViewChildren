import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

@Output() exampleOutput = new EventEmitter<string[]>();

childData:string="Angular 999"

StudentInfo:Array<any>=[
  {student_No:111, student_Name:"student_One",student_Marks:1000},
  {student_No:112, student_Name:"student_Two",student_Marks:2000},
  {student_No:113, student_Name:"student_Three",student_Marks:3000},
  {student_No:114, student_Name:"student_Four",student_Marks:4000},
  {student_No:115, student_Name:"student_Five",student_Marks:5000}
];

  ngOnInit() {}

  sendDataToParent(){
     this.exampleOutput.emit(this.StudentInfo) 
  }
}
