import {Component, ViewEncapsulation} from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {CardDoctorComponent} from "../card-doctor/card-doctor.component";
import {CardAppointmentComponent} from "../card-appointment/card-appointment.component";
import {CardProfileComponent} from "../card-profile/card-profile.component";
import {CardEventsComponent} from "../card-events/card-events.component";
import {MatTabLink} from "@angular/material/tabs";
import {MatTabsModule} from '@angular/material/tabs';
import {MyAppointmentsComponent} from "../sub-pages/my-appointments/my-appointments.component";
import {AllAppointmentsComponent} from "../sub-pages/all-appointments/all-appointments.component";
import {AddAppointmentComponent} from "../sub-pages/add-appointment/add-appointment.component";




@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
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
    AddAppointmentComponent
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',


})
export class SideNavComponent {

  activeIcon: string  = 'explore';

  constructor(private router : Router) {
  }

  toggleIconColor(icon: string): void {
    if (this.activeIcon === icon) {
      this.activeIcon = ''; // If already active, deactivate
    } else {
      this.activeIcon = icon;
    }
  }

  goToPage(page :any){
    this.router.navigate(['doctor/all-appointments']);
  }

}
