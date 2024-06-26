import { Routes } from '@angular/router';
import {DetailsPageComponent} from "./pages/doctor-page/sub-pages/my-appointments/details-page/details-page.component";
import {DoctorPageComponent} from "./pages/doctor-page/doctor-page.component";
import {MyAppointmentsComponent} from "./pages/doctor-page/sub-pages/my-appointments/my-appointments.component";
import {AllAppointmentsComponent} from "./pages/doctor-page/sub-pages/all-appointments/all-appointments.component";
import {AddAppointmentComponent} from "./pages/doctor-page/sub-pages/add-appointment/add-appointment.component";

export const routes: Routes = [
  {
    path: 'doctor',
    component: DoctorPageComponent,
    children: [
      { path: 'my-appointments', component: MyAppointmentsComponent },
      { path: 'all-appointments', component: AllAppointmentsComponent },
      { path: 'add-appointment', component: AddAppointmentComponent },
      { path: 'my-appointments/details/:id', component: DetailsPageComponent },
      { path: '', redirectTo: 'my-appointments', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'doctor', pathMatch: 'full' },
  { path: '**', redirectTo: 'doctor' }
];
