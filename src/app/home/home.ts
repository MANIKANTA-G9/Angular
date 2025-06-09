import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  username='Jack';
  obj={name:'jack'};
  text= 'example.image';
  backgroundColor='yellow';

  firstname='mani';

  onClick(){
    console.log("The button is clicked");
    this.username=' ';
    this.obj.name=' ';
    this.text=' ';
    this.backgroundColor='';
  }

  onKeyUp(event: Event){
    const val=(event.target as HTMLInputElement)?.value;
    console.log("on keyup event",val);
  }

  onChange(){
    console.log("on change event");
  }

  onInput(event: Event){
    const val=(<HTMLInputElement>event.target)?.value;
    console.log("on input event",val);
  } 

    

  }




