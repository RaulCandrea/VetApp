import { Component } from '@angular/core';
import {SideNavComponent} from "./side-nav/side-nav.component";

@Component({
  selector: 'app-doctor-page',
  standalone: true,
  imports: [
    SideNavComponent
  ],
  templateUrl: './doctor-page.component.html',
  styleUrl: './doctor-page.component.css'
})
export class DoctorPageComponent {

}
