import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'My First Angular App';
  fname:string="chandu";
  lname:string="sai"
  
  imgurl:string="./assets/images/temp.jpg"
  h=250;
  w=250;

  flag:boolean=false;
  show(){
    this.flag=!this.flag;
  }
  color:String="red"
  we:number=700;
  //Array Object
  product=[
    {name:"pencil",available:"08-03-2022",price:10.23,rating:4.5},
    {name:"Eraser",available:"06-03-2022",price:3.89,rating:4.3},
    {name:"Scale",available:"02-03-2022",price:36.90,rating:4.0},
    {name:"pen",available:"08-03-2022",price:5.00,rating:3.5},
  ]
}
