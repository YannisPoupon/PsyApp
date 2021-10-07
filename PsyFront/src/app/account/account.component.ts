import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Psy } from '../models/psy';
import { User } from '../models/user';
import { AppointmentService } from '../services/appointment.service';
import { PsyService } from '../services/psy.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;
  psy: Psy;
  appointments: any;

  constructor(private userService: UserService, private psyService: PsyService, private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('user')).userType === 'user'){
      this.userService.getUserById().subscribe((user: User) => this.user = user);
    } else if (JSON.parse(localStorage.getItem('user')).userType === 'psy') {
      this.psyService.getPsyById().subscribe((psy: Psy) => this.psy = psy);
    }

    this.getMyAppointments();
  }

  getMyAppointments() {
    this.appointmentService.getMyAppointments().subscribe(data => {
      this.appointments = data;
    });
  }
}
