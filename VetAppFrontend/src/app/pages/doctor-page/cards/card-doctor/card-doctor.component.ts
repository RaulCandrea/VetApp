import {Component, Input} from '@angular/core';
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
import {MatIcon} from "@angular/material/icon";
import {IDoctorModel} from "../../../../models/IDoctorModel";

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
    NgOptimizedImage,
    MatIcon
  ],
  templateUrl: './card-doctor.component.html',
  styleUrl: './card-doctor.component.css'
})
export class CardDoctorComponent {
  @Input() doctor !: IDoctorModel;
  @Input() image: string = '';


}
