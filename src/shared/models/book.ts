export class Book {
  id: number;
  isbn: number;
  voto: number;
  num_voto: number;
  n_pags: number;
  precio: number;
  titulo: string;
  editorial: string;
  atributos_extra: number;
  updated_at: Date;
  created_at: Date

    constructor(obj: Object) {
      Object.assign(this, obj);
    }
}
  