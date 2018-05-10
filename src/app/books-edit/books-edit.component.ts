import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../shared/services/api/authors.service';
import { ApiService } from '../../shared/services/api/api.service';
import { BookService } from '../../shared/services/api/books.service';
import { Book } from '../../shared/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  constructor(private router: Router, private ApiService: ApiService, private AuthorService: AuthorService, private BooksService: BookService) { }
  book:Book;
  autores=[];
  ngOnInit() {
    this.BooksService.find(localStorage.getItem('bookId')).subscribe(
      res =>{
        this.book = res;
      },
      error => {
        console.log(error);
      });

      this.AuthorService.getAll().subscribe(
        res =>{
          this.autores = res;
        },
        error => {
          console.log(error);
        });
  }
  edit(){
    this.BooksService.update(Number.parseInt(localStorage.getItem('bookId')), this.book).subscribe(res => { 
      alert("Libro Editado");
      return this.book;
    },
    error => {
      if(this.book.isbn.toString.length != 9 || isNaN(this.book.isbn)){
        alert("El formato del ISBN es incorrecto. Introduce un número de 9 cifras")
      }
      alert(error.message)
    });

    

  }

}
