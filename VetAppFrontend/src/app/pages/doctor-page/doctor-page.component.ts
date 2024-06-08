import {Component} from '@angular/core';
import {AddAppointmentComponent} from "./sub-pages/add-appointment/add-appointment.component";
import {AllAppointmentsComponent} from "./sub-pages/all-appointments/all-appointments.component";
import {CardDoctorComponent} from "./cards/card-doctor/card-doctor.component";
import {CardEventsComponent} from "./cards/card-events/card-events.component";
import {CardProfileComponent} from "./cards/card-profile/card-profile.component";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent, MatSidenavModule
} from "@angular/material/sidenav";
import {MatTab, MatTabContent, MatTabGroup, MatTabLink, MatTabsModule} from "@angular/material/tabs";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatListItem, MatNavList} from "@angular/material/list";
import {NgClass} from "@angular/common";
import {CardAppointmentComponent} from "./cards/card-appointment/card-appointment.component";
import {MyAppointmentsComponent} from "./sub-pages/my-appointments/my-appointments.component";
import {doctor1, doctor2, doctor3, DOCTORS} from "../../mock-data/doctor.data";

@Component({
  selector: 'app-doctor-page',
  standalone: true,
  imports: [
    AddAppointmentComponent,
    AllAppointmentsComponent,
    CardDoctorComponent,
    CardEventsComponent,
    CardProfileComponent,
    MatAnchor,
    MatIcon,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatTab,
    MatTabContent,
    MatTabGroup,
    RouterLink,
    RouterOutlet,
    MatTabsModule,
    MatSidenavContainer,
    MatDrawerContainer,
    MatDrawer,
    MatNavList,
    MatListItem,
    MatButton,
    MatIconModule,
    MatSidenavModule,
    MatAnchor,
    RouterLink,
    NgClass,
    CardDoctorComponent,
    CardAppointmentComponent,
    CardProfileComponent,
    CardEventsComponent,
    MatTabLink,
    RouterLinkActive,
    MyAppointmentsComponent,
    RouterOutlet,
    AllAppointmentsComponent,
    AddAppointmentComponent,
  ],
  templateUrl: './doctor-page.component.html',
  styleUrl: './doctor-page.component.css'
})
export class DoctorPageComponent {
  protected readonly doctor1 = doctor1;
  protected readonly doctor2 = doctor2;
  protected readonly doctor3 = doctor3;

  protected readonly DOCTORS = DOCTORS;

  activeIcon: string = 'explore';

  constructor(private router: Router) {
  }

  //logica de activare/dezactivare a icon-urilor
  toggleIconColor(icon: string): void {
    if (this.activeIcon === icon) {
      this.activeIcon = '';
    } else {
      this.activeIcon = icon;
    }
  }


}
