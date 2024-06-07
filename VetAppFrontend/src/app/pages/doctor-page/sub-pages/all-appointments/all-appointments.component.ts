import {Component, OnInit, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {IAppointmentModel, StatusEnum} from "../../../../models/IAppointmentModel";
import mockAppointments from "../../../../mock-data/appointments.data";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AppointmentService} from "../../../../services/appointment.services";

@Component({
  selector: 'app-all-appointments',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatSort,
    MatMiniFabButton,
    MatHeaderRow,
    MatRow,
    MatIcon,
    MatRowDef,
    MatHeaderRowDef,
    MatPaginator,
    MatSortHeader,
    MatLabel,
    MatFormField,
    MatInput
  ],
  templateUrl: './all-appointments.component.html',
  styleUrl: './all-appointments.component.css'
})
export class AllAppointmentsComponent implements OnInit{
  displayedColumns: string[] = [
    'animal-name',
    'animal-species',
    'date',
    'doctor-name',
    'diagnosis',
    'status',
  ];
  appointments$: Observable<IAppointmentModel[]>;
  dataSource = new MatTableDataSource<IAppointmentModel>()

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router : Router,private appointmentService : AppointmentService) {
    this.appointments$ = this.appointmentService.appointments$;
  }

  ngOnInit() {
    this.appointments$.subscribe(data =>{
      this.dataSource.data = data;
    })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = this.customFilterPredicate;

  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  customFilterPredicate(data: IAppointmentModel, filter: string): boolean {
    const animalName = data.animal.name.toLowerCase();
    const animalSpecies = data.animal.species.toLowerCase();
    const date = data.date.toString().toLowerCase();
    const doctorName = data.doctorName.toLowerCase();
    const diagnosis = data.diagnosis.toLowerCase();
    const status = data.status.toString().toLowerCase();

    const searchTerm = filter.toLowerCase();

    return (
      animalName.includes(searchTerm) ||
      animalSpecies.includes(searchTerm) ||
      date.includes(searchTerm) ||
      doctorName.includes(searchTerm) ||
      diagnosis.includes(searchTerm) ||
      status.includes(searchTerm)
    );
  }





}
