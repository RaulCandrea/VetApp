import {Component, Input} from '@angular/core';
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
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-card-events',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgOptimizedImage,
    MatIcon
  ],
  templateUrl: './card-events.component.html',
  styleUrl: './card-events.component.css'
})
export class CardEventsComponent {
  @Input() imagePath: string = '';
  @Input() title: string = '';

}
