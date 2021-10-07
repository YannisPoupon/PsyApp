import { Patient } from "./patient";
import { Psy } from "./psy";

export interface Appointment {
    patient: Patient;
    psy: Psy;
    date : Date;
    durationMinutes: Number;
    appointmentAddress: {
        type: {
          town: String,
          zipCode: Number,
          street: String,
          streetNumber: Number
        }, required: true
      }
}