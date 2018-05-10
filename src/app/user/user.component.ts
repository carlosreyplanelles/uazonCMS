import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/api/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  users=[];
  constructor(private router: Router,private UserService: UserService) {}
  showAdd(){
    this.router.navigate(['booksAdd']);
  }
 
  ngOnInit() {
    this.UserService.getAll().subscribe(
      res =>{
        this.users = res;
      },
      error => {
        console.log(error);
      });
  }

  showEdit(id, nombre){
    localStorage.setItem('userId', id);
    this.router.navigate(['userEdit/'+id]);
  }
  
  delete(id, name){
    let msg = confirm("¿Desea eliminar al usuario "+ name+"?");
    if(msg)
    {
      this.UserService.delete(id).subscribe(res => { console.log(res); });
      this.UserService.getAll().subscribe(
        res =>{
          this.users = res;
        },
        error => {
          console.log(error);
        });
    }    
  }

}
