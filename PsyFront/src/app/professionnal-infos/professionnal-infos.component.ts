import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-professionnal-infos',
  templateUrl: './professionnal-infos.component.html',
  styleUrls: ['./professionnal-infos.component.css']
})
export class ProfessionnalInfosComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, public signServ : SignupService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      adeliNumber: [this.signServ.psyInfos.adeliNumber, Validators.required],
      approach: [this.signServ.psyInfos.approach, Validators.required],
      specializations: [this.signServ.psyInfos.specializations, Validators.required],
      hourPrice: [this.signServ.psyInfos.hourPrice, Validators.required],
      town: [this.signServ.psyInfos.address.town, Validators.required],
      zipCode: [this.signServ.psyInfos.address.zipCode, Validators.required],
      street: [this.signServ.psyInfos.address.street, Validators.required],
      streetNumber: [this.signServ.psyInfos.address.streetNumber, Validators.required],

    });
  }

  nextPage() {
    this.signServ.psyInfos.adeliNumber = this.signupForm.get('adeliNumber').value;
    this.signServ.psyInfos.approach = this.signupForm.get('approach').value;
    this.signServ.psyInfos.specializations = this.signupForm.get('specializations').value;
    this.signServ.psyInfos.hourPrice = this.signupForm.get('hourPrice').value;
    this.signServ.psyInfos.consultationAddress = {
      town: this.signupForm.get('town').value,
      zipCode: this.signupForm.get('zipCode').value,
      street: this.signupForm.get('street').value,
      streetNumber: this.signupForm.get('streetNumber').value
    }

    this.router.navigate(['signup/professionnal/summary']);
  }

  previousPage() {
    this.router.navigate(['signup/professionnal/personal']);
  }
}
