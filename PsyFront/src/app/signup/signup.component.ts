import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  items: MenuItem[];

  passwordMatch: Boolean = true;
  signupForm: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      passwordCheck: [null, Validators.required]
    });

    this.items = [
      { label: 'Identifiants', routerLink: 'account' },
      { label: 'informations personnelles', routerLink: 'personal' },
      { label: 'Récapitulatif', routerLink: 'summary' }
    ]
  }
}
