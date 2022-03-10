import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.less']
})
export class SwitchdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    people=[
      {name:"chandu",age:35,country:"India"},
      {name:"chand",age:36,country:"canada"},
      {name:"sai",age:26,country:"paris"},
      {name:"saim",age:56,country:"USA"},


    ]
}
