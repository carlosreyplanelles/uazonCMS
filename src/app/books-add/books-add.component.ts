import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../shared/services/api/authors.service';
import { Book } from '../../shared/models/book';
import { BookService } from '../../shared/services/api/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {

  constructor(public router: Router, private AuthorService: AuthorService, private BooksService: BookService) { }
  autores = [];
  book={
    isbn: Number,
    voto: Number,
    num_voto: Number,
    n_pags: Number,
    precio: Number,
    titulo: String,
    editorial: String,
    atributos_extra: "{}"
  }
  libro:Book;
 
  ngOnInit() {

    this.AuthorService.getAll().subscribe(
      res =>{
        this.autores = res;
      },
      error => {
        console.log(error);
      });
      
  }
  selectedAuthor(event : any){
  }
  Add(){
    
    this.libro = new Book(this.book);
    this.libro.voto = 0;
    this.libro.num_voto = 0;
    this.BooksService.createNew(this.libro).subscribe(res => { 
      alert("Libro creado");
      this.router.navigate(['libros'])
      return this.libro;
      
      
    },
    error => {
      if(this.libro.isbn.toString.length < 9 || isNaN(this.libro.isbn)){
        alert("El formato del ISBN es incorrecto. Introduce un número de 9 cifras")
      }
      alert(error.message)
    });
  }
}
