import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Psy } from '../models/psy';
import { User } from '../models/user';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  userInfos: User;
  psyInfos: Psy;

  constructor(public signServ: SignupService, private router: Router) { }

  ngOnInit(): void {

    this.userInfos = this.signServ.userInfos;

    if(this.router.url.includes('professionnal')) {
      this.psyInfos = this.signServ.psyInfos;
    }

  }

  previousPage() {
    if (this.router.url.includes('professionnal')) {
      this.router.navigate(['signup/professionnal/professionnal']);
    } else {
      this.router.navigate(['signup/personal']);
    }

  }

  submit() {
    if (this.router.url.includes('professionnal')) {
      this.signServ.signup('psy');
    } else {
      this.signServ.signup('user');
    }
    setTimeout(() => {
      this.router.navigate(['/']);
      this.signServ.userInfos = {
        userType: null,
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        address: {
          town: null,
          zipCode: null,
          street: null,
          streetNumber: null
        },
      };
      this.signServ.psyInfos = {
        userType: null,
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        address: {
          town: null,
          zipCode: null,
          street: null,
          streetNumber: null
        },
        adeliNumber: null,
        approach: null,
        specializations: null,
        hourPrice: null,
        consultationAddress: {
          town: null,
          zipCode: null,
          street: null,
          streetNumber: null,
        },
        coordinates: {
          lat: null,
          lng: null
        }
      }
    }, 2000)
  }

}
