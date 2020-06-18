import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child8',
  templateUrl: './child8.component.html',
  styleUrls: ['./child8.component.css']
})
export class Child8Component implements OnInit {

  constructor(private activatedRoutes: ActivatedRoute, private router :Router) { }

  result:any;

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => { 
      this.result = params['id']
      console.log( this.result)
    })
  
  }
  

}
