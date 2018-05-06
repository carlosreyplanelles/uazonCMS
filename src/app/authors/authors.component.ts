import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes, RouterLink, Router } from '@angular/router';
import { Alert, WebDriver } from 'selenium-webdriver';
import { AuthorService } from '../../shared/services/api/authors.service';
import { Observable } from 'rxjs/Observable';
import { Author} from '../../shared/models/authors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  autores=[];

  ngOnInit(): void {
    this.AuthorService.getAll().subscribe(
      res =>{
        this.autores = res;
      },
      error => {
        console.log(error);
      });
    
  }

  constructor(private router: Router,private AuthorService: AuthorService) { }

  showAdd(){
    this.router.navigate(['autoresAdd']);
  }

  showEdit(id, nombre){
    localStorage.setItem('authorId', id);
    localStorage.setItem('authorName', nombre);
    alert(localStorage.getItem('authorName'))
    this.router.navigate(['autoresEdit/'+id]);
  }
  
  delete(id, name){
    let msg = confirm("¿Desea eliminar al autor "+ name+"?");
    if(msg)
    {
      this.AuthorService.delete(id).subscribe(res => { console.log(res); });
      this.router.navigate(['autores']);
    }    
  }

}
