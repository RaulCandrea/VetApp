import {IAnimalModel} from "./IAnimalModel";


export enum StatusEnum {
  "created",
  "progress",
  "done"
}

export interface IAppointmentModel {
  id:string,
  animal: IAnimalModel,
  date: Date,
  doctorName: string,
  diagnosis: string,
  status: StatusEnum,
}
