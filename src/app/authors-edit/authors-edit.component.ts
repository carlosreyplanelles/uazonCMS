import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { AuthorService } from '../../shared/services/api/authors.service';
import { Author } from '../../shared/models/authors';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.css']
})
export class AuthorsEditComponent implements OnInit {
  autor = {
    id:0,
    nombre: ""
  };
  ngOnInit(){
    this.autor.nombre = localStorage.getItem('authorName')
    this.autor.id = Number.parseInt(localStorage.getItem('authorId'));
  }
  constructor(public router: Router, private authorService: AuthorService) { }
  edit(){
    if(this.autor.nombre!="") {
      this.authorService.update(this.autor.id, new Author(this.autor)).subscribe(res => { console.log(res); });
      this.router.navigate(['autores']);
    }
  }
}
