import {Injectable} from "@angular/core";
import mockAppointments from "../mock-data/appointments.data";
import {IAppointmentModel} from "../models/IAppointmentModel";


@Injectable({
  providedIn: 'root'
})

export class AppointmentService {


  public getAppointments() :IAppointmentModel[]{
    return mockAppointments;
  }

  public getAppointmentById(appointmentId:string){
    let appointmentTemp = null;
    this.getAppointments().forEach(appointment => {
      if(appointment.id == appointmentId){
        appointmentTemp = appointment;
      }
    })
    return appointmentTemp;
  }
}
