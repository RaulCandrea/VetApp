import {Injectable} from "@angular/core";
import {DOCTORS} from "../mock-data/doctor.data";


@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  //am facut o metoda sa fie mai clean sa nu iau direct din doctor.data
  getDoctors() {
    return DOCTORS;
  }
}
