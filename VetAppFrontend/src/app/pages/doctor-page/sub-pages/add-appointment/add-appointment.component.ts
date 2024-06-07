import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DoctorService} from "../../../../services/doctor.services";
import {IDoctorModel} from "../../../../models/IDoctorModel";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {domesticAnimals} from "../../../../mock-data/animals.data";
import {MatInput} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {map, Observable, startWith} from "rxjs";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
import {MatIcon} from "@angular/material/icon";
import { DateTime } from 'ts-luxon';
import {AppointmentService} from "../../../../services/appointment.services";
import {IAppointmentModel, StatusEnum} from "../../../../models/IAppointmentModel";



@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [
    NgxMatTimepickerModule,
    MatLabel,
    MatFormField,
    MatSelect,
    MatOption,
    NgForOf,
    ReactiveFormsModule,
    MatInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    FormsModule,
    NgIf,
    MatNativeDateModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatButton,
    MatIcon,
    MatHint,
    MatSuffix,

  ],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent implements OnInit{

  @ViewChild('timepicker') timepicker: any;


  appointmentForm !: FormGroup ;
  animals:string[] = [];
  doctors: string[] =[];
  appointments$: Observable<IAppointmentModel[]>;
  private idCounter: number = 3;


  constructor(private fb: FormBuilder, private appointmentService: AppointmentService,private doctorService : DoctorService) {
    this.appointments$ = this.appointmentService.appointments$;
  }

  ngOnInit(): void {
    this.getAnimals();
    this.getDoctors();
    this.appointmentForm = this.fb.group({
      id: [this.generateId()],
      animal: this.fb.group({
        id: [this.generateId()],
        name: ['', Validators.required],
        species: ['', Validators.required],
        details: ['']
      }),
      date: ['', Validators.required],
      time: ['', Validators.required],
      doctorName: ['', Validators.required],
      diagnosis: [''],
      status: [StatusEnum.created]
    });
  }

  onSubmit(): void {
    console.log(this.appointmentForm.value);

    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      const appointment: IAppointmentModel = this.appointmentForm.value;
      this.appointmentService.createAppointment(appointment);
      console.log('Appointment submitted successfully', appointment);
      this.appointmentForm.reset(); // Reset the form after successful submission
    }
  }

  onClear(event: Event): void {
    event.stopPropagation();
    this.appointmentForm.get('time')?.reset();
  }

  openFromIcon(timepicker: any): void {
    timepicker.open();
  }

  generateId(): string {
    return (this.idCounter + 1).toString();
  }


  getAnimals(): void {
    this.animals = domesticAnimals;
  }

  getDoctors(): void {
    let temp = this.doctorService.getDoctors()
    temp.forEach(doct =>{
      this.doctors.push(doct.name);
    })
  }
}
