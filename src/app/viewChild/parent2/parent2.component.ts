import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor( private router :Router) { }

  products:Array<any>=[
    
    {product_id:111, product_name:"p_One",p_cost:10000},
    {product_id:112, product_name:"p_Two",p_cost:20000},
    {product_id:113, product_name:"p_Three",p_cost:30000},
    {product_id:114, product_name:"p_Four",p_cost:40000},
    {product_id:115, product_name:"p_Five",p_cost:50000}
  ];

  ngOnInit() {
   
  }


  
}
