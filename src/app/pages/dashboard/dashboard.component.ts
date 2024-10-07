import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { CorosoulComponent } from '../corosoul/corosoul.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CorosoulComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
