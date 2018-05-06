import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../shared/services/api/authors.service';
import { Author } from '../../shared/models/authors';

@Component({
  selector: 'app-authors-add',
  templateUrl: './authors-add.component.html',
  styleUrls: ['./authors-add.component.css']
})
export class AuthorsAddComponent implements OnInit {
  constructor(public router: Router, private AuthorService: AuthorService) { }
  autor={
    id: Number,
    nombre: ""
  };
  author:Author;
  
  Add() {

    if(this.autor.nombre != null) {
      this.author = new Author(this.autor);
      this.AuthorService.createNew(this.author).subscribe(res => { console.log(res); });
      this.router.navigate(['autores']);
    }
  }

  ngOnInit() {}
  

}
