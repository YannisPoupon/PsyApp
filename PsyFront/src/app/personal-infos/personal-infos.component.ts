import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-personal-infos',
  templateUrl: './personal-infos.component.html',
  styleUrls: ['./personal-infos.component.css']
})
export class PersonalInfosComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder : FormBuilder, private router : Router, public signServ: SignupService,) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: [this.signServ.userInfos.firstName, [Validators.required]],
      lastName: [this.signServ.userInfos.lastName, Validators.required],
      town: [this.signServ.userInfos.address.town, Validators.required],
      zipCode: [this.signServ.userInfos.address.zipCode, Validators.required],
      street: [this.signServ.userInfos.address.street, Validators.required],
      streetNumber: [this.signServ.userInfos.address.streetNumber, Validators.required],
    });
  }

  nextPage() {
    if (this.signupForm.get('firstName').value && this.signupForm.get('lastName').value) {
      this.signServ.userInfos.firstName = this.signupForm.get('firstName').value;
      this.signServ.userInfos.lastName = this.signupForm.get('lastName').value;
      this.signServ.userInfos.address = {
        town: this.signupForm.get('town').value,
        zipCode: this.signupForm.get('zipCode').value,
        street: this.signupForm.get('street').value,
        streetNumber: this.signupForm.get('streetNumber').value
      };
    }
    if (this.router.url.includes('professionnal')) {
      this.router.navigate(['signup/professionnal/professionnal']);
    } else {
      this.router.navigate(['signup/summary'])
    }
  }

  previousPage() {
    if (this.router.url.includes('professionnal')) {
      this.router.navigate(['signup/professionnal/account']);
    } else {
      this.router.navigate(['signup/account']);
    }
  }

}
