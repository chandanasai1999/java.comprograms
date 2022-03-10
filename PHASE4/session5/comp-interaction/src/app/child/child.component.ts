import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
  InputEvent:['pdata'],
  output:['cevent']
})
export class ChildComponent implements OnInit {

  pdata:string="";
  

  constructor() { }

  ngOnInit(): void {
  }
  cevent=new EventEmitter<String>();
  onchange(value:string)
  {
    this.cevent.emit(value);
  }

}
