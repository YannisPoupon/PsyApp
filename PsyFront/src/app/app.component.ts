import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fader } from './route-animations';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader]
})
export class AppComponent {
  title = 'PsyFront';

  user: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user && this.user.token && this.user.userId) {
      this.auth.isAuth$.next(true);
    } else if (this.user && this.user.token && this.user.psyId) {
      this.auth.isAuth$.next(true);
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}


