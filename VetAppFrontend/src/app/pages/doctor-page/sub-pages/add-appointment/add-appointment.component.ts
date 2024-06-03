import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DoctorService} from "../../../../services/doctor.services";
import {IDoctorModel} from "../../../../models/IDoctorModel";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {domesticAnimals} from "../../../../mock-data/animals.data";
import {MatInput} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {map, Observable, startWith} from "rxjs";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";


@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [
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

  ],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent implements OnInit{

  appointmentForm: FormGroup | undefined;
  animals:string[] = [];
  doctors: IDoctorModel[] =[];

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService
  ) { }

  animalControl = new FormControl();
  filteredAnimals: Observable<string[]> | undefined;
  selectedAnimal: string = '';
  time: any;



  ngOnInit(): void {
    this.createForm();
    this.getAnimals();
    this.getDoctors();
    this.filteredAnimals = this.animalControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterAnimals(value))
    );
  }

  createForm(): void {
    this.appointmentForm = this.fb.group({
      animal: [null, Validators.required],
      doctor: [null, Validators.required],
      date: [null, Validators.required],
      time:[null,Validators.required],
      diagnosis: [null, Validators.required]
    });
  }

  getAnimals(): void {
  this.animals = domesticAnimals;
  }

  getDoctors(): void {
    this.doctors = this.doctorService.getDoctors()
}

  onSubmit(): void {
    if (this.appointmentForm && this.appointmentForm.valid) {
      const formData = this.appointmentForm.value;
    }
  }




  private _filterAnimals(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.animals.filter(animal => animal.toLowerCase().includes(filterValue));
  }

}
