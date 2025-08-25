import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { BodyComponent } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Employee } from './components/employee/employee'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    // Categories,   
    // Carousel,     
    // Products,
    Employee,   
    BodyComponent,
    Footer,
    
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = signal('angular_project_july_2025');
}
