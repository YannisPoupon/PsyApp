import { User } from "./user";

export interface Psy extends User {
    adeliNumber: Number,
    approach: string,
    specializations?: string[],
    hourPrice: Number,
    consultationAddress: {
        town: string,
        zipCode: Number,
        street: string,
        streetNumber: Number,
    }
    coordinates : {
        lat: Number,
        lng: Number
    }
}