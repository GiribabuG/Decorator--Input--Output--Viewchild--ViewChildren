import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';
import { Child4Component } from '../child4/child4.component';
import { Child3Component } from '../child3/child3.component';
import { Child5Component } from '../child5/child5.component';
import { Child6Component } from '../child6/child6.component';


const routes: Routes = [
    { path: '', component: ParentComponent },
    { path: 'child1', component: ChildComponent },
    { path: 'child2', component: Child2Component },
    { path: 'child3', component: Child3Component },
    { path: 'child4', component: Child4Component },
    { path: 'child5', component: Child5Component },
    { path: 'child6', component: Child6Component },
    {path :'parent',loadChildren:'../parent2/parent2.module#Parent2Module'},

]
@NgModule({

    declarations: [
        ParentComponent,
        ChildComponent,
        Child2Component,
        Child3Component,
        Child4Component,
        Child5Component,
        Child6Component
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule

    ],
    providers: []
})
export class ParentModule { }