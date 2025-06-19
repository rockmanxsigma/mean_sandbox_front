import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemo } from './components/button-demo/button-demo'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'MEAN Sandbox Front';
}
