import {Injectable} from "@angular/core";
import mockAppointments from "../mock-data/appointments.data";
import {IAppointmentModel, StatusEnum} from "../models/IAppointmentModel";
import {BehaviorSubject, filter, map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AppointmentService {


   appointmentsSubject = new BehaviorSubject<IAppointmentModel[]>([]);
  appointments$ = this.appointmentsSubject.asObservable();

  constructor() {
    const mockAppointmentsTemp: IAppointmentModel[] = mockAppointments;
    this.appointmentsSubject.next(mockAppointmentsTemp);
  }
  //aici am facut diferite metode pentru ce aveam nevoie
  getAppointmentById(id: string): Observable<IAppointmentModel | undefined> {
    return this.appointments$.pipe(
      map(appointments => appointments.find(appointment => appointment.id === id))
    );
  }

  getAppointmentsByDoctorName(doctorName: string): Observable<IAppointmentModel[]> {
    return this.appointments$.pipe(
      map(appointments => {
        const filteredAppointments: IAppointmentModel[] = [];
        appointments.forEach(appointment => {
          if (appointment.doctorName === doctorName) {
            filteredAppointments.push(appointment);
          }
        });
        return filteredAppointments;
      })
    );
  }



   updateLocalStorage(appointments: IAppointmentModel[]): void {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }


  //un post la add-appointment
  createAppointment(appointment: IAppointmentModel): void {
    const currentAppointments = this.appointmentsSubject.value;
    const updatedAppointments = [...currentAppointments, appointment];
    this.appointmentsSubject.next(updatedAppointments);
    this.updateLocalStorage(updatedAppointments);
  }


  //pt modificarea unui appointment
  updateAppointment(updatedAppointment: IAppointmentModel): void {
    const currentAppointments = this.appointmentsSubject.value;
    const index = currentAppointments.findIndex(appointment => appointment.id === updatedAppointment.id);
    if (index !== -1) {
      const updatedAppointments = [...currentAppointments];
      updatedAppointments[index] = updatedAppointment;
      this.appointmentsSubject.next(updatedAppointments);
      this.updateLocalStorage(updatedAppointments);
    } else {
      console.error(`Appointment with ID ${updatedAppointment.id} not found.`);
    }
  }
}
