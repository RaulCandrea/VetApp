import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DoctorService} from "../../../../services/doctor.services";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {domesticAnimals} from "../../../../mock-data/animals.data";
import {MatInput} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import { Observable} from "rxjs";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
import {MatIcon} from "@angular/material/icon";
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
export class AddAppointmentComponent implements OnInit {

  @ViewChild('timepicker') timepicker: any;


  appointments$: Observable<IAppointmentModel[]>;
  appointmentForm !: FormGroup;
  animals: string[] = [];
  doctors: string[] = [];

  private idCounter: number = 5;


  constructor(private fb: FormBuilder, private appointmentService: AppointmentService, private doctorService: DoctorService) {
    this.appointments$ = this.appointmentService.appointments$;
  }

  ngOnInit(): void {
    //get animal + doctors si formam form grup-ul
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

    if (this.appointmentForm.valid) {
      const appointment: IAppointmentModel = this.appointmentForm.value;
      this.appointmentService.createAppointment(appointment);
      this.appointmentForm.reset();
    }
  }


  //metoda pt time
  onClear(event: Event): void {
    event.stopPropagation();
    this.appointmentForm.get('time')?.reset();
  }

  //la fel
  openFromIcon(timepicker: any): void {
    timepicker.open();
  }

  //metoda sa generez un id nu mi-am batut capul cu id random am incrementat doar
  generateId(): string {
    return (this.idCounter + 1).toString();
  }


  getAnimals(): void {
    this.animals = domesticAnimals;
  }

  getDoctors(): void {
    let temp = this.doctorService.getDoctors()
    temp.forEach(doct => {
      this.doctors.push(doct.name);
    })
  }
}
