import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  result:any;
  constructor() { }

  ngOnInit() {
  }

  // this products data is sending to child component 
 products:Array<any>=[
  {product_id:111, product_name:"p_One",p_cost:10000},
  {product_id:112, product_name:"p_Two",p_cost:20000},
  {product_id:113, product_name:"p_Three",p_cost:30000},
  {product_id:114, product_name:"p_Four",p_cost:40000},
  {product_id:115, product_name:"p_Five",p_cost:50000}
];

childData(event){
  console.log(event)
  this.result=event
  console.log(this.result)

}


}
