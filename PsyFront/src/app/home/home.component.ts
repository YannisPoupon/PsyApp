import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router : Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  goToInfos() {
    this.router.navigate(['infos']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
