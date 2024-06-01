import {Component, Input} from '@angular/core';
import {IAppointmentModel, StatusEnum} from "../../../models/IAppointmentModel";
import {DatePipe, NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {IAnimalModel} from "../../../models/IAnimalModel";

@Component({
  selector: 'app-card-appointment',
  standalone: true,
  imports: [
    NgClass,
    MatIcon,
    DatePipe,
    MatButton,
    MatCard
  ],
  templateUrl: './card-appointment.component.html',
  styleUrl: './card-appointment.component.css'
})
export class CardAppointmentComponent {
  @Input() appointment !: IAppointmentModel;
  protected readonly StatusEnum = StatusEnum;
}
