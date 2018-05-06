export class Comment {
    id: number;
    autor: string;
    descripcion: string;
    validado: boolean;
    voto: number;
    libro_id: number;

    constructor(obj: Object) {
        Object.assign(this, obj);
    }
}