import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

// here data coming from parent component through @input() with refrence variable of childExample 

  @Input() childExample: string;

  ngOnInit() { }



}
