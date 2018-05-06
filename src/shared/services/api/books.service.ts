import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";
import { Book } from "../../models/book";

export class BookService {
    constructor(private apiService: ApiService) { }

    getLast() {
        return [];
    }

    getAll() {
        return this.apiService.get('libros').map(res => res).map(books => {
            let array = [];
            alert(books)
            for(let book of books) {
                array.push(new Book(book));
            }
            return array;
        });
    }

    find(bookId) {
        return this.apiService.get('books/'+bookId).do(res => new Array<Book>(res));
    }

    createNew(book: Book) {
        return this.apiService.post('books',book);
    }

    update(id,book: Book) {
        return this.apiService.put('books/'+id,book);
    }

    delete(id) {
        return this.apiService.delete('books/'+id);
    }
}