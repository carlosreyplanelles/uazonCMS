import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../shared/services/api/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  libros=[];
  constructor(private router: Router,private bookService: BookService) {}
  showAdd(){
    this.router.navigate(['booksAdd']);
  }
 
  ngOnInit() {
    this.bookService.getAll().subscribe(
      res =>{
        this.libros = res;
      },
      error => {
        console.log(error);
      });
  }

  showEdit(id, nombre){
    localStorage.setItem('bookId', id);
    this.router.navigate(['booksEdit/'+id]);
  }
  
  delete(id, name){
    let msg = confirm("¿Desea eliminar el libro "+ name+"?");
    if(msg)
    {
      this.bookService.delete(id).subscribe(res => { console.log(res); });
      this.bookService.getAll().subscribe(
        res =>{
          this.libros = res;
        },
        error => {
          console.log(error);
        });
    }    
  }

}
