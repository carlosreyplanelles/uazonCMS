import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ApiService } from './api/api.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    
    constructor(public apiService: ApiService, public router: Router) { }

    canActivate(): boolean {
        if(!this.apiService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}