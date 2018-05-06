import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";
import { Author } from "../../models/authors";

export class AuthorService {
    constructor(private apiService: ApiService) { }

    getLast() {
        return [];
    }

    getAll() {
        return this.apiService.get('autores').map(res => res).map(authors => {
            let array = [];
            for(let author of authors) {
                array.push(new Author(author));
            }
            return array;
        });
    } 

    find(authorId) {
        return this.apiService.get('autores/'+authorId).do(res => new Array<Author>(res));
    }

    createNew(author: Author) {
        return this.apiService.post('autores',author);
    }

    update(id,author: Author) {
        return this.apiService.put('autores/'+id,author);
    }

    delete(id) {
        return this.apiService.delete('autores/'+id);
    }
}