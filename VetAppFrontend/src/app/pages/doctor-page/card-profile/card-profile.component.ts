import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card-profile',
  standalone: true,
    imports: [
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

}
