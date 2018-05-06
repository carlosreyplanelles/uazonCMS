export class User {
    id: number;
    name: string;
    email: string;
    facebook_id: string;

    constructor(obj: Object) {
        Object.assign(this, obj);
    }
}