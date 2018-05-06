import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";
import { Comment } from "../../models/comment";

export class CommentService {
    constructor(private apiService: ApiService) { }

    getLast() {
        return [];
    }

    getAll() {
        return this.apiService.get('comments').map(res => res.data).map(comments => {
            let array = [];
            for(let comment of comments) {
                array.push(new Comment(comment));
            }
            return array;
        });
    }

    find(id) {
        return this.apiService.get('comments/'+id).do(res => new Array<Comment>(res));
    }

    approve(id,comment) {
        return this.apiService.put('comments/'+id,comment).map(res => res);
    }

    delete(id) {
        return this.apiService.delete('comments/'+id);
    }
}