import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Add RouterModule to imports
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Fix typo: should be 'styleUrls'
})
export class NavbarComponent {
}
