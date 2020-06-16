import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit {

  constructor() { }

  public childExample:string = 'Hello I am child6 component ';

  products:Array<any>=[
    {product_id:111, product_name:"p_One",p_cost:10000},
    {product_id:112, product_name:"p_Two",p_cost:20000},
    {product_id:113, product_name:"p_Three",p_cost:30000},
    {product_id:114, product_name:"p_Four",p_cost:40000},
    {product_id:115, product_name:"p_Five",p_cost:50000}
  ];
  @Input() type: string = "success";
  
  ngOnInit() {
  }


  alert() {
    console.log("alert");
    alert('alert 23r5245')
  }
}
