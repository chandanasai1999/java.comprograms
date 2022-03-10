import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
   inputs:['pdata'],
   outputs:['cevent']

})

export class ChildComponent implements OnInit {

  pdata:string="";

  constructor() { }

  ngOnInit(): void {
  }
   ceventt=new EventEmitter<string>();
  onchange(value:string)
{
   this.ceventt.emit(value);
}
}
