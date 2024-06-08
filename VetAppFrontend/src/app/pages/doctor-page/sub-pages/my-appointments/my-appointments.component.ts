import {Component, OnInit} from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import {NgForOf} from "@angular/common";
import {CardAppointmentComponent} from "../../cards/card-appointment/card-appointment.component";
import {AppointmentService} from "../../../../services/appointment.services";
import {IAppointmentModel, StatusEnum} from "../../../../models/IAppointmentModel";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IDoctorModel} from "../../../../models/IDoctorModel";
import {doctor1} from "../../../../mock-data/doctor.data";


@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [
    CdkDropList,
    NgForOf,
    CdkDrag,
    CdkDropListGroup,
    CardAppointmentComponent,
  ],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css'
})
export class MyAppointmentsComponent implements OnInit {
  doctor: IDoctorModel = doctor1;
  progress: IAppointmentModel[] = [];
  todo: IAppointmentModel[] = [];
  done: IAppointmentModel[] = [];

  constructor(private appointmentService: AppointmentService, private router: Router) {
  }

  ngOnInit() {
    this.appointmentService.getAppointmentsByDoctorName(doctor1.name).subscribe(tempArray => {
      if (tempArray) {
        this.sortAppointmentsIntoArrays(tempArray);
      }
    });
  }


  //aici este metoda de drop unde am si verificat daca este in done sa nu se mai poata muta
  drop(event: CdkDragDrop<IAppointmentModel[]>, targetStatus: StatusEnum) {
    if (event.previousContainer.id === 'cdk-drop-list-0' && targetStatus === StatusEnum.done) {
      alert('You must move the item to "In Progress" before marking it as "Done".');
      return;
    } else {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }

      const movedItem = event.container.data[event.currentIndex];
      movedItem.status = targetStatus;
    }
  }

  //aici inserez elementele in array-uri diferite
  sortAppointmentsIntoArrays(tempArray: IAppointmentModel[]) {
    this.todo = tempArray.filter(appointment => appointment.status === StatusEnum.created);
    this.progress = tempArray.filter(appointment => appointment.status === StatusEnum.progress);
    this.done = tempArray.filter(appointment => appointment.status === StatusEnum.done);
  }

  protected readonly StatusEnum = StatusEnum;


}
