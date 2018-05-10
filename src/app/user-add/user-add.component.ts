import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../shared/services/api/authors.service';
import { Book } from '../../shared/models/book';
import { BookService } from '../../shared/services/api/books.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/api/users.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  constructor(public router: Router, private UserService: UserService) { }
  usr={
    nombre: "",
    password: "",
    Direccion: "",
    correo: "",
  }
  user:User;
 
  ngOnInit() {}
  selectedAuthor(event : any){
  }
  Add(){
    
    this.user = new User(this.usr);
    this.UserService.createNew(this.user).subscribe(res => { 
      alert("Usuario creado");
      this.router.navigate(['users'])
      return this.user;
    },
    error => {
      alert(error.message)
    });
  }
}
