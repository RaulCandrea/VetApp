import { Component } from '@angular/core';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card-doctor',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardImage,
    MatCardActions,
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './card-doctor.component.html',
  styleUrl: './card-doctor.component.css'
})
export class CardDoctorComponent {

}
