export class Pedido {
    total: number;
    fecha: Date;
    calle: string;
    numero: string;
    puerta: string;
    codigo_postal: string;
    usuario_id: number;
    pagado: boolean;

    constructor(obj: Object) {
        Object.assign(this, obj);
    }
}