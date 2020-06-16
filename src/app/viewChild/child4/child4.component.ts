import { Component, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';


@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  
  @ViewChild(Child3Component,{ static: true }) childReference;

  constructor() { }

  public exampleData;


  ngOnInit() {
    this.exampleData = this.childReference.products;
    console.log(this.exampleData)

  }

}
