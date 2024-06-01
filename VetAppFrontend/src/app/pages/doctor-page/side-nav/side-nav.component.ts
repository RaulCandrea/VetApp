import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {CardDoctorComponent} from "../card-doctor/card-doctor.component";
import {CardAppointmentComponent} from "../card-appointment/card-appointment.component";
import {CardProfileComponent} from "../card-profile/card-profile.component";


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
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
    CardProfileComponent
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  activeIcon: string  = 'explore';

  toggleIconColor(icon: string): void {
    if (this.activeIcon === icon) {
      this.activeIcon = ''; // If already active, deactivate
    } else {
      this.activeIcon = icon;
    }
  }

}
