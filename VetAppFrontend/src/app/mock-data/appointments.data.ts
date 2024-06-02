import {IAppointmentModel, StatusEnum} from "../models/IAppointmentModel";
import {IAnimalModel} from "../models/IAnimalModel";




// Mock animal data
const animal: IAnimalModel = {
  id:"1",
  name: "Fluffy",
  species: "Cat",
  details: "Super",
};

// Mock appointment data
const mockAppointments: IAppointmentModel[] = [
  {
    id: "1",
    animal: animal,
    date: new Date(),
    doctorName: "Dr. Smith",
    diagnosis: "Common cold",
    status: StatusEnum.created
  },
  {
    id: "2",
    animal: animal,
    date: new Date(),
    doctorName: "Dr. Johnson",
    diagnosis: "Fractured leg",
    status: StatusEnum.progress
  },
  {
    id: "3",
    animal: animal,
    date: new Date(),
    doctorName: "Dr. Brown",
    diagnosis: "Skin allergy",
    status: StatusEnum.done
  }

];

export default mockAppointments;
