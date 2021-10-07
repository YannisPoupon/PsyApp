import { Psy } from "./psy";
import { User } from "./user";

 export interface Patient extends User {
     psy? : Psy;
 }