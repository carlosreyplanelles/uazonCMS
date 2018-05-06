export class Book {
    public id: number;
    public title: string;
    public isbn: string;
    public voto: number;
    public num_voto: number;
    public n_pags: number;
    public image_large: string;
    public image_medium: string;
    public isMonthPick: number;
    public timesSold: number;
    public atributos_extra: string;

    constructor(obj: Object) {
      Object.assign(this, obj);
    }
}
  