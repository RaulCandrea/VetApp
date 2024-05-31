import {Component} from '@angular/core';
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
  // @Input() appointment : IAppointmentModel | null = null;
   animal: IAnimalModel = {
    id:"1",
    name: "Fluffy",
    species: "Cat",
    details: "Super",
  };

   appointment: IAppointmentModel =
    {
      id: "1",
      animal: this.animal,
      date: new Date(),
      doctorName: "Dr. Smith",
      diagnosis: "Common cold",
      status: StatusEnum.created
    }

  protected readonly StatusEnum = StatusEnum;
}
