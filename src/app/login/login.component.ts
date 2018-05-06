import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;

  constructor(private apiService: ApiService,private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  onLogin() {
    if(this.email.length === 0) {
      return alert('Please input email');
    }
    if(this.password.length === 0) {
      return alert('Please input password')
    }
    localStorage.setItem('email',this.email);
    this.apiService.login(this.email,this.password).subscribe(resp => {
      this.router.navigate(['dashboard']);
    });
  }

}
