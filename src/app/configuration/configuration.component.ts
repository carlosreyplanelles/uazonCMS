import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/api/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  private previousEmail: string;
  private email: string;
  private password: string;
  private passwordConfirm: string;

  constructor(private userService: UserService,private router: Router) {
    this.previousEmail = '';
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
  }

  ngOnInit() {
    this.previousEmail = localStorage.getItem('email');
    this.email = this.previousEmail;
  }

  onEdit() {
    console.log(this.previousEmail);
    console.log(this.email);
    console.log(this.password);
    console.log(this.passwordConfirm);
    if(this.email.length === 0 || this.previousEmail.length === 0) {
      return alert('Please input emails');
    }
    if(this.password.length === 0 || this.previousEmail.length === 0 || this.password !== this.passwordConfirm) {
      return alert('Passwords must match and not be empty');
    }
    this.userService.updateAdmin(this.previousEmail,this.email,this.password,this.passwordConfirm).subscribe((res) => {
        alert('Successfully changed info');
        localStorage.setItem('email',this.email);
        this.router.navigate(['dashboard']);
    },
    error => console.log(error));
  }

}
