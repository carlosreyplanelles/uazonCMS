import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/api/users.service';
import { ApiService } from '../../shared/services/api/api.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-users-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  constructor(private router: Router, private ApiService: ApiService, private UserService: UserService) { }
  user: User;
  ngOnInit() {
    this.UserService.find(localStorage.getItem('userId')).subscribe(
      res =>{
        this.user = res;
      },
      error => {
        console.log(error);
      });

  }
  edit(){
    this.UserService.update(Number.parseInt(localStorage.getItem('userId')), this.user).subscribe(res => { 
      alert("Usuario Editado");
      return this.user;
    },
    error => {
      alert(error.message)
    });

    

  }

}
