import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  disvar : string = ''; 
  getstring(name:string){
    console.log(name)
    this.disvar = name
  }
}
