import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {IDoctorModel} from "../../../../models/IDoctorModel";
import {doctor1} from "../../../../mock-data/doctor.data";

@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [
    MatIconModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgOptimizedImage
  ],
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.css'
})
export class CardProfileComponent {

  doctor: IDoctorModel = doctor1;


}
