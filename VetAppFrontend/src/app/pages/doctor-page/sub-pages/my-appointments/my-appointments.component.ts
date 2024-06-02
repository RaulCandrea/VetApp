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
import {CardAppointmentComponent} from "../../card-appointment/card-appointment.component";
import {AppointmentService} from "../../../../services/appointment.services";
import {IAppointmentModel, StatusEnum} from "../../../../models/IAppointmentModel";
import {Router} from "@angular/router";


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

  progress: IAppointmentModel[] = [];

  todo: IAppointmentModel[] = [];

  done: IAppointmentModel[] = [];

  constructor(private appointmentService: AppointmentService , private router : Router) {
  }

  ngOnInit() {
    this.sortAppointmentsIntoArrays();

  }

  public redirectTo(id: string){
    this.router.navigate( ['my-appointments/details/:' + id]);
  }

  drop(event: CdkDragDrop<IAppointmentModel[]>, targetStatus: StatusEnum) {
    if (event.previousContainer.id === 'cdk-drop-list-0' && targetStatus === StatusEnum.done) {
      alert('You must move the item to "In Progress" before marking it as "Done".');
      return;
    }else{
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }


      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const movedItem = event.container.data[event.currentIndex];
      movedItem.status = targetStatus;
    }
  }

  sortAppointmentsIntoArrays(){
    let tempArray = this.appointmentService.getAppointments();
    this.todo = tempArray.filter(appointment => appointment.status === StatusEnum.created);
    this.progress = tempArray.filter(appointment => appointment.status === StatusEnum.progress);
    this.done = tempArray.filter(appointment => appointment.status === StatusEnum.done);
    console.log(this.done);
  }

  protected readonly StatusEnum = StatusEnum;
}
