import {Component, OnInit} from '@angular/core';
import {IAppointmentModel, StatusEnum} from "../../../../models/IAppointmentModel";
import {AppointmentService} from "../../../../services/appointment.services";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatOption, MatSelect} from "@angular/material/select";
import {DatePipe, KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatLine, MatNativeDateModule} from "@angular/material/core";
import {MatList, MatListItem} from "@angular/material/list";
import mockAppointments from "../../../../mock-data/appointments.data";
import appointments from "../../../../mock-data/appointments.data";


@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    MatCardTitle,
    MatLabel,
    MatCard,
    ReactiveFormsModule,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatDatepicker,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatSelect,
    MatOption,
    NgForOf,
    MatCardActions,
    MatButton,
    KeyValuePipe,
    NgIf,
    MatList,
    MatListItem,
    MatLine,
    DatePipe
  ],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit {
  appointmentId : string  = '' ;
  appointment : IAppointmentModel | null = null;

  constructor(private fb: FormBuilder,private appointmentService: AppointmentService, private router : ActivatedRoute) {
  }

  ngOnInit() {
    this.appointmentId = this.router.snapshot.paramMap.get('id') as string;
    this.appointment = this.appointmentService.getAppointmentById(this.appointmentId);
    console.log(this.createForms());

  }

  appointmentForm: FormGroup | undefined;
  animalForm : FormGroup | undefined;
  statusEnum = StatusEnum;
  appointments = mockAppointments;


  createForms(): void {
    this.createAnimalForm();
    this.createAppointmentForm();
  }

  createAnimalForm(): void {
    if(this.appointment) {
      this.animalForm = this.fb.group({
        name: [this.appointment.animal.name, Validators.required],
        species: [this.appointment.animal.species, Validators.required],
        details: [this.appointment.animal.details]
      });
    }
  }

  createAppointmentForm(): void {
    if (this.appointment) {
      this.appointmentForm = this.fb.group({
        id: [{value: this.appointment.id, disabled: true}, Validators.required],
        animal: this.animalForm,
        date: [this.appointment.date, Validators.required],
        doctorName: [this.appointment.doctorName, Validators.required],
        diagnosis: [this.appointment.diagnosis, Validators.required],
        status: [this.appointment.status, Validators.required]
      });
    }
  }

  onSubmit(): void {
    if(this.appointmentForm)
    if (this.appointmentForm.valid) {
      const updatedAppointment = this.appointmentForm.getRawValue();
      console.log('Updated Appointment:', updatedAppointment);
      // Save the updated appointment
    }
  }


  protected readonly StatusEnum = StatusEnum;
}
