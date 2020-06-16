import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Parent2Component } from './parent2.component';
import { Child8Component } from './child8/child8.component';




const routes: Routes = [
{path:'',component:Parent2Component},
{path:'child8', component:Child8Component}
]


@NgModule({
  declarations: [
    Parent2Component,
    Child8Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Parent2Module { }
