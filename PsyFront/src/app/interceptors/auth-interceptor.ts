import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if(req.headers.get('skip')) {
            const newRequest = req.clone({
                headers: req.headers.delete('skip')
            });
            return next.handle(newRequest);
        }
        let authToken = this.auth.token;
        if (localStorage.getItem('user')) {
            authToken = JSON.parse(localStorage.getItem('user')).token
        }
        const userId = this.auth.userId;
        const newRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        if (userId && authToken) {
            this.auth.isAuth$.next(true);
        }
        return next.handle(newRequest);
    }
}