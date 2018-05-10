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
            for(let book of books) {
                array.push(new Book(book));
            }
            return array;
        });
    }

    find(bookId) {
        return this.apiService.get('libros/'+bookId).do(res => new Array<Book>(res));
    }

    createNew(book: Book) {
        return this.apiService.post('libros',book);
    }

    update(id,book: Book) {
        return this.apiService.put('libros/'+id,book);
    }

    delete(id) {
        return this.apiService.delete('libros/'+id);
    }
}