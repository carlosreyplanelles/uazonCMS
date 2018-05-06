import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";
import { Pedido } from "../../models/pedido";

export class PedidoService {
    constructor(private apiService: ApiService) { }

    getLast() {
        return [];
    }

    getAll() {
        return this.apiService.get('pedidos').map(res => res.data).map(pedidos => {
            let array = [];
            for(let pedido of pedidos) {
                array.push(new Pedido(pedido));
            }
            return array;
        });
    }

    find(id) {
        return this.apiService.get('pedidos/'+id).do(res => new Array<Pedido>(res));
    }

    createNew(pedido: Pedido) {
        return this.apiService.post('pedidos',JSON.stringify(pedido));
    }

    update(id,pedido: Pedido) {
        return this.apiService.put('pedidos/'+id,JSON.stringify(pedido));
    }

    delete(id) {
        return this.apiService.delete('pedidos/'+id);
    }
}