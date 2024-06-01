import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DoctorPageComponent} from "./pages/doctor-page/doctor-page.component";
import {CardAppointmentComponent} from "./pages/doctor-page/card-appointment/card-appointment.component";
import {CardDoctorComponent} from "./pages/doctor-page/card-doctor/card-doctor.component";
import {CardEventsComponent} from "./pages/doctor-page/card-events/card-events.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DoctorPageComponent, CardAppointmentComponent, CardDoctorComponent, CardEventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VetAppFrontend';
}
