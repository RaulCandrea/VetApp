import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DoctorPageComponent} from "./pages/doctor-page/doctor-page.component";
import {CardAppointmentComponent} from "./pages/doctor-page/cards/card-appointment/card-appointment.component";
import {CardDoctorComponent} from "./pages/doctor-page/cards/card-doctor/card-doctor.component";
import {CardEventsComponent} from "./pages/doctor-page/cards/card-events/card-events.component";
import {MyAppointmentsComponent} from "./pages/doctor-page/sub-pages/my-appointments/my-appointments.component";
import {AddAppointmentComponent} from "./pages/doctor-page/sub-pages/add-appointment/add-appointment.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DoctorPageComponent, CardAppointmentComponent, CardDoctorComponent, CardEventsComponent, MyAppointmentsComponent, AddAppointmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VetAppFrontend';
}
