import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";
import { User } from "../../models/user";

export class UserService {
    constructor(private apiService: ApiService) { }

    getLast() {
        return [];
    }

    getAll() {
        
        return this.apiService.get('users').map(res => res).map(users => {
            alert (users)
            let array = [];
            for(let user of users) {
                array.push(new User(user));
            }
            return array;
        });
    }

    find(id) {
        return this.apiService.get('users/'+id).do(res => new Array<User>(res));
    }

    createNew(user: User) {
        return this.apiService.post('users',user);
    }

    update(id,user: User) {
        return this.apiService.put('users/'+id,JSON.stringify(user));
    }

    updateAdmin(previousEmail: string,email:string,password:string,passwordConfirm:string) {
        let editInfo = {
            previousEmail: previousEmail,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        }
        return this.apiService.put('users',editInfo);
    }

    delete(id) {
        return this.apiService.delete('users/'+id);
    }
}