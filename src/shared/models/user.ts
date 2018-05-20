export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;

    constructor(obj: Object) {
        Object.assign(this, obj);
    }
}