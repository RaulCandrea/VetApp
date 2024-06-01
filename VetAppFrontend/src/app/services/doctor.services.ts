import {Injectable} from "@angular/core";
import {DOCTORS} from "../mock-data/doctor.data";


@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  getDoctors(){
    return DOCTORS;
  }
}
