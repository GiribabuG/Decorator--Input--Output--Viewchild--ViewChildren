import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Child6Component } from '../child6/child6.component';


@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component {
  @ViewChildren(Child6Component) alerts: QueryList<Child6Component>
  // @ViewChildren('name') names: QueryList<any>

  constructor() { }

  ngAfterViewInit()  {

    this.alerts.forEach(alertInstance => console.log(alertInstance));
    // this.names.forEach(div => console.log(div));
  }

}
