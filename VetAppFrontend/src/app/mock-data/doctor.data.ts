import {IDoctorModel} from "../models/IDoctorModel";


const doctor1: IDoctorModel = {
  id: 'd1',
  name: 'Dr. John Smith',
  rate: 4.5,
  speciality: 'Cardiology',
  tasksToday: 8,
};

const doctor2: IDoctorModel = {
  id: 'd2',
  name: 'Dr. Emily Johnson',
  rate: 4.8,
  speciality: 'Neurology',
  tasksToday: 5,
};

const doctor3: IDoctorModel = {
  id: 'd3',
  name: 'Dr. Michael Brown',
  rate: 4.3,
  speciality: 'Pediatrics',
  tasksToday: 10,
};

export const DOCTORS: IDoctorModel[] = [doctor1, doctor2, doctor3];
