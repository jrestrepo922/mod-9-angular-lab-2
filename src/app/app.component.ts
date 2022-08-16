import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  athletes = [
    {
      name: "Paco",
      sport: "soccer",
      active: true, 
    },
    {
      name: "Pepe",
      sport: "basketall",
      active: false, 
    },
    {
      name: "Pedro",
      sport: "baseball",
      active: true, 
    }
  ]

  newAthlete = {
    name: "",
    sport:  "",
    active: false,  
  }

  addAthlete(){
    let newAthlete = this.newAthlete; 
    this.athletes.push(newAthlete); 
    this.newAthlete =   newAthlete = {
      name: "",
      sport:  "",
      active: false,  
    }
  }

}
