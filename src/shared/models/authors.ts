export class Author {
  public id: number;
  public nombre: string;


    constructor(obj: Object) {
      Object.assign(this, obj);
    }
}
  