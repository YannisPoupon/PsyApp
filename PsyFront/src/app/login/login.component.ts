import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: String;
  successMessage: String;
  showError: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.auth.login(email, password)
      .then(() => {
        this.successMessage = 'Identification réussie';
        setTimeout(() => {
          this.router.navigate(['/']);
          this.successMessage = null;
        }, 1500);
      }).catch((data) => {
        const error = data.error.error
        if (error) {
          this.errorMessage = error;
          this.showError = true;
          setTimeout(() => {
            this.errorMessage = null;
            this.showError = false;
          }, 5000)
        }
      });
  }
}
