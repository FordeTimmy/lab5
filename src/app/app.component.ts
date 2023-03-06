import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number = 0;
  hide:boolean = true;
 

  onClick(){
    this.count++;
  }


  hideLabel(){
  if(this.hide === true){
    this.hide = true;
  }
  else{
    this.hide = true;
  } 
}
}
