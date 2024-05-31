import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DoctorPageComponent} from "./pages/doctor-page/doctor-page.component";
import {CardAppointmentComponent} from "./pages/doctor-page/card-appointment/card-appointment.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DoctorPageComponent, CardAppointmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VetAppFrontend';
}
