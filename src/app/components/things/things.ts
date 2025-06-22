import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'things',
  imports: [CommonModule],
  templateUrl: './things.html',
  styleUrl: './things.css'
})
export class Things {
  things = [
    {
      title: "Thing 1",
      description: "Thing 1 description",
      price: 14.99
    },
    {
      title: "Thing 2",
      description: "Thing 2 description",
      price: 24.99
    },
    {
      title: "Thing 3",
      description: "Thing 3 description",
      price: 34.99
    },
    {
      title: "Thing 4",
      description: "Thing 4 description",
      price: 44.99
    },
    {
      title: "Thing 5",
      description: "Thing 5 description",
      price: 54.99
    },
    
  ]
}
