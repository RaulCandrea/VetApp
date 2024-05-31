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
}
